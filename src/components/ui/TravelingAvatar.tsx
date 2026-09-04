"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useTrailRef } from "@/components/ui/trail-context";

const STICKERS = ["oi!", "ugc", "reels", "bora!", "bel."];
const LINES = [
  "oi, marca!",
  "bora criar?",
  "ugc na veia",
  "reels que vendem",
  "me chama!",
];

function weaveX(p: number, width: number, size: number) {
  const pad = Math.max(32, width * 0.045);
  const range = Math.max(0, width - size - pad * 2);
  const t = (Math.sin(p * Math.PI * 5 - Math.PI / 2) + 1) / 2;
  return pad + t * range;
}

function weaveY(p: number, height: number) {
  const pad = height * 0.18;
  const range = height * 0.26;
  const t = (Math.sin(p * Math.PI * 3.1 + 0.35) + 1) / 2;
  const bounce = Math.abs(Math.sin(p * Math.PI * 9)) * height * 0.035;
  return pad + t * range + bounce;
}

function GhostOrb({
  progress,
  lag,
  color,
  size,
}: {
  progress: MotionValue<number>;
  lag: number;
  color: string;
  size: number;
}) {
  const x = useTransform(progress, (p) => {
    if (typeof window === "undefined") return 0;
    return weaveX(Math.max(0, p - lag), window.innerWidth, size);
  });
  const y = useTransform(progress, (p) => {
    if (typeof window === "undefined") return 0;
    return weaveY(Math.max(0, p - lag), window.innerHeight);
  });
  const opacity = useTransform(progress, [0, 0.08, 0.86, 1], [0, 0.55, 0.45, 0]);

  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none fixed top-0 left-0 z-20 hidden rounded-full lg:block ${color}`}
      style={{
        x,
        y,
        opacity,
        width: size * 0.28,
        height: size * 0.28,
        marginLeft: size * 0.36,
        marginTop: size * 0.36,
      }}
    />
  );
}

function MobileTalker({
  progress,
  line,
}: {
  progress: MotionValue<number>;
  line: string;
}) {
  const rotate = useTransform(progress, [0, 1], [6, -8]);
  const bob = useTransform(progress, (p) => Math.sin(p * Math.PI * 7) * 7);
  const opacity = useTransform(progress, [0, 0.05, 0.9, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      aria-hidden="true"
      data-mobile-talker
      className="pointer-events-none fixed z-30 overflow-visible lg:hidden"
      style={{
        right: -58,
        bottom: "max(0px, env(safe-area-inset-bottom))",
        width: 132,
        height: 210,
        rotate,
        y: bob,
        opacity,
      }}
    >
      <span className="absolute top-8 left-0 z-20 -translate-x-[calc(100%+6px)] w-max max-w-[7.2rem] rounded-[1.15rem] rounded-br-md border-2 border-navy bg-lime px-2.5 py-1.5 text-left font-display text-[11px] font-bold leading-tight text-navy card-shadow">
        {line}
      </span>
      <Image
        src="/images/creator-bel-fullbody.png"
        alt=""
        fill
        sizes="9rem"
        className="object-contain object-bottom drop-shadow-[6px_10px_0_rgba(26,26,46,0.18)]"
      />
    </motion.div>
  );
}

export default function TravelingAvatar() {
  const reduced = useReducedMotion();
  const ctxRef = useTrailRef();
  const fallbackRef = useRef<HTMLElement | null>(null);
  const [desktop, setDesktop] = useState(false);
  const [sticker, setSticker] = useState(STICKERS[0]);
  const [line, setLine] = useState(LINES[0]);
  const [size, setSize] = useState(160);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => {
      setDesktop(mq.matches);
      setSize(window.innerWidth >= 1280 ? 176 : 152);
    };
    sync();
    mq.addEventListener("change", sync);
    window.addEventListener("resize", sync);
    return () => {
      mq.removeEventListener("change", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);

  useLayoutEffect(() => {
    if (!ctxRef?.current) {
      fallbackRef.current = document.getElementById("avatar-trail");
    }
  }, [ctxRef]);

  const { scrollYProgress } = useScroll({
    target: ctxRef ?? fallbackRef,
    offset: ["start 0.82", "end 0.18"],
  });

  const xRaw = useTransform(scrollYProgress, (p) => {
    if (typeof window === "undefined") return 0;
    return weaveX(p, window.innerWidth, size);
  });
  const yRaw = useTransform(scrollYProgress, (p) => {
    if (typeof window === "undefined") return 0;
    return weaveY(p, window.innerHeight);
  });
  const x = useSpring(xRaw, { stiffness: 90, damping: 18, mass: 0.55 });
  const y = useSpring(yRaw, { stiffness: 80, damping: 16, mass: 0.6 });
  const rotate = useTransform(scrollYProgress, (p) => Math.cos(p * Math.PI * 5) * 16);
  const scale = useTransform(scrollYProgress, [0, 0.08, 0.5, 0.9, 1], [0.55, 1, 1.08, 0.95, 0.7]);
  const opacity = useTransform(scrollYProgress, [0, 0.07, 0.88, 1], [0, 1, 1, 0]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const i = Math.min(STICKERS.length - 1, Math.floor(v * STICKERS.length));
    setSticker(STICKERS[i]);
    setLine(LINES[i]);
  });

  if (reduced) return null;

  if (!desktop) {
    return <MobileTalker progress={scrollYProgress} line={line} />;
  }

  return (
    <>
      <GhostOrb progress={scrollYProgress} lag={0.04} color="bg-lime" size={size} />
      <GhostOrb progress={scrollYProgress} lag={0.075} color="bg-magenta" size={size} />
      <motion.div
        aria-hidden="true"
        data-traveling-avatar
        className="pointer-events-none fixed top-0 left-0 z-30 hidden lg:block"
        style={{ x, y, rotate, scale, opacity, width: size, height: size }}
      >
        <div className="absolute inset-0 bg-yellow blob-slow" />
        <div className="absolute inset-[9%] overflow-hidden border-[3px] border-navy blob">
          <Image
            src="/images/creator-bel-about.jpg"
            alt=""
            fill
            sizes="11rem"
            className="object-cover"
          />
        </div>
        <span className="absolute -top-3 -right-3 min-w-[3.2rem] rounded-full border-2 border-navy bg-lime px-2.5 py-1 text-center font-display text-[11px] font-bold text-navy card-shadow rotate-[12deg]">
          {sticker}
        </span>
      </motion.div>
    </>
  );
}
