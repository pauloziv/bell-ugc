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

const BLOB_MASK =
  "[border-radius:42%_58%_65%_35%/45%_45%_55%_55%]";

export default function HeroPortrait({
  flipOnScroll = true,
  frame = "blob",
}: {
  flipOnScroll?: boolean;
  frame?: "blob" | "circle";
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const sobreRef = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();
  const [swapped, setSwapped] = useState(false);
  const live = flipOnScroll && !reduced;
  const circle = frame === "circle";

  useLayoutEffect(() => {
    sobreRef.current = document.getElementById("sobre");
  }, []);

  const { scrollYProgress } = useScroll({
    target: flipOnScroll ? sobreRef : frameRef,
    offset: flipOnScroll
      ? ["start 0.72", "start 0.42"]
      : ["start end", "end start"],
  });

  const flip = useTransform(scrollYProgress, [0.05, 0.72], [0, 180]);
  const pop = useTransform(scrollYProgress, [0.05, 0.38, 0.72], [1, 0.96, 1.02]);
  const magOp = useTransform(scrollYProgress, [0, 0.4, 0.75], [1, 0.35, 0]);
  const yelOp = useTransform(scrollYProgress, [0, 0.4, 0.75], [0, 0.75, 1]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (!live) return;
    setSwapped(v > 0.38);
  });

  const faceMask = circle ? "rounded-full" : BLOB_MASK;

  return (
    <motion.div
      ref={frameRef}
      data-hero-portrait
      data-hero-frame={frame}
      className={`relative mx-auto w-full ${
        circle ? "aspect-square max-w-[15.5rem] mb-1" : "aspect-[4/5] max-w-sm"
      }`}
      style={live ? { scale: pop } : undefined}
    >
      {circle ? (
        <div
          className={`absolute inset-0 rounded-full border-[3px] border-navy p-[7px] transition-colors duration-500 ${
            swapped ? "bg-yellow" : "bg-magenta"
          }`}
        />
      ) : (
        <>
          <div className="absolute inset-0 bg-magenta blob" />
          {live ? (
            <motion.div
              className="absolute inset-0 bg-yellow blob-slow"
              style={{ opacity: yelOp }}
            />
          ) : null}
          {live ? (
            <motion.div
              className="absolute inset-0 bg-magenta blob"
              style={{ opacity: magOp }}
            />
          ) : null}
        </>
      )}

      <div
        className={`absolute [perspective:1100px] ${
          circle ? "inset-[7px]" : "inset-3"
        }`}
      >
        <motion.div
          data-hero-flip
          className="relative h-full w-full [transform-style:preserve-3d]"
          style={live ? { rotateY: flip } : undefined}
        >
          <div
            className={`absolute inset-0 overflow-hidden ${faceMask}`}
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
              sizes="(max-width: 1024px) 70vw, 24rem"
              className="object-cover object-[center_18%]"
            />
          </div>
          <div
            className={`absolute inset-0 overflow-hidden ${faceMask}`}
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <Image
              src="/images/creator-bel-matcha.png"
              alt="Bel na calçada com um matcha"
              fill
              sizes="(max-width: 1024px) 70vw, 24rem"
              className="object-cover object-[center_40%]"
            />
          </div>
        </motion.div>
      </div>

      <div
        className={`absolute top-[28%] -right-3 rounded-2xl border-2 border-navy bg-white px-3 py-1 font-display text-sm font-bold card-shadow floaty-delay ${
          swapped ? "-rotate-[8deg]" : "rotate-[5deg]"
        }`}
      >
        {swapped ? "sobre" : "#Content"}
      </div>
      <div className="absolute -bottom-2 left-1/2 z-10 -translate-x-1/2 rotate-[3deg] rounded-full border-2 border-navy bg-lime px-3 py-1 font-display text-sm font-bold floaty card-shadow">
        {swapped ? "matcha" : "Reels"}
      </div>
    </motion.div>
  );
}
