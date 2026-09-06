"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

import { NICHES } from "@/lib/kit-copy";

function Count({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!inView || reduced) return;
    const start = performance.now();
    const dur = 1100;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - (1 - t) ** 3;
      setVal(Math.round(to * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced, to]);

  return (
    <span ref={ref}>
      {reduced ? to : val}
      {suffix}
    </span>
  );
}

export default function KitSobre() {
  const reduced = useReducedMotion();

  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-navy px-4 py-16 text-white scroll-mt-28 md:px-8 md:py-28"
    >
      <div className="pointer-events-none absolute top-10 right-8 h-40 w-40 bg-magenta/25 blob blur-2xl" />
      <div className="relative z-10 mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-2">
        <div className="relative mx-auto w-full max-w-md">
          <motion.div
            className="relative aspect-[4/5]"
            initial={reduced ? false : { rotate: -8, y: 40, opacity: 0 }}
            whileInView={{ rotate: -2, y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="absolute inset-0 bg-yellow blob-slow" />
            <div className="absolute inset-3 overflow-hidden blob">
              <Image
                src="/images/creator-bel-matcha.png"
                alt="Bel na calçada com um matcha"
                fill
                sizes="28rem"
                className="object-cover object-[center_40%]"
              />
            </div>
            <span className="absolute -right-3 bottom-8 z-10 rotate-[-8deg] rounded-full border-2 border-navy bg-lime px-4 py-2 font-display text-sm font-extrabold text-navy shadow-[4px_4px_0_0_#1A1A2E]">
              +10 anos
            </span>
          </motion.div>
        </div>

        <div>
          <span className="text-xs font-medium tracking-[0.2em] text-yellow uppercase">
            Sobre mim
          </span>
          <h2 className="mt-3 font-display text-4xl leading-[0.95] font-extrabold tracking-tight md:text-6xl">
            Conteúdo real,{" "}
            <span className="text-magenta">resultado real.</span>
          </h2>
          <p className="mt-4 font-display text-lg font-bold text-yellow md:text-xl">
            Por que me encaixo em vários nichos?
          </p>
          <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-white/80 md:text-lg">
            Minha trajetória nunca coube numa linha reta. Acho que é isso que
            deixa o olhar tão amplo.
          </p>
          <p className="mt-3 max-w-[60ch] text-base leading-relaxed text-white/80 md:text-lg">
            Já passei por moda, arquitetura, design, publicidade, estética,
            empreendedorismo e conteúdo. Morei em Nova York. Também atuei do
            outro lado: quem contrata criador para marca.
          </p>
          <p className="mt-3 max-w-[60ch] text-base leading-relaxed text-white/80 md:text-lg">
            Sou mãe, esposa e puxo a casa. Essa vivência vira conteúdo que
            conversa com o mesmo público. Como já estive nos dois lados do
            briefing, sei fazer bonito e autêntico — prazo, briefing e roteiro a
            sério.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {NICHES.map((n, i) => (
              <motion.span
                key={n}
                className="rounded-full border-2 border-white/30 bg-white/10 px-3 py-1 text-xs font-medium tracking-wide uppercase"
                initial={reduced ? false : { y: 16, opacity: 0, rotate: -8 }}
                whileInView={{ y: 0, opacity: 1, rotate: i % 2 ? 4 : -3 }}
                viewport={{ once: true }}
                transition={{ delay: 0.04 * i, type: "spring", stiffness: 260, damping: 18 }}
              >
                {n}
              </motion.span>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-3">
            <div className="rounded-2xl border border-white/20 bg-white/10 px-2 py-3 text-center sm:px-5 sm:py-4 sm:text-left">
              <p className="font-display text-2xl font-extrabold text-yellow sm:text-3xl">
                <Count to={120} suffix="+" />
              </p>
              <p className="text-[10px] leading-tight tracking-wider text-white/60 uppercase sm:text-xs">
                Vídeos entregues
              </p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 px-2 py-3 text-center sm:px-5 sm:py-4 sm:text-left">
              <p className="font-display text-2xl font-extrabold text-lime sm:text-3xl">
                <Count to={35} suffix="+" />
              </p>
              <p className="text-[10px] leading-tight tracking-wider text-white/60 uppercase sm:text-xs">
                Marcas
              </p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 px-2 py-3 text-center sm:px-5 sm:py-4 sm:text-left">
              <p className="font-display text-2xl font-extrabold text-magenta sm:text-3xl">
                <Count to={98} suffix="%" />
              </p>
              <p className="text-[10px] leading-tight tracking-wider text-white/60 uppercase sm:text-xs">
                Satisfação
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
