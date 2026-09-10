#!/usr/bin/env node
/**
 * Render 10 Instagram 4:5 MP4s from Motion Canvas.
 * Requires: vite on :9000, Chrome, ffmpeg, @motion-canvas/ffmpeg.
 */
import {spawn, execFileSync} from "node:child_process";
import {existsSync, mkdirSync, readdirSync, unlinkSync} from "node:fs";
import path from "node:path";
import {fileURLToPath} from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "output");
const destDir = path.resolve(root, "../public/ig-portfolio");

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function json(url, init) {
  const res = await fetch(url, init);
  const text = await res.text();
  try {
    return JSON.parse(text);
  } catch {
    throw new Error(`${url} → ${res.status} ${text.slice(0, 200)}`);
  }
}

async function waitFor(fn, label, tries = 60) {
  for (let i = 0; i < tries; i++) {
    try {
      const v = await fn();
      if (v) return v;
    } catch {
      /* retry */
    }
    await sleep(1000);
  }
  throw new Error(`timeout: ${label}`);
}

const vite = spawn("npx", ["vite", "--host", "127.0.0.1", "--port", "9000"], {
  cwd: root,
  stdio: "inherit",
  env: process.env,
});

const chrome = spawn(
  "google-chrome",
  [
    "--headless=new",
    "--disable-gpu",
    "--no-sandbox",
    "--user-data-dir=/tmp/chrome-mc-render",
    "--window-size=1280,900",
    "http://127.0.0.1:9000",
  ],
  {stdio: "inherit"},
);

function shutdown() {
  chrome.kill("SIGTERM");
  vite.kill("SIGTERM");
}

process.on("exit", shutdown);
process.on("SIGINT", () => {
  shutdown();
  process.exit(1);
});

try {
  await waitFor(async () => {
    const s = await json("http://127.0.0.1:9000/__agent/status");
    return s.connected ? s : null;
  }, "agent connected", 90);

  await json("http://127.0.0.1:9000/__agent/settings/size", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({width: 1080, height: 1350}),
  });
  await json("http://127.0.0.1:9000/__agent/settings/rendering-fps", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({fps: 30}),
  });
  await json("http://127.0.0.1:9000/__agent/settings/background", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({color: "#1A1A2E"}),
  });

  mkdirSync(outDir, {recursive: true});
  mkdirSync(destDir, {recursive: true});
  for (const f of readdirSync(outDir)) {
    if (f.endsWith(".mp4")) unlinkSync(path.join(outDir, f));
  }

  await json("http://127.0.0.1:9000/__agent/render", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({exporter: "@motion-canvas/ffmpeg", fps: 30}),
  });

  const mp4 = await waitFor(async () => {
    const files = readdirSync(outDir).filter((f) => f.endsWith(".mp4") && !f.startsWith("card-"));
    if (!files.length) return null;
    const full = path.join(outDir, files[0]);
    try {
      const out = execFileSync(
        "ffprobe",
        ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", full],
        {encoding: "utf8"},
      );
      const duration = Number(out.trim());
      if (Number.isFinite(duration) && duration >= 59) return files[0];
    } catch {
      return null;
    }
    return null;
  }, "ffmpeg mp4", 400);

  const full = path.join(outDir, mp4);
  await new Promise((resolve, reject) => {
    const split = spawn("node", [path.join(root, "scripts/split-cards.mjs"), full], {
      cwd: root,
      stdio: "inherit",
    });
    split.on("exit", (code) => (code === 0 ? resolve() : reject(new Error("split-cards"))));
  });
  console.log("cards copied to", destDir);
} finally {
  shutdown();
}
