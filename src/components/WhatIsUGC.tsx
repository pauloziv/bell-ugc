import UgcPillars from "@/components/UgcPillars";
import UgcFormats from "@/components/UgcFormats";

export default function WhatIsUGC() {
  return (
    <section id="ugc" className="relative overflow-visible px-4 py-10 scroll-mt-28 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="reveal mb-2 text-center md:mb-4">
          <span className="text-xs font-medium tracking-[0.2em] text-magenta uppercase">
            Entenda o conceito
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            O que e <span className="text-magenta">UGC?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[60ch] text-base leading-relaxed text-muted md:text-lg">
            Conteudo Gerado por Usuario (User Generated Content) e a forma mais
            autentica de mostrar um produto — feito como se fosse um amigo
            recomendando, nao um anuncio.
          </p>
        </div>
        <UgcPillars />
        <UgcFormats />
      </div>
    </section>
  );
}
