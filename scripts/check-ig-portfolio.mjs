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
  "ig-mini-portfolio/src/scenes/04-indicacoes.tsx",
  "ig-mini-portfolio/src/scenes/09-rua.tsx",
  "ig-mini-portfolio/src/scenes/10-cta.tsx",
  "docs/research/2026-09-10-instagram-ugc-mini-portfolio.md",
];

const videos = [
  "01-cover.mp4",
  "02-marcas.mp4",
  "03-beleza.mp4",
  "04-indicacoes.mp4",
  "05-moda.mp4",
  "06-ads.mp4",
  "07-salao.mp4",
  "08-vida.mp4",
  "09-rua.mp4",
  "10-cta.mp4",
];

const hashes = new Set();

const missing = files.filter((f) => !existsSync(path.join(process.cwd(), f)));
if (missing.length) {
  console.error("missing files", missing);
  process.exit(1);
}

const copy = readFileSync(path.join(process.cwd(), "src/data/ig-mini-portfolio.ts"), "utf8");
if (copy.includes("R$") || copy.includes("pacotes") || copy.includes("Briefing")) {
  console.error("carousel copy still looks like a rate card");
  process.exit(1);
}

for (const scene of [
  "ig-mini-portfolio/src/scenes/01-cover.tsx",
  "ig-mini-portfolio/src/scenes/04-indicacoes.tsx",
  "ig-mini-portfolio/src/scenes/09-rua.tsx",
  "ig-mini-portfolio/src/scenes/10-cta.tsx",
]) {
  const text = readFileSync(path.join(process.cwd(), scene), "utf8");
  if (text.includes("R$")) {
    console.error("price leaked into", scene);
    process.exit(1);
  }
}

const lata = readFileSync(path.join(process.cwd(), "ig-mini-portfolio/src/scenes/04-indicacoes.tsx"), "utf8");
const rua = readFileSync(path.join(process.cwd(), "ig-mini-portfolio/src/scenes/09-rua.tsx"), "utf8");
if (!lata.includes("bel-geladeira-lata") || !lata.includes("bel-geladeira-costas")) {
  console.error("fridge photos missing from 04-indicacoes");
  process.exit(1);
}
if (!rua.includes("bel-geladeira-lata") || !rua.includes("bel-geladeira-costas")) {
  console.error("fridge photos missing from 09-rua");
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
