"use client";

import { List, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import BrandLogo from "@/components/ui/BrandLogo";

const LINKS = [
  { href: "#capa", label: "Oi" },
  { href: "#sobre", label: "Sobre" },
  { href: "#ugc", label: "UGC" },
  { href: "#processo", label: "Processo" },
  { href: "#cases", label: "Cases" },
  { href: "#contato", label: "Juntos" },
];

export default function KitNav() {
  const [active, setActive] = useState("#capa");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const nodes = LINKS.map((l) => document.querySelector(l.href)).filter(
      (n): n is HTMLElement => n instanceof HTMLElement,
    );
    if (!nodes.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (vis?.target.id) setActive(`#${vis.target.id}`);
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.15, 0.4, 0.7] },
    );
    nodes.forEach((n) => obs.observe(n));
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="fixed top-3 left-1/2 z-50 w-[94%] max-w-5xl -translate-x-1/2 md:top-5">
      <div className="flex items-center justify-between gap-2 rounded-full border-2 border-navy bg-white/95 px-3 py-2 shadow-[0_8px_30px_-5px_rgba(233,30,140,0.28)] md:px-5">
        <a href="#capa" aria-label="Bel UGC — capa" className="shrink-0 pr-1">
          <BrandLogo compact />
        </a>
        <div className="hidden items-center gap-0.5 lg:flex">
          {LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-2 text-[11px] font-medium tracking-wider uppercase transition-colors ${
                active === item.href ? "bg-yellow" : "hover:bg-lime/70"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
        <span className="hidden rotate-[-4deg] rounded-full border-2 border-navy bg-lime px-3 py-1 font-display text-[10px] font-extrabold tracking-wide uppercase md:inline">
          HTML + PDF
        </span>
        <Link
          href="/"
          className="inline-flex min-h-11 items-center rounded-full border-2 border-navy px-3 text-[11px] font-medium tracking-wider uppercase hover:bg-navy hover:text-white"
        >
          Site
        </Link>
        <button
          type="button"
          className="flex h-11 w-11 min-h-11 min-w-11 items-center justify-center rounded-full border-2 border-navy lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X weight="bold" size={18} /> : <List weight="bold" size={18} />}
        </button>
      </div>
      {open ? (
        <div className="mt-2 flex flex-col rounded-[1.5rem] border-2 border-navy bg-white p-3 lg:hidden">
          {LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-3 text-sm font-medium tracking-wider uppercase hover:bg-yellow"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      ) : null}
    </nav>
  );
}
