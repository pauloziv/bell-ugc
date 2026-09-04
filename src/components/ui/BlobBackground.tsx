"use client";

import { motion } from "framer-motion";

export default function BlobBackground({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        className="absolute -top-16 -left-16 w-40 h-40 rounded-full bg-magenta/15 blur-2xl"
        animate={{
          scale: [1, 1.06, 1],
          x: [0, 12, 0],
          y: [0, -8, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: [0.32, 0.72, 0, 1] }}
      />
      <motion.div
        className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-yellow/20 blur-2xl"
        animate={{
          scale: [1, 1.05, 1],
          x: [0, -10, 0],
          y: [0, 10, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: [0.32, 0.72, 0, 1] }}
      />
      <motion.div
        className="absolute top-24 right-1/3 w-32 h-32 rounded-full bg-lime/15 blur-xl"
        animate={{
          scale: [1, 1.04, 1],
          rotate: [0, 8, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: [0.32, 0.72, 0, 1] }}
      />
    </div>
  );
}
