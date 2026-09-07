"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const FORMATS = [
  {
    kicker: "Anúncio",
    title: "OFERTA IMPERDÍVEL",
    bubble: "link na bio?",
    copy: "Gancho de oferta, mas falado como gente. Sem vinheta de shop.",
    bg: "bg-yellow",
    tilt: "-rotate-3",
    avatar: "/images/creator-bel-about.jpg",
    sticker: "ads",
    stickerBg: "bg-white",
  },
  {
    kicker: "Recado de amiga",
    title: "gente, juro",
    bubble: "você precisa ver",
    copy: "Passei na sorveteria com o Pietro. Ele pediu de novo.",
    bg: "bg-lime",
    tilt: "rotate-2",
    avatar: "/images/creator-bel-about.jpg",
    sticker: "ugc",
    stickerBg: "bg-yellow",
  },
  {
    kicker: "Unbox",
    title: "Abre comigo (unboxing)",
    bubble: "chegou!!!",
    copy: "Papel, cheiro, textura. Sem mesa de estúdio.",
    bg: "bg-[#FFC1E3]",
    tilt: "-rotate-2",
    avatar: "/images/creator-bel-fullbody.png",
    sticker: "unbox",
    stickerBg: "bg-lime",
    contain: true,
  },
  {
    kicker: "Review sincero",
    title: "vou ser honesta",
    bubble: "gostei disso",
    copy: "Gostei. Disso aqui, não tanto. Aí você decide.",
    bg: "bg-white",
    tilt: "rotate-3",
    avatar: "/images/creator-bel-matcha.png",
    sticker: "review",
    stickerBg: "bg-[#FFC1E3]",
  },
];

export default function UgcFormats() {
  const reduced = useReducedMotion();

  return (
    <div className="relative mt-16 md:mt-20">
      <div className="pr-[7.25rem] md:pr-0">
        <span className="text-xs font-medium tracking-[0.2em] text-magenta uppercase">
          Como eu falo
        </span>
        <h3 className="headline-1 mt-2 font-display font-extrabold">
          Exemplos de <span className="text-magenta">comunicação</span>
        </h3>
        <p className="mt-3 max-w-[52ch] text-muted">
          O avatar entra na conversa. Oferta, recado, unbox, review — o tom muda, a Bel continua a mesma.
        </p>
      </div>

      <div className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pt-12 pb-10 md:grid md:grid-cols-4 md:overflow-visible md:pb-4">
        {FORMATS.map((f, i) => (
          <motion.article
            key={f.title}
            className={`relative w-[16.5rem] shrink-0 snap-center overflow-visible rounded-[2rem] border-[3px] border-navy p-5 pt-12 hard-shadow md:w-auto ${f.bg} ${f.tilt}`}
            initial={reduced ? false : { y: 56, opacity: 0, rotate: -10 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: i * 0.08, type: "spring", stiffness: 200, damping: 16 }}
            whileHover={reduced ? undefined : { y: -10, rotate: 0, scale: 1.03 }}
          >
            <div className="absolute -top-8 left-4">
              <div
                className={`relative h-[4.5rem] w-[4.5rem] overflow-hidden border-[3px] border-navy bg-offwhite shadow-[4px_4px_0_0_#1A1A2E] ${
                  f.contain ? "rounded-[1.4rem]" : "rounded-full"
                }`}
              >
                <Image
                  src={f.avatar}
                  alt=""
                  fill
                  sizes="72px"
                  className={f.contain ? "object-contain object-bottom" : "object-cover"}
                />
              </div>
            </div>
            <span
              className={`absolute -top-3 right-3 rotate-12 rounded-full border-2 border-navy px-2.5 py-1 font-display text-[10px] font-extrabold uppercase ${f.stickerBg}`}
            >
              {f.sticker}
            </span>
            <p className="text-[10px] font-medium tracking-[0.18em] uppercase">{f.kicker}</p>
            <h4 className="headline-card mt-2 font-display text-[clamp(1rem,4.1vw,1.25rem)] font-extrabold tracking-tight">
              {f.title}
            </h4>
            <p className="mt-3 inline-block -rotate-2 rounded-[1.1rem] border-2 border-navy bg-white px-2.5 py-1 font-display text-sm font-bold">
              {f.bubble}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-navy/80">{f.copy}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
