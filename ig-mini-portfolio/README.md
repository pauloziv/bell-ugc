# Mini portfólio Instagram — Motion Canvas

10 cards **1080×1350 (4:5)**, **6 s**, **30 fps**. Spec: `docs/research/2026-09-10-instagram-ugc-mini-portfolio.md`.

## Dev

```bash
cd ig-mini-portfolio
npm install
npm start
# http://localhost:9000
```

Editor: Video Settings → 1080×1350, 30 fps, exporter Video (FFmpeg).

## Render

Chrome + ffmpeg no PATH.

```bash
npm run render
```

Copia MP4s para `public/ig-portfolio/`. Preview no site: `/mini-portfolio`.
