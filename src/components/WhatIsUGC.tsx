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
          <h2 className="headline-1 mt-3 font-display font-extrabold">
            O que é <span className="text-magenta">UGC?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[60ch] text-base leading-relaxed text-muted md:text-lg">
            Conteúdo Gerado por Usuário (User Generated Content) é a forma mais
            autêntica de mostrar um produto — feito como se fosse um amigo
            recomendando, não um anúncio.
          </p>
        </div>
        <UgcPillars />
        <UgcFormats />
      </div>
    </section>
  );
}
