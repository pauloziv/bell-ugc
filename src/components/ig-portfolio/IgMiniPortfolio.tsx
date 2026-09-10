"use client";

import {useCallback, useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {AnimatePresence, motion, useReducedMotion} from "framer-motion";
import {ArrowLeft, CaretLeft, CaretRight, Copy, DownloadSimple} from "@phosphor-icons/react";
import {IG_PORTFOLIO_CAPTION, IG_SLIDES, type IgSlide} from "@/data/ig-mini-portfolio";
import {INSTAGRAM_HANDLE, SITE_URL, whatsappUrl} from "@/lib/site";
import BrandLogo from "@/components/ui/BrandLogo";

const BRANDS = [
  {name: "Creamy", src: "/images/brands/creamy.svg", plate: "bg-[#F6AB9E]"},
  {name: "Skelt", src: "/images/brands/skelt.svg", plate: "bg-[#F9DCDC]"},
  {name: "Sander", src: "/images/brands/sander.png", plate: "bg-yellow"},
  {name: "Dove", src: "/images/brands/dove.png", plate: "bg-[#F4EFE6]"},
  {name: "Muvon", src: "/images/brands/muvon.svg", plate: "bg-[#FBF8F2]"},
  {name: "Natura", src: "/images/brands/natura.svg", plate: "bg-[#FF6A00]"},
];

const FORMATS = [
  {k: "Ads", t: "Oferta imperdível", bg: "bg-yellow"},
  {k: "Recado", t: "gente, juro", bg: "bg-lime"},
  {k: "Unboxing", t: "Abre comigo", bg: "bg-[#FFC1E3]"},
  {k: "Review", t: "vou ser honesta", bg: "bg-white"},
];

function Chrome({index, onDark}: {index: number; onDark?: boolean}) {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between px-4 pt-4">
      <BrandLogo compact onDark={onDark} />
      <span className="rounded-xl border-4 border-navy bg-lime px-3 py-1 font-display text-lg font-extrabold text-navy">
        {String(index).padStart(2, "0")}
      </span>
    </div>
  );
}

function TypePlate({
  lines,
  fill = "bg-yellow",
  ink = "text-navy",
  rotate = "-rotate-2",
}: {
  lines: string[];
  fill?: string;
  ink?: string;
  rotate?: string;
}) {
  return (
    <div
      className={`absolute bottom-7 left-4 right-4 z-10 ${rotate} rounded-[1.4rem] border-[6px] border-navy px-5 py-4 hard-shadow ${fill} ${ink}`}
    >
      <h2 className="font-display text-[clamp(2.2rem,10vw,3.6rem)] font-extrabold leading-[0.88] tracking-tight">
        {lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h2>
    </div>
  );
}

function SlideFace({slide}: {slide: IgSlide}) {
  switch (slide.id) {
    case "01-cover":
      return (
        <div className="relative h-full w-full bg-navy">
          <Image
            src="/images/ig-portfolio/bel-geladeira-lata.jpg"
            alt="Bel na geladeira com lata"
            fill
            priority
            sizes="(max-width: 768px) 90vw, 420px"
            className="object-cover object-[center_18%] ken"
          />
          <Chrome index={1} onDark />
          <span className="absolute top-[42%] left-4 z-10 -rotate-[8deg] rounded-full border-4 border-navy bg-lime px-4 py-2 font-display text-sm font-extrabold text-navy">
            é indicação
          </span>
          <TypePlate lines={["NÃO É", "ANÚNCIO."]} />
        </div>
      );
    case "02-quem":
      return (
        <div className="relative h-full w-full bg-navy">
          <Image
            src="/images/creator-bel-hero.jpg"
            alt="Creator Bel"
            fill
            sizes="(max-width: 768px) 90vw, 420px"
            className="object-cover object-[center_12%] ken"
          />
          <Chrome index={2} onDark />
          <span className="absolute top-[38%] right-4 z-10 rotate-6 rounded-full border-4 border-navy bg-magenta px-4 py-2 font-display text-sm font-extrabold text-white">
            Creator Bel
          </span>
          <TypePlate lines={["RECADO", "DE AMIGA."]} fill="bg-lime" rotate="-rotate-3" />
        </div>
      );
    case "03-nichos":
      return (
        <div className="relative h-full w-full overflow-hidden bg-yellow">
          <Image
            src="/images/creator-bel-matcha.png"
            alt=""
            width={520}
            height={520}
            className="absolute -right-16 top-24 h-[70%] w-auto max-w-none"
          />
          <Chrome index={3} />
          <div className="relative z-10 px-5 pt-20">
            <p className="font-display text-[3.1rem] font-extrabold leading-[0.85] tracking-tight">
              MODA
              <br />
              NY
              <br />
              MÃE
            </p>
          </div>
          <TypePlate lines={["UM TOM."]} fill="bg-magenta" ink="text-white" rotate="-rotate-3" />
        </div>
      );
    case "04-estilo-lata":
      return (
        <div className="relative h-full w-full bg-navy">
          <Image
            src="/images/ig-portfolio/bel-geladeira-lata.jpg"
            alt={slide.title}
            fill
            sizes="(max-width: 768px) 90vw, 420px"
            className="object-cover object-[center_55%] ken"
          />
          <Chrome index={4} onDark />
          <span className="absolute top-[40%] left-4 z-10 -rotate-12 rounded-full border-4 border-navy bg-lime px-4 py-2 font-display text-sm font-extrabold text-navy">
            produto na mão
          </span>
          <TypePlate lines={["SEM", "ESTÚDIO."]} />
        </div>
      );
    case "05-estilo-costas":
      return (
        <div className="relative h-full w-full bg-navy">
          <Image
            src="/images/ig-portfolio/bel-geladeira-costas.jpg"
            alt={slide.title}
            fill
            sizes="(max-width: 768px) 90vw, 420px"
            className="object-cover object-center ken"
          />
          <Chrome index={5} onDark />
          <span className="absolute top-[40%] right-3 z-10 rotate-6 rounded-full border-4 border-navy bg-magenta px-4 py-2 font-display text-sm font-extrabold text-white">
            a marca entra no dia
          </span>
          <TypePlate lines={["RUA.", "NÃO STUDIO."]} rotate="rotate-2" />
        </div>
      );
    case "06-formatos":
      return (
        <div className="relative h-full w-full">
          <Chrome index={6} />
          <div className="grid h-full grid-rows-4">
            {FORMATS.map((f) => (
              <div key={f.k} className={`flex flex-col justify-center px-6 ${f.bg}`}>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase">{f.k}</p>
                <p className="font-display text-[1.65rem] font-extrabold leading-none">{f.t}</p>
              </div>
            ))}
          </div>
        </div>
      );
    case "07-marcas":
      return (
        <div className="relative h-full w-full overflow-hidden bg-yellow px-5 pt-20 pb-6">
          <Chrome index={7} />
          <p className="font-display text-[6.2rem] font-extrabold leading-[0.8] tracking-tight">35+</p>
          <p className="mt-2 font-display text-[2.6rem] font-extrabold leading-none text-magenta">MARCAS.</p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {BRANDS.slice(0, 4).map((b, i) => (
              <div
                key={b.name}
                className={`flex h-24 items-center justify-center rounded-[1.4rem] border-[5px] border-navy px-3 hard-shadow ${b.plate} ${i % 2 ? "rotate-2" : "-rotate-2"}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={b.src} alt={b.name} className="h-10 max-w-[8.5rem] object-contain" />
              </div>
            ))}
          </div>
        </div>
      );
    case "08-processo":
      return (
        <div className="relative h-full w-full overflow-hidden bg-lime px-5 pt-24">
          <Chrome index={8} />
          <h2 className="font-display text-[3.4rem] font-extrabold leading-[0.85] tracking-tight">
            BRIEFING
            <br />
            A SÉRIO.
          </h2>
          <span className="mt-10 inline-block -rotate-6 rounded-full border-4 border-navy bg-navy px-5 py-2 font-display text-lg font-extrabold text-yellow">
            prazo de verdade
          </span>
        </div>
      );
    case "09-pacotes":
      return (
        <div className="relative h-full w-full overflow-hidden">
          <Chrome index={9} />
          <div className="grid h-full grid-cols-2">
            <div className="flex flex-col items-center justify-center bg-white px-3 text-navy">
              <p className="font-display text-sm font-extrabold">Experimentar</p>
              <p className="mt-4 font-display text-[2.6rem] font-extrabold leading-none">R$ 200</p>
              <p className="mt-2 text-sm text-muted">1 vídeo</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-magenta px-3 text-white">
              <span className="rounded-full bg-yellow px-2 py-0.5 font-display text-[10px] font-extrabold text-navy">
                mais popular
              </span>
              <p className="mt-3 font-display text-sm font-extrabold">Professional</p>
              <p className="mt-4 font-display text-[2.6rem] font-extrabold leading-none">R$ 500</p>
              <p className="mt-2 text-sm text-white/80">3 vídeos</p>
            </div>
          </div>
        </div>
      );
    default:
      return (
        <div className="relative h-full w-full overflow-hidden bg-magenta text-white">
          <div className="absolute -top-8 -left-10 h-36 w-36 rounded-[2rem] bg-yellow" />
          <Image
            src="/images/creator-bel-fullbody.png"
            alt=""
            width={280}
            height={420}
            className="absolute -right-6 bottom-0 h-[78%] w-auto"
          />
          <Chrome index={10} onDark />
          <div className="relative z-10 flex h-full flex-col justify-center px-5">
            <h2 className="font-display text-[3.6rem] font-extrabold leading-[0.82] tracking-tight">
              VAMO
              <br />
              GRAVAR.
            </h2>
            <p className="mt-8 inline-flex w-fit rounded-full bg-navy px-5 py-3 font-display text-sm font-extrabold">
              WhatsApp · {INSTAGRAM_HANDLE}
            </p>
          </div>
        </div>
      );
  }
}

export default function IgMiniPortfolio({videos}: {videos: Record<string, boolean>}) {
  const [index, setIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const reduced = useReducedMotion();
  const slide = IG_SLIDES[index];
  const hasVideo = Boolean(videos[slide.id]);

  const go = useCallback((next: number) => {
    setIndex((next + IG_SLIDES.length) % IG_SLIDES.length);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(index + 1);
      if (e.key === "ArrowLeft") go(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, index]);

  async function copyCaption() {
    await navigator.clipboard.writeText(IG_PORTFOLIO_CAPTION);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="min-h-[100dvh] bg-offwhite pb-16">
      <header className="mx-auto flex max-w-[1100px] items-center justify-between px-4 py-5 md:px-8">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-navy bg-white px-4 font-display text-sm font-bold"
        >
          <ArrowLeft weight="bold" size={16} />
          Site
        </Link>
        <BrandLogo compact />
        <a
          href={whatsappUrl("Oi Bel! Vi o mini portfólio do Instagram e quero fechar UGC.")}
          className="inline-flex min-h-11 items-center rounded-full bg-magenta px-4 font-display text-sm font-bold text-white"
        >
          WhatsApp
        </a>
      </header>

      <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-start gap-10 px-4 md:px-8 lg:grid-cols-[minmax(0,26rem)_1fr]">
        <div>
          <div className="relative mx-auto w-full max-w-[26rem]">
            <div className="absolute -top-4 -left-4 h-24 w-24 bg-yellow/70 blob blur-xl" />
            <div className="relative overflow-hidden rounded-[2.1rem] border-[3px] border-navy bg-navy hard-shadow">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={slide.id}
                    className="absolute inset-0"
                    initial={reduced ? false : {opacity: 0, x: 40}}
                    animate={{opacity: 1, x: 0}}
                    exit={reduced ? undefined : {opacity: 0, x: -32}}
                    transition={{duration: 0.28, ease: [0.32, 0.72, 0, 1]}}
                  >
                    {hasVideo ? (
                      <video
                        className="h-full w-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        aria-label={slide.title}
                      >
                        <source src={`/ig-portfolio/${slide.file}`} type="video/mp4" />
                        {slide.title}
                      </video>
                    ) : (
                      <SlideFace slide={slide} />
                    )}
                  </motion.div>
                </AnimatePresence>
                <button
                  type="button"
                  aria-label="Card anterior"
                  className="absolute inset-y-0 left-0 z-30 w-[28%] min-w-11"
                  onClick={() => go(index - 1)}
                />
                <button
                  type="button"
                  aria-label="Próximo card"
                  className="absolute inset-y-0 right-0 z-30 w-[62%] min-w-11"
                  onClick={() => go(index + 1)}
                />
              </div>
            </div>
            <div className="mt-4 flex items-center justify-center gap-3">
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-navy bg-white"
                aria-label="Anterior"
                onClick={() => go(index - 1)}
              >
                <CaretLeft weight="bold" size={18} />
              </button>
              <p className="font-display text-sm font-bold">{slide.kicker}</p>
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-navy bg-white"
                aria-label="Próximo"
                onClick={() => go(index + 1)}
              >
                <CaretRight weight="bold" size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="lg:pt-6">
          <span className="text-xs font-medium tracking-[0.2em] text-magenta uppercase">Instagram · 10 cards</span>
          <h1 className="headline-1 mt-3 font-display font-extrabold">
            Mini portfólio <span className="text-magenta">no feed</span>
          </h1>
          <p className="mt-4 max-w-[48ch] text-muted">
            Formato 4:5 (1080×1350), 6 segundos, vídeo em loop. Capa decide o recorte de todos os slides — spec Meta. Postar como carrossel no {INSTAGRAM_HANDLE}.
          </p>
          <ol className="mt-6 space-y-2">
            {IG_SLIDES.map((s, i) => (
              <li key={s.id}>
                <div
                  className={`flex w-full min-h-11 items-center justify-between rounded-2xl border-2 border-navy px-4 py-3 ${
                    i === index ? "bg-yellow" : "bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setIndex(i)}
                    className="min-h-11 flex-1 text-left font-display text-sm font-bold"
                  >
                    {String(i + 1).padStart(2, "0")} · {s.title}
                  </button>
                  {videos[s.id] ? (
                    <a
                      href={`/ig-portfolio/${s.file}`}
                      download
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-navy bg-white"
                      aria-label={`Baixar ${s.file}`}
                    >
                      <DownloadSimple weight="bold" size={16} />
                    </a>
                  ) : (
                    <span className="text-[10px] font-bold tracking-wider text-muted uppercase">preview</span>
                  )}
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-8 rounded-[1.8rem] border-2 border-navy bg-white p-5">
            <p className="text-xs font-bold tracking-[0.16em] text-magenta uppercase">Legenda</p>
            <pre className="mt-3 whitespace-pre-wrap font-body text-sm leading-relaxed text-navy">
              {IG_PORTFOLIO_CAPTION}
            </pre>
            <button
              type="button"
              onClick={() => void copyCaption()}
              className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-navy bg-lime px-4 font-display text-sm font-bold"
            >
              <Copy weight="bold" size={16} />
              {copied ? "Copiado" : "Copiar legenda"}
            </button>
          </div>
          <p className="mt-4 text-xs text-muted">
            Pesquisa: {SITE_URL.replace("https://", "")}/mini-portfolio · spec em docs/research.
          </p>
        </div>
      </div>
    </div>
  );
}
