"use client";

import { Handshake, Sparkle, TrendUp } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "framer-motion";

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

export default function UgcPillars() {
  const reduced = useReducedMotion();

  return (
    <div className="mt-10 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-3">
      {CARDS.map((card, i) => (
        <motion.article
          key={card.title}
          className={`rounded-[2.2rem] border-2 border-navy bg-white p-7 hard-shadow md:p-8 ${card.tilt}`}
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
          <h3 className="mb-3 font-display text-2xl font-extrabold">{card.title}</h3>
          <p className="leading-relaxed text-muted">{card.desc}</p>
        </motion.article>
      ))}
    </div>
  );
}
