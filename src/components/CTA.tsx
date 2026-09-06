import {
  ChatCircle,
  EnvelopeSimple,
  FilePdf,
  InstagramLogo,
  TiktokLogo,
} from "@phosphor-icons/react/dist/ssr";
import MagneticButton from "@/components/ui/MagneticButton";
import BrandLogo from "@/components/ui/BrandLogo";
import {
  EMAIL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  MEDIA_KIT_HREF,
  TIKTOK_HANDLE,
  TIKTOK_URL,
  whatsappUrl,
} from "@/lib/site";

export default function CTA() {
  return (
    <>
      <section
        id="contato"
        className="relative py-24 md:py-36 px-4 md:px-8 overflow-hidden"
        style={{ background: "linear-gradient(135deg,#E91E8C 0%,#FFD23F 100%)" }}
      >
        <div className="absolute -top-10 -left-8 w-36 h-36 bg-white/20 blob blur-xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-navy/10 blob-slow blur-xl pointer-events-none" />
        <div className="max-w-[1000px] mx-auto text-center relative z-10 reveal">
          <h2 className="font-display font-extrabold text-5xl md:text-7xl tracking-tighter leading-[0.95] text-white mb-6">
            Vamos Criar
            <br />
            Juntos?
          </h2>
          <p className="text-lg text-white/90 max-w-[50ch] mx-auto mb-10 leading-relaxed">
            Sua marca merece conteudo que gera conexao de verdade. Me chama e
            vamos montar a proxima campanha.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <MagneticButton
              href={whatsappUrl(
                "Oi Bel! Vim pelo site belconteudos.com e quero criar juntos.",
              )}
              className="bg-navy text-white hover:scale-105 hover:-rotate-1 shadow-[0_8px_30px_-5px_rgba(26,26,46,0.4)]"
            >
              <ChatCircle weight="bold" size={20} />
              Chamar no WhatsApp
            </MagneticButton>
            <MagneticButton
              href={`mailto:${EMAIL}`}
              className="border-2 border-navy text-navy hover:bg-navy hover:text-white"
            >
              <EnvelopeSimple weight="bold" size={20} />
              Enviar E-mail
            </MagneticButton>
          </div>
          <div className="flex items-center justify-center gap-6">
            <a
              href={INSTAGRAM_URL}
              aria-label={`Instagram ${INSTAGRAM_HANDLE}`}
              className="w-14 h-14 bg-white/90 border-2 border-navy rounded-full flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors"
            >
              <InstagramLogo weight="fill" size={24} />
            </a>
            <a
              href={TIKTOK_URL}
              aria-label={`TikTok ${TIKTOK_HANDLE}`}
              className="w-14 h-14 bg-white/90 border-2 border-navy rounded-full flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors"
            >
              <TiktokLogo weight="fill" size={24} />
            </a>
          </div>
          <p className="mt-4 text-sm text-navy/80 font-medium">{INSTAGRAM_HANDLE}</p>
        </div>
      </section>
      <footer className="bg-navy px-4 py-8 text-center text-sm text-white/60 md:px-8">
        <div className="mb-4 flex justify-center">
          <BrandLogo onDark />
        </div>
        <p>© 2026 Bel UGC. Feito com criatividade e cafe. Todos os direitos reservados.</p>
        <a
          href={MEDIA_KIT_HREF}
          className="mt-3 inline-flex min-h-11 items-center gap-2 text-white/80 hover:text-white"
        >
          <FilePdf weight="bold" size={18} />
          Baixar media kit (PDF)
        </a>
      </footer>
    </>
  );
}
