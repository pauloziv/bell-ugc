import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import MagneticButton from "@/components/ui/MagneticButton";
import BlobBackground from "@/components/ui/BlobBackground";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-24 md:pt-28 pb-6 md:pb-8 px-4 md:px-8 overflow-hidden"
    >
      <BlobBackground />
      <div className="absolute -top-8 -left-12 w-40 h-40 bg-yellow/40 blob blur-xl pointer-events-none" />
      <div className="absolute top-16 -right-8 w-36 h-36 bg-lime/30 blob-slow blur-xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6 items-center relative z-10">
        <div className="reveal">
          <span className="inline-block bg-lime border-2 border-navy rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] mb-4 -rotate-2">
            Disponivel para parcerias
          </span>
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl xl:text-8xl tracking-tighter leading-[0.92] mb-4">
            Oi, eu sou
            <br />
            <span className="text-magenta">Creator Bel</span>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-[42ch] leading-relaxed mb-6">
            Criadora de Conteudo UGC — transformo produtos em historias autenticas
            que vendem de verdade.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <MagneticButton
              href="#contato"
              className="bg-magenta text-white btn-shadow hover:scale-105 hover:-rotate-1"
            >
              Vamos Conversar <ArrowUpRight weight="bold" size={20} />
            </MagneticButton>
            <MagneticButton
              href="#cases"
              className="border-2 border-navy hover:bg-navy hover:text-white"
            >
              Ver Portfolio
            </MagneticButton>
          </div>
        </div>

        <div className="relative">
          <div className="relative w-full max-w-sm mx-auto aspect-[4/5]">
            <div className="absolute inset-0 bg-magenta blob" />
            <div
              className="absolute inset-3 blob overflow-hidden"
              style={{ animationDelay: "-3s" }}
            >
              <Image
                src="/images/creator-bel-hero.webp"
                alt="Creator Bel, criadora UGC"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 24rem"
                className="object-cover object-top"
              />
            </div>
            <div className="absolute -top-4 -left-4 bg-yellow border-2 border-navy rounded-2xl px-4 py-2 rotate-[-6deg] font-display font-bold text-sm floaty card-shadow">
              Creator Bel
            </div>
            <div className="absolute top-1/3 -right-6 bg-white border-2 border-navy rounded-2xl px-4 py-2 rotate-[5deg] font-display font-bold text-sm floaty-delay card-shadow">
              #Content
            </div>
            <div className="absolute -bottom-3 left-1/4 bg-lime border-2 border-navy rounded-2xl px-4 py-2 rotate-[3deg] font-display font-bold text-sm floaty card-shadow">
              Reels
            </div>
          </div>
        </div>
      </div>

      <svg
        className="wavy-divider mt-4 md:mt-6"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
      >
        <path
          d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
          fill="#1A1A2E"
        />
      </svg>
    </section>
  );
}
