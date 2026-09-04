"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const CASES = [
  {
    name: "Natura",
    mark: "natura",
    result: "+40% engajamento",
    desc: "Serie de reels para lancamento de linha de skincare.",
    stamp: "bg-[#FF6A00] text-white rotate-[-6deg]",
  },
  {
    name: "O Boticario",
    mark: "boticario",
    result: "Unboxing viral",
    desc: "Reviews de perfumaria sazonal com cheiro, textura e ritual.",
    stamp: "bg-[#00A3A1] text-white rotate-[4deg]",
  },
  {
    name: "Farm",
    mark: "FARM",
    result: "Lookbook verao",
    desc: "Lifestyle colorido pra colecao de estacao.",
    stamp: "bg-[#E31C79] text-white rotate-[-3deg]",
  },
  {
    name: "Havaianas",
    mark: "havaianas",
    result: "Campanha de verao",
    desc: "Conteudo praiano autentico, pe na areia, sem pose de studio.",
    stamp: "bg-[#0033A0] text-yellow rotate-[5deg]",
  },
  {
    name: "Granado",
    mark: "GRANADO",
    result: "Alta conversao",
    desc: "Antes e depois de rotina de cuidados, clique no link da bio.",
    stamp: "bg-[#7A1F3D] text-white rotate-[-2deg]",
  },
];

function LogoStamp({
  brand,
  active,
  onPick,
}: {
  brand: (typeof CASES)[number];
  active: boolean;
  onPick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onPick}
      onMouseEnter={onPick}
      className={`shrink-0 border-2 border-navy rounded-[1.6rem] px-8 py-5 font-display font-extrabold text-2xl md:text-3xl tracking-tight card-shadow transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${brand.stamp} ${
        active ? "scale-110 z-10" : "hover:scale-105"
      }`}
      aria-pressed={active}
    >
      {brand.mark}
    </button>
  );
}

function StampRow({
  reverse,
  activeName,
  onPick,
}: {
  reverse?: boolean;
  activeName: string;
  onPick: (name: string) => void;
}) {
  const reduced = useReducedMotion();
  const row = [...CASES, ...CASES, ...CASES];

  return (
    <div className="overflow-hidden py-2">
      <motion.div
        className="flex gap-4 md:gap-6 w-max"
        animate={reduced ? undefined : { x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ x: { duration: 22, repeat: Infinity, ease: "linear" } }}
      >
        {row.map((brand, i) => (
          <LogoStamp
            key={`${brand.name}-${i}`}
            brand={brand}
            active={brand.name === activeName}
            onPick={() => onPick(brand.name)}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default function Cases() {
  const [activeName, setActiveName] = useState(CASES[0].name);
  const reduced = useReducedMotion();
  const active = CASES.find((c) => c.name === activeName) ?? CASES[0];

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => {
      setActiveName((prev) => {
        const i = CASES.findIndex((c) => c.name === prev);
        return CASES[(i + 1) % CASES.length].name;
      });
    }, 4200);
    return () => window.clearInterval(id);
  }, [reduced]);

  return (
    <section
      id="cases"
      className="py-16 md:py-24 bg-[#FFF6F9] relative overflow-hidden"
    >
      <div className="absolute top-10 -right-12 w-36 h-36 bg-lime/30 blob-slow blur-xl pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
        <div className="mb-8 md:mb-10 reveal">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-magenta">
            Quem confia em mim
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight mt-3">
            Marcas que <span className="text-magenta">ja criaram</span> comigo
          </h2>
          <p className="text-muted mt-3 max-w-[50ch]">
            Passa o mouse — ou toca — num logo. O case abre no palco.
          </p>
        </div>

        <div className="reveal mb-8 border-2 border-navy rounded-[2.5rem] bg-white p-6 md:p-10 hard-shadow min-h-[200px] flex flex-col md:flex-row md:items-center gap-6">
          <div
            className={`self-start border-2 border-navy rounded-[1.6rem] px-8 py-5 font-display font-extrabold text-3xl md:text-5xl tracking-tight ${active.stamp}`}
          >
            {active.mark}
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-magenta font-medium">
              {active.result}
            </p>
            <h3 className="font-display font-bold text-2xl md:text-3xl mt-1">
              {active.name}
            </h3>
            <p className="text-muted mt-2 max-w-[48ch]">{active.desc}</p>
          </div>
        </div>
      </div>

      <StampRow activeName={activeName} onPick={setActiveName} />
      <StampRow reverse activeName={activeName} onPick={setActiveName} />
    </section>
  );
}
