"use client";

import ScrollReveal from "./ui/ScrollReveal";
import MarqueeStrip from "./ui/MarqueeStrip";
import { motion } from "framer-motion";

const BRANDS = [
  { name: "Natura", desc: "Campanha de skincare com 3 videos UGC", span: "md:col-span-2", seed: "natura-ugc" },
  { name: "Boticario", desc: "Lancamento de perfume — unboxing + review", span: "md:col-span-1", seed: "boticario-ugc" },
  { name: "Farm", desc: "Colecao verao — lifestyle e try-on", span: "md:col-span-1", seed: "farm-ugc" },
  { name: "Havaianas", desc: "Serie de Reels para lancamento collab", span: "md:col-span-1", seed: "havaianas-ugc" },
  { name: "Granado", desc: "Conteudo evergreen para e-commerce", span: "md:col-span-2", seed: "granado-ugc" },
];

export default function Cases() {
  return (
    <section id="cases" className="py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <ScrollReveal>
          <span className="inline-block rounded-full bg-yellow/20 border border-yellow/30 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] font-body font-medium text-navy/60 mb-6">
            Cases
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display font-black text-4xl md:text-6xl tracking-tighter leading-[0.95] max-w-[16ch] mb-16">
            Marcas que ja <span className="text-magenta">confiam</span> em mim
          </h2>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {BRANDS.map((brand, i) => (
            <ScrollReveal key={brand.name} delay={0.1 * (i + 1)} className={brand.span}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
                className="relative rounded-[2rem] overflow-hidden bg-white border-2 border-navy/5 group cursor-pointer h-full"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={`https://picsum.photos/seed/${brand.seed}/800/450`}
                    alt={brand.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl mb-1">{brand.name}</h3>
                  <p className="text-sm text-muted">{brand.desc}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <MarqueeStrip
          items={["Natura", "Boticario", "Farm", "Havaianas", "Granado", "Quem Disse Berenice", "Sallve", "Baw"]}
          className="py-8 border-y border-navy/5"
        />
      </div>
    </section>
  );
}
