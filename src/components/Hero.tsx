import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 md:pt-40 pb-20 md:pb-28 px-4 md:px-8 overflow-hidden min-h-[100dvh]"
    >
      <div className="absolute -top-20 -left-32 w-[420px] h-[420px] bg-yellow/50 blob blur-2xl pointer-events-none" />
      <div className="absolute top-40 -right-20 w-[380px] h-[380px] bg-lime/40 blob-slow blur-2xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        <div className="reveal">
          <span className="inline-block bg-lime border-2 border-navy rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] mb-6 -rotate-2">
            Disponivel para parcerias
          </span>
          <h1 className="font-display font-extrabold text-6xl md:text-7xl xl:text-8xl tracking-tighter leading-[0.92] mb-6">
            Oi, eu sou
            <br />
            <span className="text-magenta">a Bell</span>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-[42ch] leading-relaxed mb-8">
            Criadora de Conteudo UGC — transformo produtos em historias autenticas
            que vendem de verdade.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-magenta text-white font-medium px-8 py-4 rounded-full btn-shadow hover:scale-105 hover:-rotate-1 transition-transform duration-300"
            >
              Vamos Conversar <ArrowUpRight weight="bold" size={20} />
            </a>
            <a
              href="#cases"
              className="inline-flex items-center gap-2 border-2 border-navy font-medium px-8 py-4 rounded-full hover:bg-navy hover:text-white transition-colors duration-300"
            >
              Ver Portfolio
            </a>
          </div>
        </div>

        <div className="relative reveal" style={{ animationDelay: ".15s" }}>
          <div className="relative w-full max-w-md mx-auto aspect-[4/5]">
            <div className="absolute inset-0 bg-magenta blob" />
            <img
              src="https://picsum.photos/seed/bell-hero-portrait/700/900"
              alt="Bell, criadora UGC"
              className="absolute inset-3 w-[calc(100%-1.5rem)] h-[calc(100%-1.5rem)] object-cover blob"
              style={{ animationDelay: "-3s" }}
            />
            <div className="absolute -top-6 -left-8 bg-yellow border-2 border-navy rounded-2xl px-4 py-2 rotate-[-6deg] font-display font-bold text-sm floaty card-shadow">
              UGC Creator
            </div>
            <div className="absolute top-1/3 -right-10 bg-white border-2 border-navy rounded-2xl px-4 py-2 rotate-[5deg] font-display font-bold text-sm floaty-delay card-shadow">
              #Content
            </div>
            <div className="absolute -bottom-4 left-1/4 bg-lime border-2 border-navy rounded-2xl px-4 py-2 rotate-[3deg] font-display font-bold text-sm floaty card-shadow">
              Reels
            </div>
          </div>
        </div>
      </div>

      <svg
        className="wavy-divider mt-16 md:mt-24"
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
