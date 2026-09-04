import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import MagneticButton from "@/components/ui/MagneticButton";
import BlobBackground from "@/components/ui/BlobBackground";
import { whatsappUrl } from "@/lib/site";

export default function Hero() {
  return (
    <div>
      <section
        id="hero"
        className="relative pt-24 md:pt-28 pb-0 px-4 md:px-8 overflow-hidden"
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
                href={whatsappUrl(
                  "Oi Bel! Vim pelo site belconteudos.com e quero falar sobre uma parceria UGC.",
                )}
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
                  src="/images/creator-bel-hero.jpg"
                  alt="Creator Bel, criadora UGC"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 24rem"
                  className="object-cover object-[center_18%]"
                />
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
          className="wavy-divider mt-8 md:mt-10 mb-[-1px] relative z-10"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
            fill="#1A1A2E"
          />
        </svg>
      </section>

      <section
        id="sobre"
        className="bg-navy text-white pt-10 md:pt-14 pb-16 md:pb-24 px-4 md:px-8 relative overflow-hidden"
      >
        <div className="absolute top-8 right-8 w-32 h-32 bg-magenta/20 blob blur-xl pointer-events-none" />
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-center relative z-10">
          <div className="lg:col-span-2">
            <div className="relative w-full max-w-sm mx-auto aspect-square">
              <div className="absolute inset-0 bg-yellow blob-slow" />
              <div className="absolute inset-3 blob overflow-hidden">
                <Image
                  src="/images/creator-bel-about.jpg"
                  alt="Ilustracao estilizada da Creator Bel"
                  fill
                  sizes="(max-width: 1024px) 80vw, 24rem"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-lime text-navy border-2 border-white rounded-2xl px-5 py-3 rotate-[-4deg] font-display font-bold floaty">
                +3 anos criando
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-yellow">
              Sobre mim
            </span>
            <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight mt-3 mb-6">
              Conteudo real, <span className="text-magenta">resultado real.</span>
            </h2>
            <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-[65ch] mb-4">
              Sou apaixonada por contar historias que conectam marcas a pessoas de
              verdade. Ha anos crio conteudo autentico para redes sociais, unindo
              criatividade, estrategia e uma boa dose de espontaneidade.
            </p>
            <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-[65ch] mb-8">
              Cada video que produzo carrega minha voz, meu jeito de contar
              historias e a certeza de que o UGC nao e sobre perfeicao — e sobre
              conexao.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4">
                <p className="font-display font-extrabold text-3xl text-yellow">120+</p>
                <p className="text-xs uppercase tracking-wider text-white/60">
                  Videos entregues
                </p>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4">
                <p className="font-display font-extrabold text-3xl text-lime">35+</p>
                <p className="text-xs uppercase tracking-wider text-white/60">
                  Marcas parceiras
                </p>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4">
                <p className="font-display font-extrabold text-3xl text-magenta">98%</p>
                <p className="text-xs uppercase tracking-wider text-white/60">
                  Clientes satisfeitos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
