"use client";

import Image from "next/image";
import {
  ChatCircle,
  Heart,
  Play,
  ShareNetwork,
  Stamp,
} from "@phosphor-icons/react";
import { useEffect, useState, type ReactNode } from "react";
import { parseYouTubeId, youtubeEmbedSrc } from "@/lib/youtube";

type CaseCard = {
  name: string;
  kicker: string;
  desc: string;
  sample?: boolean;
  poster?: string;
  plate: string;
  video?: string;
  logo?: string;
};

const CASES: CaseCard[] = [
  {
    name: "Sander",
    kicker: "Reel na sorveteria",
    desc: "Casquinha de chocolate adoçada com stevia. UGC real, conversa de mãe — até o filho de 5 anos adorou.",
    poster: "/images/reels/sander.webp",
    logo: "/images/brands/sander.png",
    plate: "bg-yellow",
    video: "https://www.youtube.com/embed/_4e_H7inmnA",
  },
  {
    name: "Creamy",
    kicker: "Rotina de skincare",
    desc: "Reel de ritual Creamy — textura, glow e conversa de pia. UGC real, sem cara de studio.",
    poster: "/images/reels/creamy.webp",
    logo: "/images/brands/creamy.svg",
    plate: "bg-[#F6AB9E]",
    video: "https://www.youtube.com/embed/A9SIIuvWORU",
  },
  {
    name: "Alva",
    kicker: "Ritual da manhã",
    desc: "Chá na varanda, luz boa, conversa lenta. UGC de bem-estar que cabe no stories e no ads.",
    sample: true,
    plate: "bg-lime",
  },
  {
    name: "Névoa",
    kicker: "Spray no pulso",
    desc: "Body mist, cheiro e o “passa aqui”. Unboxing íntimo — banheiro real, sem pose de campanha.",
    sample: true,
    plate: "bg-[#FFC1E3] text-navy",
  },
];

export default function KitCases({
  id = "cases",
  eyebrow = "Quem confia em mim",
  title,
  subtitle,
  reserveAvatar = false,
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: string;
  reserveAvatar?: boolean;
}) {
  const [play, setPlay] = useState<string | null>(null);
  const playId = play ? parseYouTubeId(play) : null;

  useEffect(() => {
    if (!play) return;
    const prevHtml = document.documentElement.style.overflow;
    const prevBody = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPlay(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = prevHtml;
      document.body.style.overflow = prevBody;
      window.removeEventListener("keydown", onKey);
    };
  }, [play]);

  return (
    <section
      id={id}
      className="relative bg-offwhite px-4 py-16 scroll-mt-28 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className={reserveAvatar ? "pr-12 md:pr-0" : undefined}>
          <span className="text-xs font-medium tracking-[0.2em] text-magenta uppercase">
            {eyebrow}
          </span>
          <h2 className="headline-1 mt-3 font-display font-extrabold">
            {title ?? (
              <>
                Marcas que <span className="text-magenta">já criaram</span> comigo
              </>
            )}
          </h2>
          <p className="mt-3 max-w-[52ch] text-muted">
            {subtitle ??
              "Sander e Creamy são cases reais — toca no play. Alva e Névoa são amostras de formato, com o chip Amostra."}
          </p>
        </div>

        <div className="kit-fan mt-8 md:mt-10">
          {CASES.map((c) => (
            <article key={c.name} className="kit-fan-card">
              <div className="h-full overflow-hidden rounded-[1.85rem] border-[3px] border-navy bg-navy p-[0.35rem] hard-shadow">
                <div className="relative h-full overflow-hidden rounded-[1.35rem] kit-phone-shine">
                  {c.poster ? (
                    <Image
                      src={c.poster}
                      alt={c.name}
                      fill
                      sizes="(max-width: 768px) 12rem, 16rem"
                      className="object-cover"
                    />
                  ) : (
                    <div
                      className={`flex h-full flex-col items-center justify-center gap-3 ${c.plate}`}
                    >
                      <span className="font-display text-3xl font-extrabold tracking-tighter">
                        {c.name}
                      </span>
                      <span className="headline-card px-2 text-[10px] tracking-[0.18em] uppercase opacity-70">
                        {c.kicker}
                      </span>
                    </div>
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-navy/25" />
                  {c.sample ? (
                    <span className="absolute top-3 left-3 z-10 inline-flex items-center gap-1 rounded-full border-2 border-navy bg-yellow px-2 py-0.5 font-display text-[10px] font-extrabold text-navy uppercase">
                      <Stamp weight="bold" size={11} />
                      Amostra
                    </span>
                  ) : (
                    <div className="pointer-events-none absolute top-3 right-12 left-3 flex items-center justify-between text-[10px] tracking-wide text-white/80">
                      <span>0:12</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                    </div>
                  )}
                  {c.video ? (
                    <button
                      type="button"
                      onClick={() => setPlay(c.video ?? null)}
                      className="absolute inset-0 z-10 flex items-center justify-center"
                      aria-label={`Assistir case ${c.name}`}
                    >
                      <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-sm">
                        <Play weight="fill" size={22} className="ml-0.5" />
                      </span>
                    </button>
                  ) : null}
                  <div className="pointer-events-none absolute right-2.5 bottom-16 z-10 flex flex-col items-center gap-3 text-white">
                    <Heart weight="fill" size={20} />
                    <ChatCircle weight="bold" size={20} />
                    <ShareNetwork weight="bold" size={18} />
                  </div>
                  <div className="pointer-events-none absolute right-10 bottom-3 left-3 z-10">
                    <span className="headline-card block font-display text-sm font-bold text-white [text-shadow:0_1px_8px_rgba(26,26,46,0.45)]">
                      {c.name}
                    </span>
                    <span className="mt-0.5 block text-[11px] text-white/70">
                      {c.kicker}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 md:mt-10 md:grid-cols-4 md:gap-5">
          {CASES.map((c) => (
            <div key={`${c.name}-copy`}>
              {c.logo ? (
                // Local brand marks
                // eslint-disable-next-line @next/next/no-img-element
                <img src={c.logo} alt="" className="mb-2 h-7 w-auto object-contain" />
              ) : null}
              <p className="text-[10px] font-medium tracking-[0.18em] text-magenta uppercase">
                {c.kicker}
              </p>
              <h3 className="headline-card font-display text-2xl font-extrabold">
                {c.name}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {play && playId ? (
        <div className="fan-player is-open" role="dialog" aria-modal="true">
          <button
            type="button"
            className="fan-backdrop is-open"
            aria-label="Fechar vídeo"
            onClick={() => setPlay(null)}
          />
          <div className="fan-player-frame relative z-10">
            <button
              type="button"
              className="absolute -top-3 -right-3 z-20 flex h-11 w-11 items-center justify-center rounded-full border-2 border-navy bg-white text-navy"
              aria-label="Fechar vídeo"
              onClick={() => setPlay(null)}
            >
              <span className="font-display text-lg font-extrabold">×</span>
            </button>
            <iframe
              src={youtubeEmbedSrc(playId)}
              title="Case UGC"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="h-full w-full border-0"
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
