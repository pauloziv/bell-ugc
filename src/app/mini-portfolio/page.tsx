import type {Metadata} from "next";
import {existsSync} from "node:fs";
import path from "node:path";
import IgMiniPortfolio from "@/components/ig-portfolio/IgMiniPortfolio";
import {IG_SLIDES} from "@/data/ig-mini-portfolio";

export const metadata: Metadata = {
  title: "Mini portfólio Instagram",
  description:
    "10 cards em vídeo 4:5 — mini portfólio UGC da Creator Bel para o feed.",
};

export default function MiniPortfolioPage() {
  const videos = Object.fromEntries(
    IG_SLIDES.map((slide) => {
      const file = path.join(process.cwd(), "public", "ig-portfolio", slide.file);
      return [slide.id, existsSync(file)];
    }),
  );

  return <IgMiniPortfolio videos={videos} />;
}
