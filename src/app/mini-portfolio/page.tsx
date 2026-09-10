import type {Metadata} from "next";
import {existsSync} from "node:fs";
import path from "node:path";
import IgMiniPortfolio from "@/components/ig-portfolio/IgMiniPortfolio";
import {IG_SLIDES} from "@/data/ig-mini-portfolio";
import {SITE_URL} from "@/lib/site";

export const metadata: Metadata = {
  title: "Mini portfólio Instagram",
  description:
    "Mini portfólio UGC no feed: capa, marcas, trabalhos no celular. Sem tarifário.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: `${SITE_URL}/mini-portfolio`,
  },
  openGraph: {
    url: `${SITE_URL}/mini-portfolio`,
    title: "Mini portfólio Instagram | Creator Bel",
    description:
      "Mini portfólio UGC no feed: capa, marcas, trabalhos no celular. Sem tarifário.",
  },
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
