"use client";

import { motion } from "framer-motion";

export default function MarqueeStrip({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  const doubled = [...items, ...items];

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="inline-flex gap-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: { duration: 25, repeat: Infinity, ease: "linear" },
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-2xl md:text-4xl font-display font-bold text-navy/10 uppercase tracking-wider"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
