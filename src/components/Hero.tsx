"use client";

import { motion } from "framer-motion";
import BlobBackground from "./ui/BlobBackground";
import MagneticButton from "./ui/MagneticButton";
import { ArrowRight, Star, VideoCamera, Lightning } from "@phosphor-icons/react";

const STICKERS = [
  { label: "UGC Creator", icon: Star, rotate: "-rotate-3", color: "bg-magenta text-white" },
  { label: "Reels", icon: VideoCamera, rotate: "rotate-3", color: "bg-yellow text-navy" },
  { label: "Content", icon: Lightning, rotate: "-rotate-2", color: "bg-lime text-navy" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      <BlobBackground />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center py-28 md:py-0">
        {/* Left — Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
        >
          <span className="inline-block rounded-full bg-magenta/10 border border-magenta/20 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] font-body font-medium text-magenta mb-6">
            Portfolio 2026
          </span>

          <h1 className="font-display font-black text-5xl md:text-7xl xl:text-8xl tracking-tighter leading-[0.9] mb-6">
            Oi, eu sou
            <br />
            a <span className="text-magenta">Bell</span>
          </h1>

          <p className="text-xl md:text-2xl font-body text-muted leading-relaxed max-w-[50ch] mb-10">
            Criadora de conteudo UGC. Transformo marcas em historias que as pessoas
            realmente querem assistir.
          </p>

          <div className="flex flex-wrap gap-4">
            <MagneticButton
              href="#contato"
              className="bg-magenta text-white shadow-[0_8px_30px_-5px_rgba(233,30,140,0.4)] hover:shadow-[0_12px_40px_-5px_rgba(233,30,140,0.5)]"
            >
              Vamos Conversar <ArrowRight weight="bold" size={20} />
            </MagneticButton>

            <MagneticButton
              href="#cases"
              className="bg-navy/5 text-navy hover:bg-navy/10"
            >
              Ver Cases
            </MagneticButton>
          </div>
        </motion.div>

        {/* Right — Photo placeholder + floating stickers */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
          className="relative flex justify-center"
        >
          {/* Organic blob frame */}
          <div className="relative w-[320px] h-[400px] md:w-[400px] md:h-[500px]">
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-magenta/20 via-yellow/20 to-lime/20 rotate-3" />
            <div className="absolute inset-2 rounded-[2.5rem] bg-offwhite overflow-hidden">
              <img
                src="https://picsum.photos/seed/bell-ugc-hero/400/500"
                alt="Bell — Criadora UGC"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Floating stickers */}
          {STICKERS.map((s, i) => (
            <motion.div
              key={s.label}
              className={`absolute ${s.color} ${s.rotate} rounded-full px-4 py-2 flex items-center gap-2 text-sm font-display font-bold shadow-[0_8px_20px_-4px_rgba(0,0,0,0.15)]`}
              style={{
                top: i === 0 ? "10%" : i === 1 ? "55%" : "80%",
                left: i === 0 ? "-10%" : i === 1 ? "75%" : "-5%",
              }}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <s.icon weight="bold" size={16} />
              {s.label}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
