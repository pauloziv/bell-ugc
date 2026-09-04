import { Check } from "@phosphor-icons/react/dist/ssr";
import TiltCard from "@/components/ui/TiltCard";

const PLANS = [
  {
    name: "Essencial",
    blurb: "Para comecar com o pe direito",
    price: "R$ 690",
    period: "/pacote",
    features: ["2 videos UGC", "1 revisao", "Entrega em 5 dias"],
    wrap: "bg-white rotate-[-2deg]",
    featured: false,
    delay: undefined as string | undefined,
  },
  {
    name: "Profissional",
    blurb: "O favorito das marcas em crescimento",
    price: "R$ 1.290",
    period: "/pacote",
    features: ["5 videos UGC", "2 revisoes", "Direitos de uso ads", "Entrega em 7 dias"],
    wrap: "bg-magenta text-white md:scale-110 relative z-10",
    featured: true,
    delay: ".1s",
  },
  {
    name: "Premium",
    blurb: "Parceria completa e continua",
    price: "R$ 2.490",
    period: "/mes",
    features: [
      "10 videos UGC/mes",
      "Revisoes ilimitadas",
      "Estrategia de conteudo",
      "Prioridade na agenda",
    ],
    wrap: "bg-white rotate-[2deg]",
    featured: false,
    delay: ".2s",
  },
];

export default function Pricing() {
  return (
    <section
      id="pacotes"
      className="py-20 md:py-32 px-4 md:px-8 bg-navy relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-magenta/20 blob blur-3xl pointer-events-none" />
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="mb-16 text-center reveal">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-yellow">
            Investimento
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight mt-3 text-white">
            Pacotes
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
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
                  <li key={f} className="flex items-center gap-2">
                    <Check
                      weight="bold"
                      size={16}
                      className={plan.featured ? "text-yellow" : "text-magenta"}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contato"
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
