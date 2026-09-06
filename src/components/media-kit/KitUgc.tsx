"use client";

import { useState } from "react";
import UgcPillars from "@/components/UgcPillars";

export default function KitUgc() {
  const [ugc, setUgc] = useState(true);

  return (
    <section id="ugc" className="relative overflow-hidden bg-offwhite px-4 py-16 scroll-mt-28 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center">
          <span className="text-xs font-medium tracking-[0.2em] text-magenta uppercase">
            Entenda o conceito
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            O que é <span className="text-magenta">UGC?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[58ch] text-muted">
            User Generated Content. Não é anúncio de agência. É aquele recado
            que você manda no grupo da família — só que com roteiro.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl items-center gap-6 md:grid-cols-2">
          <button
            type="button"
            onClick={() => setUgc(false)}
            aria-pressed={!ugc}
            className={`relative min-h-11 overflow-hidden rounded-[2rem] border-[3px] border-navy p-5 text-left transition-transform ${
              ugc ? "scale-95 opacity-55" : "hard-shadow -rotate-2"
            }`}
          >
            <span className="text-[10px] font-medium tracking-[0.2em] text-muted uppercase">
              Anúncio
            </span>
            <p className="mt-3 font-display text-2xl font-extrabold tracking-tight">
              OFERTA IMPERDÍVEL
            </p>
            <p className="mt-2 text-sm text-muted">
              Compre agora. Link na bio. Por tempo limitado. Use o cupom.
            </p>
          </button>

          <button
            type="button"
            onClick={() => setUgc(true)}
            aria-pressed={ugc}
            className={`relative min-h-11 overflow-hidden rounded-[2rem] border-[3px] border-navy bg-lime p-5 text-left transition-transform ${
              ugc ? "hard-shadow rotate-2" : "scale-95 opacity-55"
            }`}
          >
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase">
              Recado de amiga
            </span>
            <p className="mt-3 font-display text-2xl font-extrabold tracking-tight">
              gente, juro
            </p>
            <p className="mt-2 text-sm text-navy/80">
              Passei na sorveteria com o Pietro. Ele pediu de novo. Aí eu
              entendi o produto.
            </p>
          </button>
        </div>

        <p className="mt-4 text-center text-xs tracking-wider text-muted uppercase">
          Toca nos cards — UGC é o da direita
        </p>

        <UgcPillars />
      </div>
    </section>
  );
}
