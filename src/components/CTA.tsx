import {
  ChatCircle,
  EnvelopeSimple,
  InstagramLogo,
  TiktokLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";
import MagneticButton from "@/components/ui/MagneticButton";

export default function CTA() {
  return (
    <>
      <section
        id="contato"
        className="relative py-24 md:py-36 px-4 md:px-8 overflow-hidden"
        style={{ background: "linear-gradient(135deg,#E91E8C 0%,#FFD23F 100%)" }}
      >
        <div className="absolute -top-20 -left-16 w-72 h-72 bg-white/20 blob blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy/10 blob-slow blur-2xl pointer-events-none" />
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
              href="https://wa.me/5511999999999"
              className="bg-navy text-white hover:scale-105 hover:-rotate-1 shadow-[0_8px_30px_-5px_rgba(26,26,46,0.4)]"
            >
              <ChatCircle weight="bold" size={20} />
              Chamar no WhatsApp
            </MagneticButton>
            <MagneticButton
              href="mailto:contato@bellugc.com.br"
              className="border-2 border-navy text-navy hover:bg-navy hover:text-white"
            >
              <EnvelopeSimple weight="bold" size={20} />
              Enviar E-mail
            </MagneticButton>
          </div>
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://instagram.com/bellugc"
              aria-label="Instagram"
              className="w-14 h-14 bg-white/90 border-2 border-navy rounded-full flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors"
            >
              <InstagramLogo weight="fill" size={24} />
            </a>
            <a
              href="https://tiktok.com/@bellugc"
              aria-label="TikTok"
              className="w-14 h-14 bg-white/90 border-2 border-navy rounded-full flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors"
            >
              <TiktokLogo weight="fill" size={24} />
            </a>
            <a
              href="https://youtube.com/@bellugc"
              aria-label="YouTube"
              className="w-14 h-14 bg-white/90 border-2 border-navy rounded-full flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors"
            >
              <YoutubeLogo weight="fill" size={24} />
            </a>
          </div>
        </div>
      </section>
      <footer className="bg-navy text-white/60 py-8 px-4 md:px-8 text-center text-sm">
        <p>© 2026 Bell UGC. Feito com criatividade e cafe. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}
