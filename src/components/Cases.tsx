const CASES = [
  {
    name: "Natura",
    desc: "Serie de reels para lancamento de linha de skincare, resultado: +40% engajamento.",
    className: "md:col-span-2 bg-white min-h-[220px]",
    nameClass: "text-3xl",
    textClass: "text-muted",
    delay: undefined as string | undefined,
  },
  {
    name: "Boticario",
    desc: "Unboxing e reviews de perfumaria sazonal.",
    className: "bg-yellow min-h-[220px]",
    nameClass: "text-2xl",
    textClass: "text-navy/70",
    delay: ".05s",
  },
  {
    name: "Farm",
    desc: "Lookbook lifestyle para colecao de verao.",
    className: "bg-white min-h-[220px]",
    nameClass: "text-2xl",
    textClass: "text-muted",
    delay: ".1s",
  },
  {
    name: "Havaianas",
    desc: "Campanha de verao com conteudo praiano autentico.",
    className: "bg-white min-h-[220px]",
    nameClass: "text-2xl",
    textClass: "text-muted",
    delay: ".15s",
  },
  {
    name: "Granado",
    desc: "Antes e depois de rotina de cuidados, alta taxa de conversao em link na bio.",
    className: "md:col-span-2 bg-navy text-white min-h-[220px]",
    nameClass: "text-3xl text-lime",
    textClass: "text-white/70",
    delay: ".2s",
  },
];

export default function Cases() {
  return (
    <section
      id="cases"
      className="py-20 md:py-32 px-4 md:px-8 bg-[#FFF6F9] relative overflow-hidden"
    >
      <div className="absolute top-10 -right-24 w-80 h-80 bg-lime/30 blob-slow blur-2xl pointer-events-none" />
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="mb-14 reveal">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-magenta">
            Quem confia em mim
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight mt-3">
            Cases & <span className="text-magenta">Marcas</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {CASES.map((item) => (
            <div
              key={item.name}
              className={`reveal border-2 border-navy rounded-[2.5rem] p-8 card-shadow flex flex-col justify-between ${item.className}`}
              style={item.delay ? { animationDelay: item.delay } : undefined}
            >
              <span className={`font-display font-extrabold ${item.nameClass}`}>
                {item.name}
              </span>
              <p className={`mt-4 ${item.textClass}`}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
