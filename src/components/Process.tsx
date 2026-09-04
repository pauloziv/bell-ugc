"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const STEPS = [
  { num: "01", title: "Briefing", desc: "Entendo objetivos e voz da marca.", circle: "bg-magenta text-white" },
  { num: "02", title: "Roteiro", desc: "Crio um roteiro autentico e estrategico.", circle: "bg-yellow" },
  { num: "03", title: "Producao", desc: "Gravo com luz, som e estetica de qualidade.", circle: "bg-lime" },
  { num: "04", title: "Edicao", desc: "Corto e finalizo no ritmo das plataformas.", circle: "bg-navy text-white" },
  { num: "05", title: "Entrega", desc: "Envio os arquivos prontos para publicar.", circle: "bg-white text-magenta" },
];

export default function Process() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % STEPS.length);
    }, 1600);
    return () => window.clearInterval(id);
  }, [reduced]);

  return (
    <section id="processo" className="py-20 md:py-32 px-4 md:px-8 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16 reveal">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-magenta">
            Como eu trabalho
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight mt-3">
            Processo <span className="text-magenta">Criativo</span>
          </h2>
        </div>
        <div className="relative">
          <svg
            className="hidden lg:block absolute top-10 left-0 w-full h-6"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {STEPS.map((step, i) => {
              const on = active === i;
              return (
                <motion.button
                  type="button"
                  key={step.num}
                  onClick={() => setActive(i)}
                  className="flex flex-col items-center text-center bg-transparent"
                  animate={{
                    y: on && !reduced ? -10 : 0,
                    scale: on ? 1.06 : 1,
                  }}
                  transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
                >
                  <motion.div
                    className={`w-20 h-20 border-2 border-navy rounded-full flex items-center justify-center font-display font-extrabold text-2xl mb-4 ${step.circle}`}
                    animate={
                      reduced
                        ? undefined
                        : on
                          ? { rotate: [0, -8, 8, 0] }
                          : { rotate: 0 }
                    }
                    transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
                  >
                    {step.num}
                  </motion.div>
                  <h3 className="font-display font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted">{step.desc}</p>
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
