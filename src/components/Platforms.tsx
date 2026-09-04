import {
  InstagramLogo,
  TiktokLogo,
} from "@phosphor-icons/react/dist/ssr";
import { INSTAGRAM_URL, TIKTOK_URL } from "@/lib/site";
import { formatFollowerCount, getSocialStats } from "@/lib/social-stats";

export default async function Platforms() {
  const stats = await getSocialStats();

  const platforms = [
    {
      name: "Instagram",
      href: INSTAGRAM_URL,
      handle: stats.instagram.handle,
      count: formatFollowerCount(stats.instagram.followers),
      desc: "Reels dinamicos, stories interativos e feed com estetica cuidada para engajar sua audiencia.",
      icon: InstagramLogo,
      iconClass: "text-magenta",
      wrap: "bg-white rotate-[-1deg]",
      textClass: "text-muted",
    },
    {
      name: "TikTok",
      href: TIKTOK_URL,
      handle: stats.tiktok.handle,
      count: formatFollowerCount(stats.tiktok.followers),
      desc: "Conteudo nativo, tendencias e trends adaptadas para maximo alcance organico.",
      icon: TiktokLogo,
      iconClass: "text-yellow",
      wrap: "bg-navy text-white rotate-[1deg]",
      textClass: "text-white/70",
    },
  ] as const;

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {platforms.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal border-2 border-navy rounded-[2.5rem] p-8 hard-shadow hover:rotate-0 transition-transform duration-300 ${p.wrap}`}
            >
              <div className="flex items-center justify-between mb-6">
                <p.icon weight="fill" size={36} className={p.iconClass} />
                <span className="text-right">
                  <span className="block font-display font-extrabold text-3xl leading-none">
                    {p.count}
                  </span>
                  <span className="block mt-1 text-[11px] uppercase tracking-[0.18em]">
                    seguidores
                  </span>
                </span>
              </div>
              <h3 className="font-display font-bold text-xl mb-1">{p.name}</h3>
              <p className={`text-sm font-medium mb-3 ${p.textClass}`}>{p.handle}</p>
              <p className={`leading-relaxed ${p.textClass}`}>{p.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
