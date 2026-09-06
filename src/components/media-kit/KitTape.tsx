"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function KitTape({
  items,
  bg,
  reverse = false,
  ink = "text-navy",
}: {
  items: string[];
  bg: string;
  reverse?: boolean;
  ink?: string;
}) {
  const doubled = [...items, ...items, ...items];
  const reduced = useReducedMotion();

  return (
    <div className={`kit-tape ${bg}`} aria-hidden="true">
      <motion.div
        className="flex w-max gap-8 py-3 md:gap-12 md:py-4"
        animate={reduced ? undefined : { x: reverse ? ["-33.333%", "0%"] : ["0%", "-33.333%"] }}
        transition={{ x: { duration: 22, repeat: Infinity, ease: "linear" } }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={`font-display text-xl font-extrabold tracking-tight uppercase md:text-3xl ${ink}`}
          >
            {item}
            <span className="mx-4 opacity-40">*</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
