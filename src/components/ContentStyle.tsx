"use client";

import ScrollReveal from "./ui/ScrollReveal";
import { motion } from "framer-motion";

const TILES = [
  { label: "Unboxing", span: "md:col-span-2 md:row-span-2", seed: "bell-unboxing", color: "from-magenta/80 to-magenta/40" },
  { label: "Reviews", span: "md:col-span-1", seed: "bell-reviews", color: "from-yellow/80 to-yellow/40" },
  { label: "Tutoriais", span: "md:col-span-1", seed: "bell-tutorial", color: "from-lime/80 to-lime/40" },
  { label: "Lifestyle", span: "md:col-span-1", seed: "bell-lifestyle", color: "from-navy/80 to-navy/40" },
  { label: "Antes e Depois", span: "md:col-span-1", seed: "bell-beforeafter", color: "from-magenta/60 to-yellow/60" },
];

export default function ContentStyle() {
  return (
    <section id="conteudo" className="py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <ScrollReveal>
          <span className="inline-block rounded-full bg-lime/15 border border-lime/25 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] font-body font-medium text-navy/60 mb-6">
            Meu estilo
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display font-black text-4xl md:text-6xl tracking-tighter leading-[0.95] max-w-[16ch] mb-16">
            Conteudo que eu <span className="text-magenta">crio</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TILES.map((tile, i) => (
            <ScrollReveal key={tile.label} delay={0.1 * (i + 1)} className={tile.span}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
                className="relative rounded-[2rem] overflow-hidden aspect-square md:aspect-auto md:h-full min-h-[220px] group cursor-pointer"
              >
                <img
                  src={`https://picsum.photos/seed/${tile.seed}/600/600`}
                  alt={tile.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${tile.color} opacity-60`} />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="font-display font-bold text-white text-xl md:text-2xl drop-shadow-lg">
                    {tile.label}
                  </span>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
