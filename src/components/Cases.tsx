"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Brand = {
  name: string;
  logo: string;
  result: string;
  desc: string;
  tilt: string;
  plate: string;
  knockout: boolean;
};

const CASES: Brand[] = [
  {
    name: "Natura",
    logo: "/images/brands/natura.svg",
    result: "+40% engajamento",
    desc: "Serie de reels para lancamento de linha de skincare.",
    tilt: "rotate-[-6deg]",
    plate: "bg-[#FF6A00]",
    knockout: true,
  },
  {
    name: "O Boticario",
    logo: "/images/brands/boticario.svg",
    result: "Unboxing viral",
    desc: "Reviews de perfumaria sazonal com cheiro, textura e ritual.",
    tilt: "rotate-[4deg]",
    plate: "bg-[#00A3A1]",
    knockout: true,
  },
  {
    name: "Farm",
    logo: "/images/brands/farm.svg",
    result: "Lookbook verao",
    desc: "Lifestyle colorido pra colecao de estacao.",
    tilt: "rotate-[-3deg]",
    plate: "bg-magenta",
    knockout: true,
  },
  {
    name: "Havaianas",
    logo: "/images/brands/havaianas.svg",
    result: "Campanha de verao",
    desc: "Conteudo praiano autentico, pe na areia, sem pose de studio.",
    tilt: "rotate-[5deg]",
    plate: "bg-[#0033A0]",
    knockout: false,
  },
  {
    name: "Granado",
    logo: "/images/brands/granado.svg",
    result: "Alta conversao",
    desc: "Antes e depois de rotina de cuidados, clique no link da bio.",
    tilt: "rotate-[-2deg]",
    plate: "bg-[#1A1A2E]",
    knockout: false,
  },
];

function BrandMark({
  brand,
  size = "stamp",
}: {
  brand: Brand;
  size?: "stamp" | "spotlight";
}) {
  const [failed, setFailed] = useState(false);
  const imgClass =
    size === "spotlight"
      ? "h-11 w-auto max-w-[240px] md:h-16 md:max-w-[300px] object-contain"
      : "h-8 w-auto max-w-[150px] md:h-11 md:max-w-[200px] object-contain";

  if (failed) {
    return (
      <span className="font-display font-extrabold text-xl md:text-2xl tracking-tight text-white">
        {brand.name}
      </span>
    );
  }

  return (
    // Local SVG wordmarks — <img> keeps vector fidelity without next/image config.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={brand.logo}
      alt={brand.name}
      className={`${imgClass} ${brand.knockout ? "brightness-0 invert" : ""}`}
      onError={() => setFailed(true)}
    />
  );
}

function LogoStamp({
  brand,
  active,
  onPick,
}: {
  brand: Brand;
  active: boolean;
  onPick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onPick}
      onMouseEnter={onPick}
      aria-label={brand.name}
      aria-pressed={active}
      className={`flex shrink-0 items-center justify-center border-2 border-navy rounded-[1.6rem] px-7 py-4 md:px-9 md:py-5 min-h-[5rem] min-w-[10.5rem] card-shadow transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${brand.plate} ${brand.tilt} ${
        active ? "scale-110 z-10" : "hover:scale-105"
      }`}
    >
      <BrandMark brand={brand} />
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
  const row = [...CASES, ...CASES];

  return (
    <div className="overflow-hidden py-2">
      <motion.div
        className="flex w-max gap-4 md:gap-6"
        animate={reduced ? undefined : { x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ x: { duration: 26, repeat: Infinity, ease: "linear" } }}
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
    <section id="cases" className="relative overflow-hidden bg-offwhite py-10 md:py-24">
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

        <div className="reveal border-2 border-navy rounded-[2.5rem] bg-white hard-shadow overflow-hidden">
          <div className="min-h-[200px] flex flex-col md:flex-row md:items-center gap-6 p-6 md:p-10">
            <div
              className={`flex items-center justify-center self-start border-2 border-navy rounded-[1.6rem] px-8 py-6 min-h-[5.5rem] min-w-[10rem] ${active.plate} ${active.tilt}`}
            >
              <BrandMark brand={active} size="spotlight" />
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
          <div className="border-t-2 border-navy bg-white py-3">
            <StampRow activeName={activeName} onPick={setActiveName} />
            <StampRow reverse activeName={activeName} onPick={setActiveName} />
          </div>
        </div>
      </div>
    </section>
  );
}
