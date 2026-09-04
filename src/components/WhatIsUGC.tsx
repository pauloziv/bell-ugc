import { Sparkle, Handshake, TrendUp } from "@phosphor-icons/react/dist/ssr";

const CARDS = [
  {
    title: "Autenticidade",
    desc: "Conteudo genuino que parece uma recomendacao de amiga, nao uma propaganda tradicional.",
    icon: Sparkle,
    box: "bg-yellow -rotate-3",
    delay: undefined as string | undefined,
  },
  {
    title: "Engajamento",
    desc: "Videos feitos para parar o scroll e gerar comentarios, salvamentos e compartilhamentos.",
    icon: Handshake,
    box: "bg-lime rotate-2",
    delay: ".1s",
  },
  {
    title: "Conversao",
    desc: "Conteudo pensado em cada etapa do funil, direto ao ponto e com CTA que converte.",
    icon: TrendUp,
    box: "bg-magenta text-white -rotate-2",
    delay: ".2s",
  },
];

export default function WhatIsUGC() {
  return (
    <section id="ugc" className="relative px-4 py-10 md:px-8 md:py-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="reveal mb-8 text-center md:mb-12">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-magenta">
            Entenda o conceito
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight mt-3">
            O que e <span className="text-magenta">UGC?</span>
          </h2>
          <p className="text-base md:text-lg text-muted max-w-[60ch] mx-auto mt-4 leading-relaxed">
            Conteudo Gerado por Usuario (User Generated Content) e a forma mais
            autentica de mostrar um produto — feito como se fosse um amigo
            recomendando, nao um anuncio.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="reveal bg-white border-2 border-navy rounded-[2.5rem] p-8 card-shadow hover:-translate-y-2 transition-transform duration-300"
              style={card.delay ? { animationDelay: card.delay } : undefined}
            >
              <div
                className={`w-16 h-16 border-2 border-navy rounded-2xl flex items-center justify-center mb-6 ${card.box}`}
              >
                <card.icon weight="bold" size={28} />
              </div>
              <h3 className="font-display font-bold text-2xl mb-3">{card.title}</h3>
              <p className="text-muted leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
