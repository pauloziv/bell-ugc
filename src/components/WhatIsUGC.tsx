"use client";

import ScrollReveal from "./ui/ScrollReveal";
import { motion } from "framer-motion";
import { ShieldCheck, TrendUp, CurrencyDollar } from "@phosphor-icons/react";

const CARDS = [
  {
    icon: ShieldCheck,
    title: "Autenticidade",
    desc: "Conteudo real feito por pessoas reais. Sem scripts engessados, sem producoes artificiais — so verdade.",
    accent: "border-magenta/30 hover:border-magenta/60",
    iconBg: "bg-magenta/10 text-magenta",
  },
  {
    icon: TrendUp,
    title: "Engajamento",
    desc: "UGC gera ate 6.9x mais engajamento que conteudo de marca tradicional. Pessoas confiam em pessoas.",
    accent: "border-yellow/40 hover:border-yellow/70",
    iconBg: "bg-yellow/20 text-navy",
  },
  {
    icon: CurrencyDollar,
    title: "Conversao",
    desc: "Conteudo autentico converte 29% mais. Seu produto na mao de quem sabe contar historias que vendem.",
    accent: "border-lime/40 hover:border-lime/70",
    iconBg: "bg-lime/20 text-navy",
  },
];

export default function WhatIsUGC() {
  return (
    <section id="ugc" className="relative py-28 md:py-40 bg-navy text-white overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-magenta/10 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
        <ScrollReveal>
          <span className="inline-block rounded-full bg-white/10 border border-white/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] font-body font-medium text-white/50 mb-6">
            O que e UGC?
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display font-black text-4xl md:text-6xl tracking-tighter leading-[0.95] max-w-[18ch] mb-16">
            Conteudo que parece <span className="text-magenta">conversa</span>,
            nao propaganda
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((card, i) => (
            <ScrollReveal key={card.title} delay={0.15 * (i + 1)}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
                className={`rounded-[2rem] border-2 ${card.accent} bg-white/5 backdrop-blur-sm p-8 md:p-10 transition-colors duration-500`}
              >
                <div className={`w-14 h-14 rounded-[1.2rem] ${card.iconBg} flex items-center justify-center mb-6`}>
                  <card.icon weight="bold" size={28} />
                </div>
                <h3 className="font-display font-bold text-2xl mb-3">{card.title}</h3>
                <p className="text-white/60 leading-relaxed">{card.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
