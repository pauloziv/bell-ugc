#!/usr/bin/env bash
# Compress a portfolio reel for CDN + extract a tiny WebP poster.
# Usage: ./scripts/compress-reel.sh <input> <slug>
# Example: ./scripts/compress-reel.sh ~/Downloads/unboxing.mov unboxing
set -euo pipefail

IN="${1:?usage: compress-reel.sh <input-file> <slug>}"
SLUG="${2:?usage: compress-reel.sh <input-file> <slug>}"

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT_DIR="${ROOT}/reels-local"
POSTER_DIR="${ROOT}/public/images/reels"
mkdir -p "$OUT_DIR" "$POSTER_DIR"

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "ffmpeg missing. brew install ffmpeg  OR  apt install ffmpeg" >&2
  exit 1
fi

MP4="${OUT_DIR}/${SLUG}.mp4"
POSTER="${POSTER_DIR}/${SLUG}.webp"

# 9:16, max 1080x1920, H.264 + AAC, faststart so first byte can play.
# CRF 23 ≈ 1–4MB for a 12–20s reel. Raise to 26 if file > 6MB.
ffmpeg -y -i "$IN" \
  -vf "scale=1080:1920:force_original_aspect_ratio=decrease,pad=1080:1920:(ow-iw)/2:(oh-ih)/2:black,fps=30" \
  -c:v libx264 -profile:v high -pix_fmt yuv420p -preset slow -crf 23 \
  -movflags +faststart \
  -c:a aac -b:a 96k -ac 1 \
  "$MP4"

ffmpeg -y -i "$MP4" \
  -vf "scale=540:960:force_original_aspect_ratio=increase,crop=540:960" \
  -vframes 1 -c:v libwebp -quality 78 \
  "$POSTER"

BYTES="$(wc -c < "$MP4" | tr -d ' ')"
MB="$(awk -v b="$BYTES" 'BEGIN { printf "%.2f", b/1024/1024 }')"
echo "mp4    ${MP4}  (${MB} MB)"
echo "poster ${POSTER}"
echo
echo "Next:"
echo "  1. Upload mp4 to R2/Blob as ${SLUG}.mp4"
echo "  2. Set NEXT_PUBLIC_REELS_CDN (no trailing slash)"
echo "  3. In src/data/reels.ts set imgUrl to /images/reels/${SLUG}.webp"
if awk -v b="$BYTES" 'BEGIN { exit !(b > 6000000) }'; then
  echo "WARN: ${MB} MB is fat. Re-run with -crf 26 or cut duration." >&2
fi
