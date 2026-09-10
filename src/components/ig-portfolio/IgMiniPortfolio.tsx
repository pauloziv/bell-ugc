"use client";

import {useCallback, useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {AnimatePresence, motion, useReducedMotion} from "framer-motion";
import {ArrowLeft, CaretLeft, CaretRight, Copy, DownloadSimple} from "@phosphor-icons/react";
import {IG_PORTFOLIO_CAPTION, IG_SLIDES, type IgSlide} from "@/data/ig-mini-portfolio";
import {INSTAGRAM_HANDLE, SITE_URL, whatsappUrl} from "@/lib/site";
import {NICHES} from "@/lib/kit-copy";
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

const STEPS = [
  {n: "01", t: "Briefing", d: "Objetivo e voz da marca", bg: "bg-magenta text-white"},
  {n: "02", t: "Roteiro", d: "Autêntico e estratégico", bg: "bg-yellow"},
  {n: "03", t: "Produção", d: "Luz, som, estética", bg: "bg-lime"},
  {n: "04", t: "Edição", d: "Ritmo de plataforma", bg: "bg-white"},
  {n: "05", t: "Entrega", d: "Arquivo pronto pra publicar", bg: "bg-yellow"},
];

function Chrome({index, onDark}: {index: number; onDark?: boolean}) {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 pt-5">
      <span className={onDark ? "scale-90 origin-left" : "scale-90 origin-left"}>
        <BrandLogo compact onDark={onDark} />
      </span>
      <span
        className={`font-body text-[11px] font-bold tracking-[0.18em] ${onDark ? "text-white" : "text-navy"}`}
      >
        {String(index).padStart(2, "0")} / 10
      </span>
    </div>
  );
}

function Dots({index}: {index: number}) {
  return (
    <div className="absolute inset-x-0 bottom-4 z-20 flex justify-center gap-1.5">
      {IG_SLIDES.map((s, i) => (
        <span
          key={s.id}
          className={`h-2.5 rounded-full border-2 border-navy ${
            i === index ? "w-4 bg-lime" : "w-2.5 bg-white/40"
          }`}
        />
      ))}
    </div>
  );
}

function SlideFace({slide, index}: {slide: IgSlide; index: number}) {
  switch (slide.id) {
    case "01-cover":
      return (
        <div className="relative h-full w-full bg-navy text-white">
          <Image
            src="/images/ig-portfolio/bel-geladeira-lata.jpg"
            alt="Bel na geladeira com lata"
            fill
            priority
            sizes="(max-width: 768px) 90vw, 420px"
            className="object-cover object-[center_20%] ken"
          />
          <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-navy via-navy/95 to-transparent" />
          <Chrome index={1} onDark />
          <div className="absolute top-[18%] right-5 z-10 w-[28%] rotate-[8deg] overflow-hidden rounded-[1rem] border-4 border-navy bg-white card-shadow">
            <Image
              src="/images/ig-portfolio/bel-geladeira-costas.jpg"
              alt=""
              width={200}
              height={268}
              className="h-auto w-full"
            />
          </div>
          <span className="absolute top-[46%] left-5 z-10 -rotate-[8deg] rounded-full border-2 border-navy bg-lime px-3 py-1 font-display text-xs font-extrabold text-navy">
            disponível
          </span>
          <div className="absolute inset-x-0 bottom-14 z-10 px-6 text-center">
            <h2 className="font-display text-[clamp(2rem,8vw,3.4rem)] font-extrabold leading-[0.95] tracking-tight">
              Vamos criar juntas?
            </h2>
            <p className="mt-3 text-sm font-medium text-yellow">Creator Bel · UGC que vende de verdade</p>
            <p className="mt-4 text-[10px] font-bold tracking-[0.28em] text-white/70 uppercase">desliza</p>
          </div>
          <Dots index={index} />
        </div>
      );
    case "02-quem":
      return (
        <div className="relative h-full w-full bg-offwhite px-6 pt-20 pb-12">
          <Chrome index={2} />
          <div className="flex items-center gap-4">
            <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-full border-[5px] border-navy">
              <Image src="/images/creator-bel-about.jpg" alt="Creator Bel" fill className="object-cover" />
            </div>
            <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight">
              Oi, eu sou
              <br />
              Creator Bel
            </h2>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted">
            Criadora de conteúdo UGC. Transformo produto em indicação — moda, casa, estética, NY, mãe. Já estive dos dois lados do briefing.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-2">
            {[
              {n: "120+", l: "vídeos", bg: "bg-yellow"},
              {n: "35+", l: "marcas", bg: "bg-lime"},
              {n: "98%", l: "satisfação", bg: "bg-magenta text-white"},
            ].map((s) => (
              <div
                key={s.l}
                className={`rounded-[1.4rem] border-2 border-navy px-2 py-4 text-center ${s.bg}`}
              >
                <p className="font-display text-2xl font-extrabold">{s.n}</p>
                <p className="text-[10px] font-bold tracking-wider uppercase">{s.l}</p>
              </div>
            ))}
          </div>
          <Dots index={index} />
        </div>
      );
    case "03-nichos":
      return (
        <div className="relative h-full w-full bg-yellow px-6 pt-20 pb-12">
          <Chrome index={3} />
          <p className="text-center text-[11px] font-bold tracking-[0.2em] uppercase">Por que vários nichos?</p>
          <h2 className="mt-3 text-center font-display text-[2rem] font-extrabold leading-tight">
            Olhar amplo. Entrega cirúrgica.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {NICHES.map((n, i) => (
              <span
                key={n}
                className={`rounded-full border-2 border-navy px-4 py-2 font-display text-sm font-extrabold ${
                  i % 3 === 0 ? "bg-white" : i % 3 === 1 ? "bg-lime" : "bg-magenta text-white"
                } ${i % 2 ? "rotate-3" : "-rotate-2"}`}
              >
                {n}
              </span>
            ))}
          </div>
          <Dots index={index} />
        </div>
      );
    case "04-estilo-lata":
    case "05-estilo-costas":
      return (
        <div className="relative h-full w-full bg-navy text-white">
          <Image
            src={slide.photo ?? ""}
            alt={slide.title}
            fill
            sizes="(max-width: 768px) 90vw, 420px"
            className="object-cover object-center ken"
          />
          <div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-navy via-navy/90 to-transparent" />
          <Chrome index={slide.id === "04-estilo-lata" ? 4 : 5} onDark />
          <div className="absolute inset-x-0 bottom-14 z-10 px-6 text-center">
            <span className="inline-block rounded-full border-2 border-navy bg-lime px-3 py-1 font-display text-[11px] font-extrabold text-navy">
              {slide.id === "04-estilo-lata" ? "lifestyle" : "moda · rua"}
            </span>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight">{slide.title}</h2>
            <p className="mt-2 text-sm text-yellow">{slide.body}</p>
          </div>
          <Dots index={index} />
        </div>
      );
    case "06-formatos":
      return (
        <div className="relative h-full w-full bg-offwhite px-6 pt-20 pb-12">
          <Chrome index={6} />
          <p className="text-center text-[11px] font-bold tracking-[0.2em] text-magenta uppercase">Como eu falo</p>
          <h2 className="mt-2 text-center font-display text-3xl font-extrabold leading-tight">
            Ads, recado, unboxing, review.
          </h2>
          <div className="mt-8 space-y-3">
            {FORMATS.map((f, i) => (
              <div
                key={f.k}
                className={`flex items-center justify-between rounded-[1.4rem] border-2 border-navy px-4 py-4 ${f.bg} ${i % 2 ? "rotate-1" : "-rotate-1"}`}
              >
                <span className="text-[10px] font-bold tracking-[0.16em] uppercase">{f.k}</span>
                <span className="font-display text-lg font-extrabold">{f.t}</span>
              </div>
            ))}
          </div>
          <Dots index={index} />
        </div>
      );
    case "07-marcas":
      return (
        <div className="relative h-full w-full bg-offwhite px-6 pt-20 pb-12">
          <Chrome index={7} />
          <p className="text-center text-[11px] font-bold tracking-[0.2em] text-magenta uppercase">
            Quem já criou comigo
          </p>
          <h2 className="mt-2 text-center font-display text-3xl font-extrabold">Marcas no palco.</h2>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {BRANDS.map((b, i) => (
              <div
                key={b.name}
                className={`flex h-24 items-center justify-center rounded-[1.4rem] border-2 border-navy px-3 ${b.plate} ${i % 2 ? "rotate-2" : "-rotate-2"}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={b.src} alt={b.name} className="h-10 max-w-[8.5rem] object-contain" />
              </div>
            ))}
          </div>
          <Dots index={index} />
        </div>
      );
    case "08-processo":
      return (
        <div className="relative h-full w-full bg-navy px-6 pt-20 pb-12 text-white">
          <Chrome index={8} onDark />
          <p className="text-center text-[11px] font-bold tracking-[0.2em] text-yellow uppercase">Como eu trabalho</p>
          <h2 className="mt-2 text-center font-display text-[1.7rem] font-extrabold leading-tight">
            Briefing a sério. Prazo de verdade.
          </h2>
          <div className="mt-6 space-y-2">
            {STEPS.map((s) => (
              <div
                key={s.n}
                className={`flex items-center gap-4 rounded-[1.2rem] border-2 border-navy px-4 py-3 ${s.bg}`}
              >
                <span className="font-display text-lg font-extrabold">{s.n}</span>
                <div>
                  <p className="font-display text-lg font-extrabold leading-none">{s.t}</p>
                  <p className="text-xs opacity-80">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
          <Dots index={index} />
        </div>
      );
    case "09-pacotes":
      return (
        <div className="relative h-full w-full bg-navy px-5 pt-20 pb-12 text-white">
          <Chrome index={9} onDark />
          <p className="text-center text-[11px] font-bold tracking-[0.2em] text-yellow uppercase">Investimento</p>
          <h2 className="mt-2 text-center font-display text-2xl font-extrabold">Dois pacotes. Sem surpresa.</h2>
          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="hard-shadow -rotate-2 rounded-[1.6rem] border-[3px] border-navy bg-white p-4 text-navy">
              <p className="font-display text-lg font-extrabold">Experimentar</p>
              <p className="mt-1 text-xs text-muted">Um vídeo pra testar o fit</p>
              <p className="mt-3 font-display text-3xl font-extrabold">R$ 200</p>
              <p className="mt-2 text-[11px]">1 UGC · revisão · ads 3 meses</p>
            </div>
            <div className="hard-shadow rotate-2 rounded-[1.6rem] border-[3px] border-navy bg-magenta p-4">
              <span className="inline-block rounded-full bg-yellow px-2 py-0.5 font-display text-[10px] font-extrabold text-navy">
                mais popular
              </span>
              <p className="mt-2 font-display text-lg font-extrabold">Professional</p>
              <p className="mt-1 text-xs text-white/80">Três vídeos + roteiro</p>
              <p className="mt-3 font-display text-3xl font-extrabold">R$ 500</p>
              <p className="mt-2 text-[11px]">3 UGC · ads 6 meses</p>
            </div>
          </div>
          <Dots index={index} />
        </div>
      );
    default:
      return (
        <div className="relative h-full w-full overflow-hidden bg-magenta text-white">
          <div className="absolute -top-10 -left-10 h-48 w-48 rounded-full bg-yellow/60 blob" />
          <div className="absolute -right-8 -bottom-10 h-40 w-40 rounded-full bg-lime/50 blob-slow" />
          <Chrome index={10} onDark />
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
            <p className="text-[11px] font-bold tracking-[0.2em] text-yellow uppercase">Próximo passo</p>
            <h2 className="mt-4 font-display text-6xl font-extrabold tracking-tight">Me chama.</h2>
            <p className="mt-8 rounded-full bg-navy px-5 py-3 font-display text-sm font-extrabold">
              WhatsApp · {INSTAGRAM_HANDLE}
            </p>
            <p className="mt-4 text-sm font-bold text-navy">belconteudos.com</p>
          </div>
          <Dots index={index} />
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
                      <SlideFace slide={slide} index={index} />
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
