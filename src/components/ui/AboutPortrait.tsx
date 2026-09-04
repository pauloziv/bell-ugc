"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useTrailRef } from "@/components/ui/trail-context";

export default function AboutPortrait() {
  const reduced = useReducedMotion();
  const ctxRef = useTrailRef();
  const fallbackRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    if (!ctxRef?.current) {
      fallbackRef.current = document.getElementById("avatar-trail");
    }
  }, [ctxRef]);

  const { scrollYProgress } = useScroll({
    target: ctxRef ?? fallbackRef,
    offset: ["start 0.92", "start 0.48"],
  });

  const fade = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const lift = useTransform(scrollYProgress, [0, 1], [0, -36]);
  const shrink = useTransform(scrollYProgress, [0, 1], [1, 0.72]);

  return (
    <motion.div
      className="relative mx-auto hidden aspect-square w-full max-w-sm lg:block"
      style={reduced ? undefined : { opacity: fade, y: lift, scale: shrink }}
    >
      <div className="absolute inset-0 bg-yellow blob-slow" />
      <div className="absolute inset-3 overflow-hidden blob">
        <Image
          src="/images/creator-bel-about.jpg"
          alt="Ilustracao estilizada da Creator Bel"
          fill
          sizes="24rem"
          className="object-cover"
        />
      </div>
      <div className="absolute -right-6 -bottom-6 rotate-[-4deg] rounded-2xl border-2 border-white bg-lime px-5 py-3 font-display font-bold text-navy floaty">
        +3 anos criando
      </div>
    </motion.div>
  );
}
