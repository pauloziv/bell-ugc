"use client";

import Image from "next/image";
import { Play, Stamp } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

type CaseCard = {
  name: string;
  kicker: string;
  desc: string;
  sample?: boolean;
  poster?: string;
  plate: string;
  video?: string;
  logo?: string;
  tilt: string;
};

const CASES: CaseCard[] = [
  {
    name: "Sander",
    kicker: "Reel na sorveteria",
    desc: "Casquinha de chocolate adoçada com stevia. UGC real, conversa de mãe — até o filho de 5 anos adorou.",
    poster: "/images/reels/sander.webp",
    logo: "/images/brands/sander.png",
    plate: "bg-yellow",
    video: "https://www.youtube.com/embed/_4e_H7inmnA",
    tilt: "-rotate-3",
  },
  {
    name: "Creamy",
    kicker: "Rotina de skincare",
    desc: "Reel de ritual Creamy — textura, glow e conversa de pia. UGC real, sem cara de studio.",
    poster: "/images/reels/creamy.webp",
    logo: "/images/brands/creamy.svg",
    plate: "bg-[#F6AB9E]",
    video: "https://www.youtube.com/embed/A9SIIuvWORU",
    tilt: "rotate-2",
  },
  {
    name: "Alva",
    kicker: "Ritual da manhã",
    desc: "Chá na varanda, luz boa, conversa lenta. UGC de bem-estar que cabe no stories e no ads.",
    sample: true,
    plate: "bg-lime",
    tilt: "rotate-[-2deg]",
  },
  {
    name: "Névoa",
    kicker: "Spray no pulso",
    desc: "Body mist, cheiro e o “passa aqui”. Unboxing íntimo — banheiro real, sem pose de campanha.",
    sample: true,
    plate: "bg-navy text-white",
    tilt: "rotate-3",
  },
];

export default function KitCases() {
  const [play, setPlay] = useState<string | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!play) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPlay(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [play]);

  return (
    <section id="cases" className="relative overflow-hidden bg-offwhite px-4 py-16 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <span className="text-xs font-medium tracking-[0.2em] text-magenta uppercase">
          Quem confia em mim
        </span>
        <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
          Marcas que <span className="text-magenta">já criaram</span> comigo
        </h2>
        <p className="mt-3 max-w-[52ch] text-muted">
          Sander e Creamy são cases reais — toca no play. Alva e Névoa são
          amostras de formato, com o chip Amostra.
        </p>

        <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 md:grid md:grid-cols-4 md:overflow-visible md:pb-0">
          {CASES.map((c, i) => (
            <motion.article
              key={c.name}
              className={`w-[16.5rem] shrink-0 snap-center md:w-auto ${c.tilt}`}
              initial={reduced ? false : { y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08, type: "spring", stiffness: 200, damping: 18 }}
              whileHover={reduced ? undefined : { y: -10, rotate: 0 }}
            >
              <div className="overflow-hidden rounded-[2rem] border-[3px] border-navy bg-navy hard-shadow">
                <div className="relative aspect-[9/16] overflow-hidden kit-phone-shine">
                  {c.poster ? (
                    <Image
                      src={c.poster}
                      alt={c.name}
                      fill
                      sizes="280px"
                      className="object-cover"
                    />
                  ) : (
                    <div
                      className={`flex h-full flex-col items-center justify-center gap-3 ${c.plate}`}
                    >
                      <span className="font-display text-4xl font-extrabold tracking-tighter">
                        {c.name}
                      </span>
                      <span className="text-xs tracking-[0.18em] uppercase opacity-70">
                        {c.kicker}
                      </span>
                    </div>
                  )}
                  {c.sample ? (
                    <span className="absolute top-3 left-3 z-10 inline-flex items-center gap-1 rounded-full border-2 border-navy bg-lime px-2.5 py-1 font-display text-[10px] font-extrabold text-navy uppercase">
                      <Stamp weight="bold" size={12} />
                      Amostra
                    </span>
                  ) : null}
                  {c.video ? (
                    <button
                      type="button"
                      onClick={() => setPlay(c.video ?? null)}
                      className="absolute inset-0 z-10 flex items-center justify-center bg-navy/20"
                      aria-label={`Assistir case ${c.name}`}
                    >
                      <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-navy bg-lime text-navy shadow-[4px_4px_0_0_#1A1A2E]">
                        <Play weight="fill" size={22} />
                      </span>
                    </button>
                  ) : null}
                </div>
              </div>
              <div className="mt-4">
                {c.logo ? (
                  // Local brand marks
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={c.logo} alt="" className="mb-2 h-7 w-auto object-contain" />
                ) : null}
                <p className="text-[10px] font-medium tracking-[0.18em] text-magenta uppercase">
                  {c.kicker}
                </p>
                <h3 className="font-display text-2xl font-extrabold">{c.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{c.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {play ? (
        <div className="fan-player is-open" role="dialog" aria-modal="true">
          <button
            type="button"
            className="fan-backdrop is-open"
            aria-label="Fechar vídeo"
            onClick={() => setPlay(null)}
          />
          <div className="fan-player-frame relative z-10">
            <button
              type="button"
              className="absolute -top-3 -right-3 z-20 flex h-11 w-11 items-center justify-center rounded-full border-2 border-navy bg-white text-navy"
              aria-label="Fechar vídeo"
              onClick={() => setPlay(null)}
            >
              <span className="font-display text-lg font-extrabold">×</span>
            </button>
            <iframe
              src={`${play}?autoplay=1`}
              title="Case UGC"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
