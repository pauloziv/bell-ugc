"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "Sobre", href: "#sobre" },
  { label: "UGC", href: "#ugc" },
  { label: "Conteudo", href: "#conteudo" },
  { label: "Cases", href: "#cases" },
  { label: "Processo", href: "#processo" },
  { label: "Pacotes", href: "#pacotes" },
  { label: "Contato", href: "#contato" },
];

export default function FloatingNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 rounded-full bg-navy/90 backdrop-blur-2xl border border-white/10 px-2 py-2 shadow-[0_12px_40px_-8px_rgba(26,26,46,0.4)]"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm font-body font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]"
            >
              {item.label}
            </a>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
