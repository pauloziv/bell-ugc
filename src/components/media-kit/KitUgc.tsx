"use client";

import { Handshake, Sparkle, TrendUp } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const CARDS = [
  {
    title: "Autenticidade",
    desc: "Conteúdo genuíno que parece uma recomendação de amiga, não uma propaganda tradicional.",
    icon: Sparkle,
    box: "bg-yellow -rotate-3",
    tilt: "-rotate-2",
  },
  {
    title: "Engajamento",
    desc: "Vídeos feitos para parar o scroll e gerar comentários, salvamentos e compartilhamentos.",
    icon: Handshake,
    box: "bg-lime rotate-2",
    tilt: "rotate-1",
  },
  {
    title: "Conversão",
    desc: "Conteúdo pensado em cada etapa do funil, direto ao ponto e com CTA que converte.",
    icon: TrendUp,
    box: "bg-magenta text-white -rotate-2",
    tilt: "rotate-2",
  },
];

export default function KitUgc() {
  const [ugc, setUgc] = useState(true);
  const reduced = useReducedMotion();

  return (
    <section id="ugc" className="relative overflow-hidden bg-offwhite px-4 py-16 md:px-8 md:py-28">
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

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {CARDS.map((card, i) => (
            <motion.article
              key={card.title}
              className={`rounded-[2.2rem] border-2 border-navy bg-white p-7 hard-shadow ${card.tilt}`}
              initial={reduced ? false : { y: 48, opacity: 0, rotate: -8 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 180, damping: 16 }}
              whileHover={reduced ? undefined : { y: -8, rotate: 0 }}
            >
              <div
                className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-navy ${card.box}`}
              >
                <card.icon weight="bold" size={28} />
              </div>
              <h3 className="font-display text-2xl font-extrabold">{card.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{card.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
