const STEPS = [
  { num: "01", title: "Briefing", desc: "Entendo objetivos e voz da marca.", circle: "bg-magenta text-white" },
  { num: "02", title: "Roteiro", desc: "Crio um roteiro autentico e estrategico.", circle: "bg-yellow" },
  { num: "03", title: "Producao", desc: "Gravo com luz, som e estetica de qualidade.", circle: "bg-lime" },
  { num: "04", title: "Edicao", desc: "Corto e finalizo no ritmo das plataformas.", circle: "bg-navy text-white" },
  { num: "05", title: "Entrega", desc: "Envio os arquivos prontos para publicar.", circle: "bg-white text-magenta" },
];

export default function Process() {
  return (
    <section id="processo" className="py-20 md:py-32 px-4 md:px-8 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16 reveal">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-magenta">
            Como eu trabalho
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight mt-3">
            Processo <span className="text-magenta">Criativo</span>
          </h2>
        </div>
        <div className="relative">
          <svg
            className="hidden lg:block absolute top-10 left-0 w-full h-6"
            viewBox="0 0 1300 24"
            preserveAspectRatio="none"
          >
            <path
              d="M0,12 C130,24 260,0 390,12 C520,24 650,0 780,12 C910,24 1040,0 1170,12 C1230,18 1270,6 1300,12"
              stroke="#E91E8C"
              strokeWidth="3"
              fill="none"
              strokeDasharray="10 8"
            />
          </svg>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {STEPS.map((step, i) => (
              <div
                key={step.num}
                className="reveal flex flex-col items-center text-center"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div
                  className={`w-20 h-20 border-2 border-navy rounded-full flex items-center justify-center font-display font-extrabold text-2xl mb-4 ${step.circle}`}
                >
                  {step.num}
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
