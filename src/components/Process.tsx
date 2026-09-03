"use client";

import ScrollReveal from "./ui/ScrollReveal";
import { motion } from "framer-motion";
import { ChatText, Notepad, FilmSlate, MagicWand, PaperPlaneTilt } from "@phosphor-icons/react";

const STEPS = [
  { num: "01", title: "Briefing", desc: "Entendo a marca, o produto e o objetivo da campanha.", icon: ChatText, color: "bg-magenta text-white" },
  { num: "02", title: "Roteiro", desc: "Crio o roteiro com tom, gancho e CTA pensados na sua audiencia.", icon: Notepad, color: "bg-yellow text-navy" },
  { num: "03", title: "Producao", desc: "Gravo com qualidade profissional no meu setup dedicado.", icon: FilmSlate, color: "bg-lime text-navy" },
  { num: "04", title: "Edicao", desc: "Edito com cortes dinamicos, legendas e trilha que prende atencao.", icon: MagicWand, color: "bg-navy text-white" },
  { num: "05", title: "Entrega", desc: "Entrego os arquivos finais prontos pra publicar.", icon: PaperPlaneTilt, color: "bg-magenta text-white" },
];

export default function Process() {
  return (
    <section id="processo" className="py-28 md:py-40 bg-navy text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <ScrollReveal>
          <span className="inline-block rounded-full bg-white/10 border border-white/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] font-body font-medium text-white/50 mb-6">
            Processo
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display font-black text-4xl md:text-6xl tracking-tighter leading-[0.95] max-w-[18ch] mb-16">
            Como eu <span className="text-magenta">trabalho</span>
          </h2>
        </ScrollReveal>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex md:grid md:grid-cols-5 gap-4 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory">
          {STEPS.map((step, i) => (
            <ScrollReveal key={step.num} delay={0.1 * (i + 1)}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
                className="flex-shrink-0 w-[260px] md:w-auto snap-center rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8"
              >
                <div className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center mb-4`}>
                  <step.icon weight="bold" size={22} />
                </div>
                <span className="font-display font-black text-3xl text-white/10 block mb-2">{step.num}</span>
                <h3 className="font-display font-bold text-xl mb-2">{step.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
