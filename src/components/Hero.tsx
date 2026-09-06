import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import MagneticButton from "@/components/ui/MagneticButton";
import BlobBackground from "@/components/ui/BlobBackground";
import HeroPortrait from "@/components/ui/HeroPortrait";
import AboutPortrait from "@/components/ui/AboutPortrait";
import MobilePortraitDock from "@/components/ui/MobilePortraitDock";
import KitTape from "@/components/media-kit/KitTape";
import { whatsappUrl } from "@/lib/site";
import { NICHES, TAPE_COVER } from "@/lib/kit-copy";

export default function Hero() {
  return (
    <div>
      <section
        id="hero"
        className="relative overflow-x-clip px-4 pt-24 pb-[8rem] md:px-8 md:pt-28 lg:pb-0"
      >
        <BlobBackground />
        <div className="pointer-events-none absolute -top-8 -left-12 h-40 w-40 bg-yellow/40 blob blur-xl" />
        <div className="pointer-events-none absolute top-16 -right-8 h-36 w-36 bg-lime/30 blob-slow blur-xl" />

        <div className="relative z-10 mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-6">
          <div className="reveal">
            <span className="mb-4 inline-block -rotate-2 rounded-full border-2 border-navy bg-lime px-4 py-1.5 text-xs font-medium tracking-[0.2em] uppercase">
              Disponivel para parcerias
            </span>
            <h1 className="mb-4 font-display text-5xl leading-[0.92] font-extrabold tracking-tighter sm:text-6xl md:text-7xl xl:text-8xl">
              Oi, eu sou
              <br />
              <span className="text-magenta">Creator Bel</span>
            </h1>
            <p className="mb-6 max-w-[42ch] text-lg leading-relaxed text-muted md:text-xl">
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

          <div className="relative hidden lg:block">
            <HeroPortrait flipOnScroll={false} />
          </div>
        </div>
      </section>

      <MobilePortraitDock />

      <KitTape items={TAPE_COVER} bg="bg-yellow" />

      <section
        id="sobre"
        className="relative overflow-visible rounded-t-[2.75rem] bg-navy px-4 pt-[8.25rem] pb-8 text-white lg:overflow-x-clip lg:rounded-none lg:px-8 lg:pt-14 lg:pb-24"
      >
        <div className="pointer-events-none absolute top-8 right-8 h-32 w-32 bg-magenta/20 blob blur-xl" />
        <div className="relative z-10 mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 lg:grid-cols-5">
          <div className="hidden lg:col-span-2 lg:block">
            <AboutPortrait />
          </div>
          <div className="lg:col-span-3">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-medium tracking-[0.2em] text-yellow uppercase">
                Sobre mim
              </span>
              <span
                data-mobile-about-chip
                className="rounded-full bg-lime px-3 py-1 font-display text-[11px] font-bold tracking-wide text-navy uppercase lg:hidden"
              >
                +10 anos experiência
              </span>
            </div>
            <h2 className="mt-3 mb-3 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
              Conteudo real, <span className="text-magenta">resultado real.</span>
            </h2>
            <p className="mb-5 font-display text-lg font-bold text-yellow md:text-xl">
              Por que me encaixo em vários nichos?
            </p>
            <p className="mb-4 max-w-[65ch] text-base leading-relaxed text-white/80 md:text-lg">
              Minha trajetória nunca coube numa linha reta. Acho que é isso que
              deixa o olhar tão amplo.
            </p>
            <p className="mb-4 max-w-[65ch] text-base leading-relaxed text-white/80 md:text-lg">
              Já passei por moda, arquitetura, design, publicidade, estética,
              empreendedorismo e conteúdo. Morei em Nova York. Também atuei do
              outro lado: quem contrata criador para marca.
            </p>
            <p className="mb-4 max-w-[65ch] text-base leading-relaxed text-white/80 md:text-lg">
              Sou mãe, esposa e puxo a casa. Essa vivência vira conteúdo que
              conversa com o mesmo público.
            </p>
            <p className="mb-6 max-w-[65ch] text-base leading-relaxed text-white/80 md:text-lg">
              Hoje transformo a bagagem em conteúdo, com olho no que o mundo está
              falando. Como já estive nos dois lados do briefing, sei fazer
              bonito e autêntico — e entregar o que a marca espera: prazo,
              briefing e roteiro a sério.
            </p>
            <div className="mb-6 flex flex-wrap gap-2">
              {NICHES.map((n, i) => (
                <span
                  key={n}
                  className={`rounded-full border-2 border-white/30 bg-white/10 px-3 py-1 text-xs font-medium tracking-wide uppercase ${
                    i % 2 ? "rotate-3" : "-rotate-2"
                  }`}
                >
                  {n}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <div className="rounded-2xl border border-white/20 bg-white/10 px-2 py-3 text-center sm:px-4 sm:py-4 sm:text-left">
                <p className="font-display text-2xl font-extrabold text-yellow sm:text-3xl">120+</p>
                <p className="text-[10px] leading-tight tracking-wider text-white/60 uppercase sm:text-xs">
                  Vídeos entregues
                </p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 px-2 py-3 text-center sm:px-4 sm:py-4 sm:text-left">
                <p className="font-display text-2xl font-extrabold text-lime sm:text-3xl">35+</p>
                <p className="text-[10px] leading-tight tracking-wider text-white/60 uppercase sm:text-xs">
                  Marcas
                </p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 px-2 py-3 text-center sm:px-4 sm:py-4 sm:text-left">
                <p className="font-display text-2xl font-extrabold text-magenta sm:text-3xl">98%</p>
                <p className="text-[10px] leading-tight tracking-wider text-white/60 uppercase sm:text-xs">
                  Satisfação
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
