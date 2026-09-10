"use client";

import {useCallback, useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {AnimatePresence, motion, useReducedMotion} from "framer-motion";
import {ArrowLeft, CaretLeft, CaretRight, Copy, DownloadSimple} from "@phosphor-icons/react";
import {IG_PORTFOLIO_CAPTION, IG_SLIDES, type IgSlide} from "@/data/ig-mini-portfolio";
import {INSTAGRAM_HANDLE, EMAIL, SITE_URL, whatsappUrl} from "@/lib/site";
import BrandLogo from "@/components/ui/BrandLogo";

const BRANDS = [
  "Creamy",
  "Skelt",
  "Natura",
  "Farm",
  "Granado",
  "Boticário",
  "Havaianas",
  "Muvon",
  "Ferrari",
];

function Phone({src, alt, label, rotate = ""}: {src: string; alt: string; label: string; rotate?: string}) {
  return (
    <div className="flex w-[31%] flex-col items-center gap-2">
      <div
        className={`relative aspect-[9/16] w-full overflow-hidden rounded-[1.35rem] border-[5px] border-navy bg-navy ${rotate}`}
      >
        <Image src={src} alt={alt} fill sizes="120px" className="object-cover" />
      </div>
      <p className="text-center text-[10px] font-bold text-navy">{label}</p>
    </div>
  );
}

function WorkFace({
  title,
  phones,
}: {
  title: string;
  phones: {src: string; alt: string; label: string}[];
}) {
  return (
    <div className="relative h-full w-full bg-offwhite">
      <div className="absolute inset-x-0 top-0 h-[38%] bg-navy">
        <p className="absolute inset-x-0 top-[42%] text-center font-display text-[clamp(1.8rem,8vw,2.8rem)] font-extrabold text-yellow">
          {title}
        </p>
      </div>
      <div className="absolute inset-x-3 top-[22%] z-10 flex justify-center gap-2">
        {phones.map((p, i) => (
          <Phone key={p.label} {...p} rotate={i === 1 ? "rotate-2" : i === 2 ? "-rotate-2" : "-rotate-3"} />
        ))}
      </div>
      <p className="absolute inset-x-0 bottom-4 text-center font-display text-[clamp(2.2rem,12vw,3.4rem)] font-extrabold leading-none text-navy">
        content
      </p>
    </div>
  );
}

function SlideFace({slide}: {slide: IgSlide}) {
  switch (slide.id) {
    case "01-cover":
      return (
        <div className="relative h-full w-full bg-navy">
          <Image
            src="/images/kit/kit-smile.jpg"
            alt="Creator Bel"
            fill
            priority
            sizes="(max-width: 768px) 90vw, 420px"
            className="object-cover object-[center_20%] ken"
          />
          <div className="absolute left-1/2 top-[18%] z-10 w-[78%] -translate-x-1/2">
            <div className="relative rounded-[1.2rem] border-[5px] border-navy bg-yellow px-5 py-8 text-center">
              <p className="font-display text-2xl font-extrabold text-magenta">mini</p>
              <p className="font-display text-[clamp(2.4rem,11vw,3.2rem)] font-extrabold leading-[0.85] text-navy">
                PORT
                <br />
                FÓLIO
              </p>
              <p className="mt-3 font-display text-sm font-extrabold text-navy">@bel.conteudos</p>
              <div className="mx-auto mt-4 h-8 w-4/5 rounded-full border-[3px] border-navy bg-white" />
            </div>
          </div>
        </div>
      );
    case "02-marcas":
      return (
        <div className="relative h-full w-full overflow-hidden bg-offwhite px-5 pt-16">
          <p className="font-display text-[2.1rem] font-extrabold leading-none text-navy">Algumas marcas</p>
          <p className="mt-2 text-sm font-medium text-magenta">com quem eu já gravei</p>
          <div className="mt-6 grid grid-cols-3 gap-2">
            {BRANDS.map((name) => (
              <div
                key={name}
                className="flex h-14 items-center justify-center rounded-full border-[3px] border-navy bg-white"
              >
                <span className="font-display text-[11px] font-extrabold text-navy">{name}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="relative h-36 overflow-hidden rounded-2xl border-[4px] border-navy">
              <Image src="/images/kit/kit-beleza.jpg" alt="" fill className="object-cover" />
            </div>
            <div className="relative h-36 overflow-hidden rounded-2xl border-[4px] border-navy">
              <Image src="/images/kit/kit-smile.jpg" alt="" fill className="object-cover" />
            </div>
          </div>
        </div>
      );
    case "03-beleza":
      return (
        <WorkFace
          title="Beleza"
          phones={[
            {src: "/images/kit/kit-beleza.jpg", alt: "Beleza", label: "océane"},
            {src: "/images/kit/kit-smile.jpg", alt: "Rosto", label: "creamy"},
            {src: "/images/kit/kit-estudio.jpg", alt: "Look", label: "skelt"},
          ]}
        />
      );
    case "04-indicacoes":
      return (
        <WorkFace
          title="Indicações"
          phones={[
            {src: "/images/ig-portfolio/bel-geladeira-lata.jpg", alt: "Lata", label: "produto na rua"},
            {src: "/images/ig-portfolio/bel-geladeira-costas.jpg", alt: "Costas", label: "gesto real"},
            {src: "/images/kit/kit-smile.jpg", alt: "Bel", label: "indicação"},
          ]}
        />
      );
    case "05-moda":
      return (
        <WorkFace
          title="Moda"
          phones={[
            {src: "/images/kit/kit-loja.jpg", alt: "Loja", label: "look na loja"},
            {src: "/images/kit/kit-estudio.jpg", alt: "Estúdio", label: "look no dia"},
            {src: "/images/creator-bel-hero.jpg", alt: "Hero", label: "selfie"},
          ]}
        />
      );
    case "06-ads":
      return (
        <WorkFace
          title="Video ads"
          phones={[
            {src: "/images/ig-portfolio/bel-geladeira-lata.jpg", alt: "Ads", label: "produto"},
            {src: "/images/kit/kit-salao.jpg", alt: "Salão", label: "serviço"},
            {src: "/images/kit/kit-beleza.jpg", alt: "Skincare", label: "skincare"},
          ]}
        />
      );
    case "07-salao":
      return (
        <WorkFace
          title="Salão"
          phones={[
            {src: "/images/kit/kit-salao.jpg", alt: "Salão", label: "ferrari hair"},
            {src: "/images/kit/kit-salao.jpg", alt: "Cabelo", label: "no salão"},
            {src: "/images/kit/kit-estudio.jpg", alt: "Dia", label: "cabelo no dia"},
          ]}
        />
      );
    case "08-vida":
      return (
        <WorkFace
          title="Vida real"
          phones={[
            {src: "/images/kit/kit-smile.jpg", alt: "Rosto", label: "rosto"},
            {src: "/images/kit/kit-loja.jpg", alt: "Rua", label: "na rua"},
            {src: "/images/ig-portfolio/bel-geladeira-costas.jpg", alt: "Gesto", label: "gesto"},
          ]}
        />
      );
    case "09-rua":
      return (
        <WorkFace
          title="Na rua"
          phones={[
            {src: "/images/ig-portfolio/bel-geladeira-lata.jpg", alt: "Lata", label: "lata na mão"},
            {src: "/images/ig-portfolio/bel-geladeira-costas.jpg", alt: "Geladeira", label: "geladeira"},
            {src: "/images/kit/kit-loja.jpg", alt: "Cidade", label: "cidade"},
          ]}
        />
      );
    default:
      return (
        <div className="relative h-full w-full overflow-hidden bg-offwhite">
          <p className="absolute inset-x-0 top-8 text-center font-display text-lg font-extrabold text-navy">
            @bel.conteudos
          </p>
          <div className="absolute left-1/2 top-[22%] w-[78%] -translate-x-1/2 rounded-md border-[4px] border-navy bg-white px-5 py-10 text-center">
            <p className="text-sm text-navy">criadora de conteúdo</p>
            <p className="mt-6 inline-block -rotate-6 rounded-xl border-[4px] border-navy bg-yellow px-5 py-3 font-display text-[2rem] font-extrabold text-navy">
              ME CHAMA!
            </p>
            <p className="mt-8 inline-flex rounded-full bg-magenta px-5 py-2 font-display text-sm font-extrabold text-white">
              me chama
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
        <div className="flex flex-wrap items-center justify-end gap-2">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex min-h-11 items-center rounded-full border-2 border-navy bg-white px-3 font-display text-xs font-bold"
          >
            {EMAIL}
          </a>
          <a
            href={whatsappUrl("Oi Bel! Vi o mini portfólio do Instagram e quero gravar juntas.")}
            className="inline-flex min-h-11 items-center rounded-full bg-magenta px-4 font-display text-sm font-bold text-white"
          >
            WhatsApp
          </a>
        </div>
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
            Pasta na capa, marcas, trabalho no celular, me chama no fim. Sem preço. 4:5 (1080×1350), 6 segundos. Postar
            como carrossel no {INSTAGRAM_HANDLE}.
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
