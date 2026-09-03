"use client";

import ScrollReveal from "./ui/ScrollReveal";
import { motion } from "framer-motion";
import { InstagramLogo, TiktokLogo, YoutubeLogo } from "@phosphor-icons/react";

const PLATFORMS = [
  {
    name: "Instagram",
    icon: InstagramLogo,
    followers: "45.2K",
    desc: "Reels, Stories e Collabs com marcas que amam conteudo autentico.",
    color: "bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
    border: "border-[#DD2A7B]/30",
  },
  {
    name: "TikTok",
    icon: TiktokLogo,
    followers: "78.1K",
    desc: "Trends, reviews virais e conteudo que faz scroll parar.",
    color: "bg-navy",
    border: "border-navy/20",
  },
  {
    name: "YouTube",
    icon: YoutubeLogo,
    followers: "12.8K",
    desc: "Tutoriais longos, vlogs e conteudo que aprofunda a conexao.",
    color: "bg-[#FF0000]",
    border: "border-[#FF0000]/20",
  },
];

export default function Platforms() {
  return (
    <section className="py-28 md:py-40 bg-navy/[0.03]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <ScrollReveal>
          <span className="inline-block rounded-full bg-magenta/10 border border-magenta/15 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] font-body font-medium text-navy/60 mb-6">
            Plataformas
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display font-black text-4xl md:text-6xl tracking-tighter leading-[0.95] max-w-[18ch] mb-16">
            Onde eu <span className="text-magenta">publico</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLATFORMS.map((p, i) => (
            <ScrollReveal key={p.name} delay={0.15 * (i + 1)}>
              <motion.div
                whileHover={{ y: -6, rotate: i === 1 ? 0 : i === 0 ? -1 : 1 }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
                className={`rounded-[2rem] border-2 ${p.border} bg-white p-8 md:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)]`}
              >
                <div className={`w-16 h-16 rounded-[1.3rem] ${p.color} flex items-center justify-center mb-6`}>
                  <p.icon weight="fill" size={32} className="text-white" />
                </div>
                <h3 className="font-display font-bold text-2xl mb-1">{p.name}</h3>
                <span className="text-sm font-body text-muted">{p.followers} seguidores</span>
                <p className="text-muted leading-relaxed mt-4">{p.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
