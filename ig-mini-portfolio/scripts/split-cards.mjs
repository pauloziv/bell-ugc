#!/usr/bin/env node
/**
 * Split a 60s Motion Canvas render into 10 Instagram cards.
 * 1080×1350, 6.00s, 30fps, H.264 yuv420p + AAC silence.
 */
import {spawn, execFileSync} from "node:child_process";
import {existsSync, mkdirSync, readdirSync} from "node:fs";
import path from "node:path";
import {fileURLToPath} from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "output");
const destDir = path.resolve(root, "../public/ig-portfolio");
const NAMES = [
  "01-cover",
  "02-marcas",
  "03-beleza",
  "04-indicacoes",
  "05-moda",
  "06-ads",
  "07-salao",
  "08-vida",
  "09-rua",
  "10-cta",
];

function run(cmd, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, {stdio: "inherit"});
    child.on("exit", (code) =>
      code === 0 ? resolve() : reject(new Error(`${cmd} ${args.join(" ")} → ${code}`)),
    );
  });
}

function pickSource() {
  if (process.argv[2]) return path.resolve(process.argv[2]);
  const files = readdirSync(outDir)
    .filter((f) => f.endsWith(".mp4") && !f.startsWith("card-"))
    .map((f) => path.join(outDir, f));
  if (!files.length) throw new Error(`no mp4 in ${outDir}`);
  files.sort();
  const named = files.find((f) => f.includes("ig-mini-portfolio")) ?? files[files.length - 1];
  return named;
}

const src = pickSource();
if (!existsSync(src)) throw new Error(`missing ${src}`);
mkdirSync(destDir, {recursive: true});
mkdirSync(outDir, {recursive: true});

let sourceDuration = NAMES.length * 6;
try {
  const probed = execFileSync(
    "ffprobe",
    ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", src],
    {encoding: "utf8"},
  );
  const d = Number(probed.trim());
  if (Number.isFinite(d) && d > 50) sourceDuration = d;
} catch {
  /* keep 60s fallback */
}
const sceneSeconds = sourceDuration / NAMES.length;

for (let i = 0; i < NAMES.length; i++) {
  const start = (i * sceneSeconds).toFixed(3);
  const tmp = path.join(outDir, `card-${String(i).padStart(2, "0")}.mp4`);
  const dst = path.join(destDir, `${NAMES[i]}.mp4`);
  console.log(`card ${i + 1}/10  t=${start}s  → ${NAMES[i]}.mp4`);
  await run("ffmpeg", [
    "-y",
    "-ss",
    start,
    "-t",
    "6",
    "-i",
    src,
    "-f",
    "lavfi",
    "-t",
    "6",
    "-i",
    "anullsrc=channel_layout=stereo:sample_rate=48000",
    "-map",
    "0:v:0",
    "-map",
    "1:a:0",
    "-c:v",
    "libx264",
    "-pix_fmt",
    "yuv420p",
    "-profile:v",
    "high",
    "-crf",
    "18",
    "-preset",
    "fast",
    "-c:a",
    "aac",
    "-ar",
    "48000",
    "-ac",
    "2",
    "-b:a",
    "96k",
    "-movflags",
    "+faststart",
    tmp,
  ]);
  await run("cp", [tmp, dst]);
}

console.log("wrote", destDir);
