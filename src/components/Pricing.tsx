import { Check } from "@phosphor-icons/react/dist/ssr";
import TiltCard from "@/components/ui/TiltCard";
import { whatsappUrl } from "@/lib/site";

const PLANS = [
  {
    name: "Experimentar",
    blurb: "Um vídeo pra testar o fit",
    price: "R$ 200",
    period: "/vídeo",
    features: [
      "1 vídeo UGC",
      "Revisão",
      "Direitos de uso em ads por 3 meses",
      "Entrega em até 5 dias úteis",
    ],
    wrap: "bg-white rotate-[-2deg]",
    featured: false,
    delay: undefined as string | undefined,
    wa: "Oi Bel! Quero o pacote Experimentar (R$ 200/vídeo): 1 vídeo UGC, revisão, direitos de uso em ads por 3 meses, entrega em até 5 dias úteis. Vim pelo site belconteudos.com",
  },
  {
    name: "Professional",
    blurb: "Três vídeos com roteiro e prazo combinado",
    price: "R$ 500",
    period: "/pacote",
    features: [
      "3 vídeos UGC",
      "Roteiro",
      "1 revisão",
      "Direito de uso em ads por 6 meses",
      "Entrega em tempo personalizado",
    ],
    wrap: "bg-magenta text-white md:scale-[1.04] relative z-10",
    featured: true,
    delay: ".1s",
    wa: "Oi Bel! Quero o pacote Professional (R$ 500): 3 vídeos + roteiro + 1 revisão, direito de uso em ads por 6 meses, entrega em tempo personalizado. Vim pelo site belconteudos.com",
  },
];

export default function Pricing() {
  return (
    <section
      id="pacotes"
      className="relative overflow-hidden bg-navy px-4 py-10 md:px-8 md:py-24"
    >
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-magenta/20 blob blur-xl pointer-events-none" />
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="reveal mb-8 text-center md:mb-12">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-yellow">
            Investimento
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight mt-3 text-white">
            Pacotes
          </h2>
        </div>
        <div className="mx-auto grid max-w-[920px] grid-cols-1 items-stretch gap-8 pt-6 md:grid-cols-2">
          {PLANS.map((plan) => (
            <TiltCard key={plan.name}>
              <div
                className={`reveal border-2 border-navy rounded-[2.5rem] p-8 md:p-10 hard-shadow hover:rotate-0 ${plan.wrap}`}
                style={plan.delay ? { animationDelay: plan.delay } : undefined}
              >
              {plan.featured ? (
                <span className="absolute -top-4 right-8 bg-yellow text-navy text-xs font-medium uppercase tracking-wider px-4 py-1.5 rounded-full rotate-3">
                  Mais popular
                </span>
              ) : null}
              <h3 className="font-display font-bold text-2xl mb-1">{plan.name}</h3>
              <p className={plan.featured ? "text-white/80 mb-6" : "text-muted mb-6"}>
                {plan.blurb}
              </p>
              <p className="font-display font-extrabold text-4xl mb-6">
                {plan.price}
                <span
                  className={`text-base font-normal ${plan.featured ? "text-white/80" : "text-muted"}`}
                >
                  {plan.period}
                </span>
              </p>
              <ul className="space-y-3 mb-8 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check
                      weight="bold"
                      size={16}
                      className={`mt-0.5 shrink-0 ${plan.featured ? "text-yellow" : "text-magenta"}`}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappUrl(plan.wa)}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  plan.featured
                    ? "block text-center bg-white text-magenta rounded-full py-3 font-medium hover:bg-yellow hover:text-navy transition-colors"
                    : "block text-center border-2 border-navy rounded-full py-3 font-medium hover:bg-navy hover:text-white transition-colors"
                }
              >
                Escolher
              </a>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
