"use client";

import ScrollReveal from "./ui/ScrollReveal";
import { Sparkle, Heart } from "@phosphor-icons/react";

export default function About() {
  return (
    <section id="sobre" className="relative py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <ScrollReveal>
          <span className="inline-block rounded-full bg-yellow/20 border border-yellow/30 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] font-body font-medium text-navy/60 mb-6">
            Sobre mim
          </span>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 items-center">
          {/* Photo — 2 cols */}
          <ScrollReveal className="md:col-span-2">
            <div className="relative">
              <div className="absolute -inset-3 rounded-[3rem] bg-gradient-to-br from-lime/30 to-yellow/30 -rotate-2" />
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[3/4]">
                <img
                  src="https://picsum.photos/seed/bell-about/600/800"
                  alt="Bell sorrindo"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-magenta text-white rounded-[1.5rem] p-4 shadow-[0_12px_30px_-6px_rgba(233,30,140,0.3)] rotate-3">
                <Heart weight="fill" size={28} />
              </div>
            </div>
          </ScrollReveal>

          {/* Text — 3 cols */}
          <div className="md:col-span-3 space-y-6">
            <ScrollReveal delay={0.1}>
              <h2 className="font-display font-black text-4xl md:text-6xl tracking-tighter leading-[0.95]">
                Prazer, Bell <Sparkle weight="fill" className="inline text-yellow" size={32} />
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-lg text-muted leading-relaxed max-w-[55ch]">
                Sou criadora de conteudo UGC apaixonada por transformar produtos em
                historias autentiticas. Acredito que o melhor conteudo nasce quando a
                marca encontra a voz certa — e essa voz sou eu.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-lg text-muted leading-relaxed max-w-[55ch]">
                Com mais de 50 marcas atendidas e milhoes de views acumulados, crio
                conteudo que conecta, engaja e converte. De unboxings a reviews, de
                tutoriais a lifestyle — cada peca e pensada pra sua audiencia.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-wrap gap-3 pt-4">
                {["50+ Marcas", "2M+ Views", "98% Aprovacao"].map((stat) => (
                  <span
                    key={stat}
                    className="rounded-full bg-navy/5 px-5 py-2.5 text-sm font-display font-bold"
                  >
                    {stat}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
