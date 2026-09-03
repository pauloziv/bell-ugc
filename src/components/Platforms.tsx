import {
  InstagramLogo,
  TiktokLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";

const PLATFORMS = [
  {
    name: "Instagram",
    count: "45K",
    desc: "Reels dinamicos, stories interativos e feed com estetica cuidada para engajar sua audiencia.",
    icon: InstagramLogo,
    iconClass: "text-magenta",
    wrap: "bg-white rotate-[-1deg]",
    delay: undefined as string | undefined,
    countClass: "",
    textClass: "text-muted",
  },
  {
    name: "TikTok",
    count: "120K",
    desc: "Conteudo nativo, tendencias e trends adaptadas para maximo alcance organico.",
    icon: TiktokLogo,
    iconClass: "text-yellow",
    wrap: "bg-navy text-white rotate-[1deg]",
    delay: ".1s",
    countClass: "",
    textClass: "text-white/70",
  },
  {
    name: "YouTube",
    count: "18K",
    desc: "Shorts e reviews aprofundados que constroem confianca de longo prazo com a marca.",
    icon: YoutubeLogo,
    iconClass: "text-lime",
    wrap: "bg-white rotate-[-1deg]",
    delay: ".2s",
    countClass: "",
    textClass: "text-muted",
  },
];

export default function Platforms() {
  return (
    <section id="plataformas" className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-14 reveal">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-magenta">
            Onde eu crio
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight mt-3">
            Plataformas <span className="text-magenta">Foco</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLATFORMS.map((p) => (
            <div
              key={p.name}
              className={`reveal border-2 border-navy rounded-[2.5rem] p-8 hard-shadow hover:rotate-0 transition-transform duration-300 ${p.wrap}`}
              style={p.delay ? { animationDelay: p.delay } : undefined}
            >
              <div className="flex items-center justify-between mb-6">
                <p.icon weight="fill" size={36} className={p.iconClass} />
                <span className="font-display font-extrabold text-3xl">{p.count}</span>
              </div>
              <h3 className="font-display font-bold text-xl mb-2">{p.name}</h3>
              <p className={`leading-relaxed ${p.textClass}`}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
