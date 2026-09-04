"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function MarqueeStrip({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  const doubled = [...items, ...items];
  const reduced = useReducedMotion();

  return (
    <div
      className={`overflow-hidden whitespace-nowrap border-y-2 border-navy bg-yellow py-4 md:py-5 ${className}`}
      aria-hidden="true"
    >
      <motion.div
        className="inline-flex gap-12 md:gap-16"
        animate={reduced ? undefined : { x: ["0%", "-50%"] }}
        transition={{
          x: { duration: 28, repeat: Infinity, ease: "linear" },
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-display font-extrabold text-2xl md:text-4xl text-navy/25 uppercase tracking-wider"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
