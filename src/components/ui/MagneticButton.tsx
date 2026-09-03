"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function MagneticButton({
  children,
  className = "",
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const moveX = useTransform(x, [-100, 100], [-8, 8]);
  const moveY = useTransform(y, [-100, 100], [-8, 8]);

  function handleMouse(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  const Tag = href ? "a" : "button";

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ x: moveX, y: moveY }}
      className="inline-block"
    >
      <Tag
        {...(href ? { href } : {})}
        className={`inline-flex items-center gap-2 rounded-full px-8 py-4 font-display font-bold text-lg transition-transform duration-200 active:scale-[0.97] ${className}`}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
