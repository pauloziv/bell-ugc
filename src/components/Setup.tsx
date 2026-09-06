import {
  ArrowUpRight,
  DeviceMobileCamera,
  MicrophoneStage,
  TreeEvergreen,
} from "@phosphor-icons/react/dist/ssr";

const GEAR = [
  {
    id: "iphone",
    name: "iPhone 17 Pro Max",
    chip: "4K",
    tag: "o cérebro do set",
    desc: "A câmera que a campanha pede. Cor, detalhe e estabilidade — no bolso, não no aluguel de studio.",
    wrap: "bg-navy text-white rotate-[-2deg] md:col-span-7",
    onDark: true,
    chipClass: "bg-yellow text-navy",
    tagClass: "bg-magenta text-white",
    visual: "phone" as const,
  },
  {
    id: "ring",
    name: "Ringlight de luxo",
    chip: "glow",
    tag: "luz de capa",
    desc: "Pele com glow, produto nítido, sombra no lugar certo. Zero cara de lâmpada de teto.",
    wrap: "bg-yellow rotate-[2.5deg] md:col-span-5",
    onDark: false,
    chipClass: "bg-navy text-white",
    tagClass: "bg-white text-navy",
    visual: "ring" as const,
  },
  {
    id: "lark",
    name: "Hollyland Lark M2",
    chip: "wireless",
    tag: "áudio limpo",
    desc: "Lapela de verdade. Voz nítida na rua, na pia ou no vento — o que o algoritmo escuta primeiro.",
    wrap: "bg-magenta text-white rotate-[-1.5deg] md:col-span-5",
    onDark: true,
    chipClass: "bg-white text-navy",
    tagClass: "bg-navy text-white",
    visual: "mic" as const,
  },
  {
    id: "green",
    name: "Condomínio com área verde",
    chip: "set natural",
    tag: "luz de graça",
    desc: "Fundo de verdade. Sol, verde e espaço — não é quarto com lençol fingindo cenário.",
    wrap: "bg-lime rotate-[1.5deg] md:col-span-7",
    onDark: false,
    chipClass: "bg-navy text-white",
    tagClass: "bg-white text-navy",
    visual: "park" as const,
  },
];

function GearVisual({ kind }: { kind: (typeof GEAR)[number]["visual"] }) {
  if (kind === "phone") {
    return (
      <div
        className="relative mx-auto h-36 w-[4.75rem] rounded-[1.35rem] border-[3px] border-white/90 bg-navy p-[5px] card-shadow"
        aria-hidden="true"
      >
        <div className="relative h-full overflow-hidden rounded-[1.05rem] bg-gradient-to-b from-magenta to-yellow">
          <div className="mx-auto mt-2 h-1.5 w-8 rounded-full bg-navy/50" />
          <DeviceMobileCamera
            weight="bold"
            size={22}
            className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white"
          />
        </div>
      </div>
    );
  }

  if (kind === "ring") {
    return (
      <div className="relative mx-auto h-28 w-28" aria-hidden="true">
        <div className="absolute inset-0 rounded-full border-[11px] border-white card-shadow" />
        <div className="absolute inset-[11px] rounded-full border-[3px] border-navy/25" />
        <div className="absolute inset-[28px] rounded-full bg-yellow" />
        <div className="absolute inset-[36px] rounded-full bg-navy/10" />
      </div>
    );
  }

  if (kind === "mic") {
    return (
      <div className="flex items-end justify-center gap-1.5 pt-4" aria-hidden="true">
        {[10, 18, 28, 16, 24, 12].map((h, i) => (
          <span
            key={i}
            className="w-2 rounded-full bg-white/90"
            style={{ height: `${h}px` }}
          />
        ))}
        <MicrophoneStage
          weight="bold"
          size={28}
          className="mb-1 ml-2 text-yellow"
        />
      </div>
    );
  }

  return (
    <div className="relative mx-auto h-28 w-36" aria-hidden="true">
      <div className="absolute bottom-0 left-1/2 h-16 w-32 -translate-x-1/2 bg-navy/10 blob" />
      <TreeEvergreen
        weight="fill"
        size={72}
        className="relative mx-auto text-navy"
      />
    </div>
  );
}

export default function Setup() {
  return (
    <section
      id="setup"
      className="relative overflow-hidden px-4 py-10 md:px-8 md:py-24"
    >
      <div className="pointer-events-none absolute -top-10 -left-16 h-48 w-48 bg-yellow/50 blob blur-xl" />
      <div className="pointer-events-none absolute right-0 bottom-8 h-40 w-40 bg-lime/40 blob-slow blur-xl" />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <div className="reveal mb-8 md:mb-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-medium tracking-[0.2em] text-magenta uppercase">
              Backstage
            </span>
            <span className="rotate-[-6deg] rounded-full border-2 border-navy bg-yellow px-3 py-1 font-display text-[11px] font-bold tracking-wide text-navy uppercase">
              VIP set
            </span>
          </div>
          <h2 className="mt-3 max-w-[18ch] font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Kit de última geração.{" "}
            <span className="text-magenta">Sem cara de improviso.</span>
          </h2>
          <p className="mt-4 max-w-[54ch] text-base leading-relaxed text-muted md:text-lg">
            Imagem, luz, áudio e cenário no nível de campanha. A marca não aluga
            studio — e o vídeo chega com cara de campanha mesmo assim.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
          {GEAR.map((item) => (
            <article
              key={item.id}
              className={`reveal relative overflow-hidden rounded-[2.5rem] border-2 border-navy p-7 hard-shadow transition-transform duration-300 hover:rotate-0 md:p-9 ${item.wrap}`}
            >
              <div className="mb-6">
                <GearVisual kind={item.visual} />
              </div>
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span
                  className={`inline-block rounded-full px-3 py-1 text-[11px] font-medium tracking-[0.18em] uppercase ${item.chipClass}`}
                >
                  {item.chip}
                </span>
                <span
                  className={`rotate-[6deg] rounded-full border-2 border-navy px-3 py-1 font-display text-[11px] font-bold uppercase ${item.tagClass}`}
                >
                  {item.tag}
                </span>
              </div>
              <h3 className="font-display text-2xl font-extrabold tracking-tight md:text-3xl">
                {item.name}
              </h3>
              <p
                className={`mt-3 max-w-[36ch] text-sm leading-relaxed md:text-base ${
                  item.onDark ? "text-white/80" : "text-navy/75"
                }`}
              >
                {item.desc}
              </p>
            </article>
          ))}
        </div>

        <p className="reveal mt-10 text-center">
          <a
            href="#pacotes"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-navy bg-white px-5 py-2.5 font-display text-sm font-bold hover:bg-navy hover:text-white"
          >
            Agora os valores
            <ArrowUpRight weight="bold" size={18} />
          </a>
        </p>
      </div>
    </section>
  );
}
