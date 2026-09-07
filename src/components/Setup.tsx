import Image from "next/image";
import { ArrowUpRight, TreeEvergreen } from "@phosphor-icons/react/dist/ssr";

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
    img: "/images/setup/iphone-17-pro-max.webp",
    alt: "Desenho do iPhone 17 Pro Max Cosmic Orange",
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
    img: "/images/setup/ringlight.webp",
    alt: "Desenho do ringlight de luxo",
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
    img: "/images/setup/lark-m2.webp",
    alt: "Desenho do microfone Hollyland Lark M2",
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
    img: undefined,
    alt: "",
  },
];

function GearVisual({
  img,
  alt,
}: {
  img?: string;
  alt: string;
}) {
  if (img) {
    return (
      <div className="relative mx-auto h-44 w-full max-w-[20rem] overflow-hidden rounded-[1.6rem] border-2 border-navy/20 bg-offwhite md:h-52">
        <Image
          src={img}
          alt={alt}
          fill
          sizes="(max-width: 768px) 80vw, 22rem"
          className="object-contain"
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
          <h2 className="headline-1 mt-3 font-display font-extrabold">
            Kit sem cara de <span className="text-magenta">improviso.</span>
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
                <GearVisual img={item.img} alt={item.alt} />
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
              <h3 className="headline-card font-display text-[clamp(1.05rem,4.2vw,1.875rem)] font-extrabold tracking-tight">
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
