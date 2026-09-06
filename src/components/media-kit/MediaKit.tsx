"use client";

import KitNav from "@/components/media-kit/KitNav";
import KitCover from "@/components/media-kit/KitCover";
import KitTape from "@/components/media-kit/KitTape";
import KitSobre from "@/components/media-kit/KitSobre";
import KitUgc from "@/components/media-kit/KitUgc";
import Process from "@/components/Process";
import KitCases from "@/components/media-kit/KitCases";
import KitCta from "@/components/media-kit/KitCta";
import BrandLogo from "@/components/ui/BrandLogo";
import Link from "next/link";

export default function MediaKit() {
  return (
    <div className="bg-offwhite text-navy">
      <KitNav />
      <KitCover />
      <KitTape
        items={["Reels", "TikTok", "Ads", "UGC", "Matcha", "NY", "Stories"]}
        bg="bg-yellow"
      />
      <KitSobre />
      <KitTape
        items={["Não é anúncio", "É indicação", "Briefing a sério", "Prazo"]}
        bg="bg-lime"
        reverse
      />
      <KitUgc />
      <KitTape
        items={["Briefing", "Roteiro", "Produção", "Edição", "Entrega"]}
        bg="bg-magenta"
        ink="text-white"
      />
      <Process />
      <KitCases />
      <KitCta />
      <footer className="bg-navy px-4 py-8 text-center text-sm text-white/60 md:px-8">
        <div className="mb-4 flex justify-center">
          <BrandLogo onDark />
        </div>
        <p>© 2026 Bel UGC. Media kit HTML + PDF.</p>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className="inline-flex min-h-11 items-center text-white/80 hover:text-white">
            Voltar ao site
          </Link>
          <Link href="/bel-ugc-media-kit.pdf" className="inline-flex min-h-11 items-center text-white/80 hover:text-white">
            Baixar PDF
          </Link>
        </div>
      </footer>
    </div>
  );
}
