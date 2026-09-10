#!/usr/bin/env node
import {createHash} from "node:crypto";
import {existsSync, readFileSync, statSync} from "node:fs";
import {execFileSync} from "node:child_process";
import path from "node:path";

const files = [
  "public/images/ig-portfolio/bel-geladeira-lata.jpg",
  "public/images/ig-portfolio/bel-geladeira-costas.jpg",
  "src/data/ig-mini-portfolio.ts",
  "src/app/mini-portfolio/page.tsx",
  "ig-mini-portfolio/src/scenes/01-cover.tsx",
  "ig-mini-portfolio/src/scenes/04-estilo-lata.tsx",
  "ig-mini-portfolio/src/scenes/05-estilo-costas.tsx",
  "ig-mini-portfolio/src/scenes/10-cta.tsx",
  "docs/research/2026-09-10-instagram-ugc-mini-portfolio.md",
];

const videos = [
  "01-cover.mp4",
  "02-quem.mp4",
  "03-nichos.mp4",
  "04-estilo-lata.mp4",
  "05-estilo-costas.mp4",
  "06-formatos.mp4",
  "07-marcas.mp4",
  "08-processo.mp4",
  "09-pacotes.mp4",
  "10-cta.mp4",
];

const hashes = new Set();

const missing = files.filter((f) => !existsSync(path.join(process.cwd(), f)));
if (missing.length) {
  console.error("missing files", missing);
  process.exit(1);
}

for (const name of videos) {
  const file = path.join(process.cwd(), "public/ig-portfolio", name);
  if (!existsSync(file)) {
    console.error("missing video", name);
    process.exit(1);
  }
  if (statSync(file).size < 50_000) {
    console.error("video too small", name, statSync(file).size);
    process.exit(1);
  }
  const digest = createHash("sha256").update(readFileSync(file)).digest("hex");
  if (hashes.has(digest)) {
    console.error("duplicate video bytes", name);
    process.exit(1);
  }
  hashes.add(digest);
  try {
    const out = execFileSync(
      "ffprobe",
      [
        "-v",
        "error",
        "-select_streams",
        "v:0",
        "-show_entries",
        "stream=width,height,avg_frame_rate",
        "-show_entries",
        "format=duration",
        "-of",
        "json",
        file,
      ],
      {encoding: "utf8"},
    );
    const data = JSON.parse(out);
    const stream = data.streams[0];
    const duration = Number(data.format.duration);
    if (stream.width !== 1080 || stream.height !== 1350) {
      console.error("bad size", name, stream.width, stream.height);
      process.exit(1);
    }
    if (duration < 5.9 || duration > 6.2) {
      console.error("bad duration", name, duration);
      process.exit(1);
    }
  } catch (err) {
    console.warn("ffprobe skip", name, err instanceof Error ? err.message : err);
  }
}

console.log("ig mini-portfolio files ok");
