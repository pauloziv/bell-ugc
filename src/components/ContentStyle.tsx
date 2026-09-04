import SocialCards from "@/components/ui/card-fan-carousel";
import { REEL_CARDS } from "@/data/reels";

export default function ContentStyle() {
  return (
    <section
      id="estilo"
      className="relative overflow-x-clip bg-offwhite px-4 py-10 md:px-8 md:py-24 scroll-mt-24"
    >
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow/40 blob blur-xl pointer-events-none" />
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="mb-8 reveal">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-magenta">
            Portfolio de conteudo
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight mt-3">
            Meu Estilo de <span className="text-magenta">Conteudo</span>
          </h2>
          <p className="text-muted mt-4 max-w-[50ch]">
            Players verticais no formato Reels e TikTok. Clica no play pra abrir
            grande e assistir.
          </p>
        </div>
      </div>
      <SocialCards cards={REEL_CARDS} />
    </section>
  );
}
