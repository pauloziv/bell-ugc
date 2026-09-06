"use client";

import Image from "next/image";
import { CaretDown } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "@/components/ui/MagneticButton";
import { whatsappUrl } from "@/lib/site";
import { gsap, useGSAP } from "@/components/media-kit/gsap-kit";

const STICKERS = [
  { label: "Reels", bg: "bg-lime", x: "8%", y: "12%", rot: -12 },
  { label: "Ads", bg: "bg-yellow", x: "78%", y: "8%", rot: 8 },
  { label: "NY", bg: "bg-white", x: "86%", y: "48%", rot: -6 },
  { label: "Matcha", bg: "bg-magenta text-white", x: "6%", y: "58%", rot: 10 },
  { label: "Mãe", bg: "bg-white", x: "72%", y: "78%", rot: -8 },
  { label: "#UGC", bg: "bg-lime", x: "18%", y: "82%", rot: 6 },
];

export default function KitCover() {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced) return;
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(".kit-line", {
        yPercent: 110,
        duration: 0.95,
        stagger: 0.11,
      })
        .from(
          ".kit-sticker",
          { scale: 0, rotation: -50, duration: 0.55, stagger: 0.07, ease: "back.out(1.8)" },
          "-=0.45",
        )
        .from(".kit-mascot", { y: 70, opacity: 0, duration: 0.8 }, "-=0.7")
        .from(".kit-cta", { y: 24, opacity: 0, duration: 0.5 }, "-=0.4");
    },
    { scope: root, dependencies: [reduced] },
  );

  return (
    <section
      id="capa"
      ref={root}
      className="relative min-h-dvh overflow-hidden bg-navy pt-28 pb-10 text-white md:pt-32"
    >
      <div className="pointer-events-none absolute -top-16 -left-10 h-56 w-56 bg-yellow/30 blob blur-2xl" />
      <div className="pointer-events-none absolute right-0 bottom-10 h-64 w-64 bg-magenta/25 blob-slow blur-2xl" />

      <div className="relative z-10 mx-auto grid max-w-[1400px] items-center gap-8 px-4 md:px-8 lg:grid-cols-2">
        <div>
          <span className="mb-5 inline-block -rotate-2 rounded-full border-2 border-navy bg-lime px-4 py-1.5 text-xs font-medium tracking-[0.18em] text-navy uppercase">
            Media kit · não é um PDF chato
          </span>
          <h1 className="font-display text-[clamp(3.2rem,9vw,8rem)] leading-[0.86] font-extrabold tracking-tighter">
            <span className="block overflow-hidden">
              <span className="kit-line inline-block">Oi,</span>
            </span>
            <span className="block overflow-hidden">
              <span className="kit-line inline-block">eu sou</span>
            </span>
            <span className="block overflow-hidden text-magenta">
              <span className="kit-line inline-block">Creator Bel</span>
            </span>
          </h1>
          <p className="kit-cta mt-6 max-w-[34ch] text-lg text-white/85 md:text-xl">
            UGC que parece recado de amiga — e chega no ads pronto pra vender.
          </p>
          <div className="kit-cta mt-8 flex flex-wrap items-center gap-4">
            <MagneticButton
              href={whatsappUrl(
                "Oi Bel! Vi o media kit e quero criar juntos.",
              )}
              className="bg-magenta text-white btn-shadow hover:scale-105 hover:-rotate-1"
            >
              Vamos conversar
            </MagneticButton>
            <MagneticButton
              href="#cases"
              className="border-2 border-white text-white hover:bg-white hover:text-navy"
            >
              Ver cases
            </MagneticButton>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[32rem]">
          {STICKERS.map((s) => (
            <span
              key={s.label}
              className={`kit-sticker kit-wiggle absolute z-20 rounded-full border-2 border-navy px-3 py-1 font-display text-xs font-extrabold uppercase shadow-[3px_3px_0_0_#1A1A2E] md:text-sm ${s.bg}`}
              style={{ left: s.x, top: s.y, transform: `rotate(${s.rot}deg)` }}
            >
              {s.label}
            </span>
          ))}
          <motion.div
            className="kit-mascot relative mx-auto w-[86%]"
            animate={reduced ? undefined : { y: [0, -14, 0], rotate: [-1.5, 1.5, -1.5] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/images/creator-bel-fullbody.png"
              alt="Creator Bel em ilustração pop — acenando de jaqueta de couro"
              width={900}
              height={1100}
              priority
              className="h-auto w-full drop-shadow-[12px_18px_0_rgba(233,30,140,0.35)]"
            />
          </motion.div>
        </div>
      </div>

      <a
        href="#sobre"
        className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1 text-[11px] tracking-[0.2em] text-yellow uppercase"
      >
        Rola
        <motion.span
          animate={reduced ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity }}
        >
          <CaretDown weight="bold" size={22} />
        </motion.span>
      </a>
    </section>
  );
}
