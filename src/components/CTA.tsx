"use client";

import ScrollReveal from "./ui/ScrollReveal";
import MagneticButton from "./ui/MagneticButton";
import BlobBackground from "./ui/BlobBackground";
import { ArrowRight, InstagramLogo, EnvelopeSimple, WhatsappLogo } from "@phosphor-icons/react";

export default function CTA() {
  return (
    <section
      id="contato"
      className="relative py-28 md:py-40 bg-gradient-to-br from-magenta via-magenta to-[#c4167a] text-white overflow-hidden"
    >
      <BlobBackground className="opacity-30" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8 text-center">
        <ScrollReveal>
          <span className="inline-block rounded-full bg-white/15 border border-white/15 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] font-body font-medium text-white/70 mb-8">
            Bora?
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display font-black text-5xl md:text-7xl xl:text-8xl tracking-tighter leading-[0.9] mx-auto max-w-[14ch] mb-6">
            Vamos criar juntos?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-[50ch] mx-auto mb-12">
            Me conta sobre sua marca e o que voce precisa. Vou adorar entender como
            posso ajudar a contar a sua historia.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <MagneticButton
              href="mailto:bell@ugc.com.br"
              className="bg-white text-magenta shadow-[0_8px_30px_-5px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_40px_-5px_rgba(0,0,0,0.3)]"
            >
              <EnvelopeSimple weight="bold" size={20} />
              Me manda um email
              <ArrowRight weight="bold" size={18} />
            </MagneticButton>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="flex justify-center gap-6">
            {[
              { icon: InstagramLogo, label: "@bell.ugc", href: "#" },
              { icon: WhatsappLogo, label: "WhatsApp", href: "#" },
              { icon: EnvelopeSimple, label: "Email", href: "mailto:bell@ugc.com.br" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 text-sm"
              >
                <s.icon weight="bold" size={20} />
                {s.label}
              </a>
            ))}
          </div>
        </ScrollReveal>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/10 text-white/30 text-sm">
          Bell UGC &copy; 2026. Feito com muito conteudo e cafe.
        </div>
      </div>
    </section>
  );
}
