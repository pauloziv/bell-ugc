"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

export default function HeroPortrait() {
  const frameRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [mobile, setMobile] = useState(false);
  const [swapped, setSwapped] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const sync = () => setMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start 0.82", "end 0.22"],
  });

  const flip = useTransform(scrollYProgress, [0.08, 0.78], [0, 180]);
  const pop = useTransform(scrollYProgress, [0.08, 0.43, 0.78], [1, 0.9, 1.04]);
  const magOp = useTransform(scrollYProgress, [0, 0.45, 0.8], [1, 0.35, 0]);
  const yelOp = useTransform(scrollYProgress, [0, 0.45, 0.8], [0, 0.75, 1]);

  const live = mobile && !reduced;

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (!live) return;
    setSwapped(v > 0.4);
  });

  return (
    <motion.div
      ref={frameRef}
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
            className="absolute inset-0 overflow-hidden lg:hidden [border-radius:42%_58%_65%_35%/45%_45%_55%_55%]"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <Image
              src="/images/creator-bel-about.jpg"
              alt=""
              fill
              sizes="(max-width: 1024px) 90vw, 24rem"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>

      <div
        className={`absolute top-1/3 -right-6 rounded-2xl border-2 border-navy bg-white px-4 py-2 font-display text-sm font-bold card-shadow floaty-delay ${
          swapped ? "-rotate-[8deg]" : "rotate-[5deg]"
        }`}
      >
        {swapped ? "avatar" : "#Content"}
      </div>
      <div className="absolute -bottom-3 left-1/4 rotate-[3deg] rounded-2xl border-2 border-navy bg-lime px-4 py-2 font-display text-sm font-bold floaty card-shadow">
        {swapped ? "pop!" : "Reels"}
      </div>
    </motion.div>
  );
}
