"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

export default function HeroPortrait({
  flipOnScroll = true,
}: {
  flipOnScroll?: boolean;
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const sobreRef = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();
  const [swapped, setSwapped] = useState(false);
  const live = flipOnScroll && !reduced;

  useLayoutEffect(() => {
    sobreRef.current = document.getElementById("sobre");
  }, []);

  const { scrollYProgress } = useScroll({
    target: flipOnScroll ? sobreRef : frameRef,
    offset: flipOnScroll ? ["start 0.92", "start 0.42"] : ["start end", "end start"],
  });

  const flip = useTransform(scrollYProgress, [0.05, 0.72], [0, 180]);
  const pop = useTransform(scrollYProgress, [0.05, 0.38, 0.72], [1, 0.94, 1.03]);
  const magOp = useTransform(scrollYProgress, [0, 0.4, 0.75], [1, 0.35, 0]);
  const yelOp = useTransform(scrollYProgress, [0, 0.4, 0.75], [0, 0.75, 1]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (!live) return;
    setSwapped(v > 0.38);
  });

  return (
    <motion.div
      ref={frameRef}
      data-hero-portrait
      className="relative mx-auto aspect-[4/5] w-full max-w-sm"
      style={live ? { scale: pop } : undefined}
    >
      <div className="absolute inset-0 bg-magenta blob" />
      {live ? (
        <motion.div className="absolute inset-0 bg-yellow blob-slow" style={{ opacity: yelOp }} />
      ) : null}
      {live ? (
        <motion.div className="absolute inset-0 bg-magenta blob" style={{ opacity: magOp }} />
      ) : null}

      <div className="absolute inset-3 [perspective:1100px]">
        <motion.div
          data-hero-flip
          className="relative h-full w-full [transform-style:preserve-3d]"
          style={live ? { rotateY: flip } : undefined}
        >
          <div
            className="absolute inset-0 overflow-hidden [border-radius:42%_58%_65%_35%/45%_45%_55%_55%]"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <Image
              src="/images/creator-bel-hero.jpg"
              alt="Creator Bel, criadora UGC"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 24rem"
              className="object-cover object-[center_18%]"
            />
          </div>
          <div
            className="absolute inset-0 overflow-hidden [border-radius:42%_58%_65%_35%/45%_45%_55%_55%]"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <Image
              src="/images/creator-bel-about.jpg"
              alt="Ilustracao estilizada da Creator Bel"
              fill
              sizes="(max-width: 1024px) 90vw, 24rem"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>

      <div
        className={`absolute top-1/3 -right-4 rounded-2xl border-2 border-navy bg-white px-3 py-1.5 font-display text-sm font-bold card-shadow floaty-delay ${
          swapped ? "-rotate-[8deg]" : "rotate-[5deg]"
        }`}
      >
        {swapped ? "avatar" : "#Content"}
      </div>
      <div className="absolute -bottom-3 left-1/4 rotate-[3deg] rounded-2xl border-2 border-navy bg-lime px-3 py-1.5 font-display text-sm font-bold floaty card-shadow">
        {swapped ? "pop!" : "Reels"}
      </div>
    </motion.div>
  );
}
