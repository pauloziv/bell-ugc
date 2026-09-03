"use client";

import ScrollReveal from "./ui/ScrollReveal";
import MagneticButton from "./ui/MagneticButton";
import { motion } from "framer-motion";
import { Check, Star } from "@phosphor-icons/react";

const PLANS = [
  {
    name: "Essencial",
    price: "R$ 800",
    period: "por video",
    desc: "Perfeito pra marcas que querem comecar com UGC.",
    features: ["1 video ate 60s", "Roteiro incluso", "1 rodada de ajustes", "Entrega em 5 dias uteis", "Direitos de uso 90 dias"],
    highlighted: false,
    rotate: "md:-rotate-2",
  },
  {
    name: "Profissional",
    price: "R$ 2.200",
    period: "pacote 3 videos",
    desc: "O mais escolhido. Ideal pra campanhas completas.",
    features: ["3 videos ate 60s", "Roteiro + brainstorm", "2 rodadas de ajustes", "Entrega em 7 dias uteis", "Direitos de uso 180 dias", "Versao Stories inclusa"],
    highlighted: true,
    rotate: "",
  },
  {
    name: "Premium",
    price: "R$ 4.500",
    period: "pacote mensal",
    desc: "Pra marcas que querem conteudo consistente todo mes.",
    features: ["6 videos ate 60s", "Estrategia de conteudo", "Ajustes ilimitados", "Entrega em 10 dias uteis", "Direitos de uso vitalicio", "Versao Stories + Carrossel", "Reuniao mensal de alinhamento"],
    highlighted: false,
    rotate: "md:rotate-2",
  },
];

export default function Pricing() {
  return (
    <section id="pacotes" className="py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="inline-block rounded-full bg-magenta/10 border border-magenta/15 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] font-body font-medium text-navy/60 mb-6">
              Pacotes
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="font-display font-black text-4xl md:text-6xl tracking-tighter leading-[0.95] mx-auto max-w-[18ch]">
              Invista em conteudo que <span className="text-magenta">funciona</span>
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {PLANS.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={0.15 * (i + 1)}>
              <motion.div
                whileHover={{ y: -6, rotate: 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
                className={`rounded-[2rem] p-8 md:p-10 ${plan.rotate} transition-transform duration-500 ${
                  plan.highlighted
                    ? "bg-magenta text-white shadow-[0_20px_60px_-15px_rgba(233,30,140,0.4)] border-2 border-magenta scale-[1.02] md:scale-105"
                    : "bg-white border-2 border-navy/5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)]"
                }`}
              >
                {plan.highlighted && (
                  <div className="flex items-center gap-1.5 mb-4">
                    <Star weight="fill" size={14} />
                    <span className="text-xs uppercase tracking-[0.2em] font-bold">Mais escolhido</span>
                  </div>
                )}
                <h3 className="font-display font-bold text-2xl mb-1">{plan.name}</h3>
                <p className={`text-sm mb-6 ${plan.highlighted ? "text-white/70" : "text-muted"}`}>{plan.desc}</p>
                <div className="mb-6">
                  <span className="font-display font-black text-4xl">{plan.price}</span>
                  <span className={`text-sm ml-2 ${plan.highlighted ? "text-white/60" : "text-muted"}`}>
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check
                        weight="bold"
                        size={16}
                        className={`mt-0.5 flex-shrink-0 ${plan.highlighted ? "text-yellow" : "text-lime"}`}
                      />
                      <span className={plan.highlighted ? "text-white/90" : ""}>{f}</span>
                    </li>
                  ))}
                </ul>
                <MagneticButton
                  href="#contato"
                  className={`w-full justify-center ${
                    plan.highlighted
                      ? "bg-white text-magenta hover:bg-white/90"
                      : "bg-navy text-white hover:bg-navy/90"
                  }`}
                >
                  Quero esse
                </MagneticButton>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
