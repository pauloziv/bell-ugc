import {
  ChatCircle,
  InstagramLogo,
  TiktokLogo,
} from "@phosphor-icons/react/dist/ssr";
import MagneticButton from "@/components/ui/MagneticButton";
import BrandLogo from "@/components/ui/BrandLogo";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  TIKTOK_URL,
  whatsappUrl,
} from "@/lib/site";

export default function KitCta() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden px-4 py-24 scroll-mt-28 md:px-8 md:py-36"
      style={{ background: "linear-gradient(135deg,#E91E8C 0%,#FFD23F 100%)" }}
    >
      <div className="pointer-events-none absolute -top-10 -left-8 h-40 w-40 bg-white/25 blob blur-xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-44 w-44 bg-navy/10 blob-slow blur-xl" />
      <div className="relative z-10 mx-auto max-w-[900px] text-center">
        <div className="mb-8 flex justify-center">
          <BrandLogo onDark />
        </div>
        <h2 className="headline-1-lg font-display font-extrabold text-white">
          Vamos Criar Juntos?
        </h2>
        <p className="mx-auto mt-6 max-w-[46ch] text-lg text-white/92">
          Sua marca merece conteúdo que gera conexão de verdade. Me chama e
          vamos montar a próxima campanha.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <MagneticButton
            href={whatsappUrl(
              "Oi Bel! Vi o media kit em belconteudos.com/media-kit e quero criar juntos.",
            )}
            className="bg-navy text-white shadow-[0_8px_30px_-5px_rgba(26,26,46,0.4)] hover:scale-105 hover:-rotate-1"
          >
            <ChatCircle weight="bold" size={20} />
            WhatsApp +55 11 96382-6929
          </MagneticButton>
          <MagneticButton
            href={INSTAGRAM_URL}
            className="border-2 border-navy text-navy hover:bg-navy hover:text-white"
          >
            {INSTAGRAM_HANDLE}
          </MagneticButton>
        </div>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href={INSTAGRAM_URL}
            aria-label={`Instagram ${INSTAGRAM_HANDLE}`}
            className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-navy bg-white/90 text-navy hover:bg-navy hover:text-white"
          >
            <InstagramLogo weight="fill" size={24} />
          </a>
          <a
            href={TIKTOK_URL}
            aria-label="TikTok @bel.conteudos"
            className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-navy bg-white/90 text-navy hover:bg-navy hover:text-white"
          >
            <TiktokLogo weight="fill" size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
