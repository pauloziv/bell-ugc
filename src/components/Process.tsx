"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ChatTeardropText,
  PaperPlaneTilt,
  PencilSimpleLine,
  Scissors,
  VideoCamera,
} from "@phosphor-icons/react";

const STEPS: {
  num: string;
  title: string;
  desc: string;
  circle: string;
  story: string;
  ink: string;
  icon: typeof ChatTeardropText;
}[] = [
  {
    num: "01",
    title: "Briefing",
    desc: "Entendo objetivos e voz da marca.",
    circle: "bg-magenta text-white",
    story: "bg-magenta text-white",
    ink: "bg-white",
    icon: ChatTeardropText,
  },
  {
    num: "02",
    title: "Roteiro",
    desc: "Crio um roteiro autentico e estrategico.",
    circle: "bg-yellow",
    story: "bg-yellow text-navy",
    ink: "bg-navy",
    icon: PencilSimpleLine,
  },
  {
    num: "03",
    title: "Producao",
    desc: "Gravo com luz, som e estetica de qualidade.",
    circle: "bg-lime",
    story: "bg-lime text-navy",
    ink: "bg-navy",
    icon: VideoCamera,
  },
  {
    num: "04",
    title: "Edicao",
    desc: "Corto e finalizo no ritmo das plataformas.",
    circle: "bg-navy text-white",
    story: "bg-navy text-white",
    ink: "bg-yellow",
    icon: Scissors,
  },
  {
    num: "05",
    title: "Entrega",
    desc: "Envio os arquivos prontos para publicar.",
    circle: "bg-white text-magenta",
    story: "bg-white text-navy",
    ink: "bg-magenta",
    icon: PaperPlaneTilt,
  },
];

const STORY_MS = 2800;

export default function Process() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % STEPS.length);
    }, STORY_MS);
    return () => window.clearInterval(id);
  }, [reduced, active]);

  const step = STEPS[active];
  const Icon = step.icon;

  const go = (next: number) => {
    setActive((next + STEPS.length) % STEPS.length);
  };

  return (
    <section id="processo" className="overflow-hidden px-4 py-10 scroll-mt-28 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="reveal mb-8 md:mb-12">
          <span className="text-xs font-medium tracking-[0.2em] text-magenta uppercase">
            Como eu trabalho
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Processo <span className="text-magenta">Criativo</span>
          </h2>
        </div>

        <div className="lg:hidden">
          <div className="relative mx-auto max-w-[22rem] rotate-[-1.5deg]">
            <div className="absolute -top-3 -left-3 rounded-full border-2 border-navy bg-yellow px-3 py-1 font-display text-[11px] font-bold text-navy card-shadow">
              stories
            </div>
            <div className="rounded-[2.1rem] border-[3px] border-navy bg-navy p-3 hard-shadow">
              <div className="mb-3 flex gap-1" aria-hidden="true">
                {STEPS.map((s, i) => (
                  <span
                    key={s.num}
                    className="relative h-1 flex-1 overflow-hidden rounded-full bg-white/25"
                  >
                    <span
                      className="block h-full w-full origin-left rounded-full bg-lime"
                      style={{
                        transform: `scaleX(${i < active ? 1 : 0})`,
                        transition: "transform 0.18s linear",
                      }}
                    />
                    {i === active ? (
                      <motion.span
                        key={active}
                        className="absolute inset-0 origin-left rounded-full bg-lime"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                          duration: reduced ? 0 : STORY_MS / 1000,
                          ease: "linear",
                        }}
                      />
                    ) : null}
                  </span>
                ))}
              </div>

              <div className="relative overflow-hidden rounded-[1.55rem] border-2 border-white/15">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step.num}
                    initial={reduced ? false : { opacity: 0, x: 28 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={reduced ? undefined : { opacity: 0, x: -24 }}
                    transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
                    className={`flex min-h-[22.5rem] flex-col items-center justify-center px-6 py-8 text-center ${step.story}`}
                  >
                    <span
                      className={`mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-navy ${
                        step.num === "04" ? "bg-yellow text-navy" : "bg-white text-navy"
                      }`}
                    >
                      <Icon weight="bold" size={28} />
                    </span>
                    <p className="font-display text-5xl font-extrabold tracking-tighter">
                      {step.num}
                    </p>
                    <h3 className="mt-2 font-display text-3xl font-extrabold">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-[22ch] text-sm leading-relaxed opacity-90">
                      {step.desc}
                    </p>
                    <span
                      className={`mt-6 h-1.5 w-12 rounded-full ${step.ink}`}
                    />
                  </motion.div>
                </AnimatePresence>

                <button
                  type="button"
                  aria-label="Etapa anterior"
                  className="absolute inset-y-0 left-0 z-10 w-[32%] min-w-11"
                  onClick={() => go(active - 1)}
                />
                <button
                  type="button"
                  aria-label="Proxima etapa"
                  className="absolute inset-y-0 right-0 z-10 w-[68%] min-w-11"
                  onClick={() => go(active + 1)}
                />
              </div>

              <p className="mt-3 text-center text-[11px] tracking-[0.18em] text-white/55 uppercase">
                toque pra passar · {active + 1}/{STEPS.length}
              </p>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <svg
            className="absolute top-10 left-0 h-6 w-full"
            viewBox="0 0 1300 24"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <motion.path
              d="M0,12 C130,24 260,0 390,12 C520,24 650,0 780,12 C910,24 1040,0 1170,12 C1230,18 1270,6 1300,12"
              stroke="#E91E8C"
              strokeWidth="3"
              fill="none"
              strokeDasharray="10 8"
              animate={reduced ? undefined : { strokeDashoffset: [80, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </svg>
          <div className="relative z-10 grid grid-cols-5 gap-6">
            {STEPS.map((item, i) => {
              const on = active === i;
              return (
                <motion.button
                  type="button"
                  key={item.num}
                  onClick={() => setActive(i)}
                  className="flex flex-col items-center bg-transparent text-center"
                  animate={{
                    y: on && !reduced ? -10 : 0,
                    scale: on ? 1.06 : 1,
                  }}
                  transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
                >
                  <motion.div
                    className={`mb-4 flex h-20 w-20 items-center justify-center rounded-full border-2 border-navy font-display text-2xl font-extrabold ${item.circle}`}
                    animate={
                      reduced
                        ? undefined
                        : on
                          ? { rotate: [0, -8, 8, 0] }
                          : { rotate: 0 }
                    }
                    transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
                  >
                    {item.num}
                  </motion.div>
                  <h3 className="mb-2 font-display text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                  <span
                    className={`mt-3 h-1.5 rounded-full transition-all duration-300 ${
                      on ? "w-10 bg-magenta" : "w-3 bg-navy/20"
                    }`}
                  />
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
