"use client";

import { List, X } from "@phosphor-icons/react";
import { useState } from "react";
import Link from "next/link";
import BrandLogo from "@/components/ui/BrandLogo";

const LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#ugc", label: "UGC" },
  { href: "#estilo", label: "Estilo" },
  { href: "#plataformas", label: "Plataformas" },
  { href: "#cases", label: "Cases" },
  { href: "#processo", label: "Processo" },
  { href: "#pacotes", label: "Pacotes" },
  { href: "/media-kit", label: "Kit" },
];

export default function FloatingNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-auto">
      <div className="flex items-center justify-between md:justify-center gap-1 overflow-visible md:gap-2 bg-white/95 border-2 border-navy rounded-full px-3 md:px-6 py-3 md:py-3.5 shadow-[0_8px_30px_-5px_rgba(233,30,140,0.25)]">
        <a
          href="#hero"
          aria-label="Bel UGC — início"
          className="flex items-center pr-1 md:pr-3"
        >
          <BrandLogo compact />
        </a>
        <div className="hidden lg:flex items-center gap-1">
          {LINKS.map((item) =>
            item.href.startsWith("/") ? (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-medium uppercase tracking-wider px-3 py-2 rounded-full hover:bg-yellow transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-medium uppercase tracking-wider px-3 py-2 rounded-full hover:bg-yellow transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
              >
                {item.label}
              </a>
            ),
          )}
        </div>
        <a
          href="#contato"
          className="inline-flex items-center min-h-11 bg-navy text-white text-xs font-medium uppercase tracking-wider px-4 md:px-5 py-2.5 rounded-full whitespace-nowrap hover:bg-magenta transition-colors"
        >
          Contato
        </a>
        <button
          type="button"
          className="lg:hidden w-11 h-11 min-w-11 min-h-11 rounded-full border-2 border-navy flex items-center justify-center"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X weight="bold" size={18} /> : <List weight="bold" size={18} />}
        </button>
      </div>
      {open ? (
        <div className="lg:hidden mt-2 rounded-[1.5rem] border-2 border-navy bg-white p-3 flex flex-col">
          {LINKS.map((item) =>
            item.href.startsWith("/") ? (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-3 rounded-full text-sm font-medium uppercase tracking-wider hover:bg-yellow"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-3 rounded-full text-sm font-medium uppercase tracking-wider hover:bg-yellow"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ),
          )}
        </div>
      ) : null}
    </nav>
  );
}
