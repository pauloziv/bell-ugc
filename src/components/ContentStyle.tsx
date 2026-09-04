"use client";

import SocialCards from "@/components/ui/card-fan-carousel";

const VIDEO_BUCKET =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample";

const REEL_CARDS = [
  {
    imgUrl: "https://picsum.photos/seed/ugc-unboxing/540/960",
    alt: "Unboxing de produto",
    label: "Unboxing",
    views: "47.2K views",
    videoUrl: `${VIDEO_BUCKET}/ForBiggerBlazes.mp4`,
  },
  {
    imgUrl: "https://picsum.photos/seed/ugc-reviews/540/960",
    alt: "Review de skincare",
    label: "Reviews",
    views: "81.4K views",
    videoUrl: `${VIDEO_BUCKET}/ForBiggerEscapes.mp4`,
  },
  {
    imgUrl: "https://picsum.photos/seed/ugc-tutoriais/540/960",
    alt: "Tutorial de aplicacao",
    label: "Tutoriais",
    views: "29.8K views",
    videoUrl: `${VIDEO_BUCKET}/ForBiggerFun.mp4`,
  },
  {
    imgUrl: "https://picsum.photos/seed/ugc-lifestyle/540/960",
    alt: "Lifestyle cotidiano",
    label: "Lifestyle",
    views: "63.1K views",
    videoUrl: `${VIDEO_BUCKET}/ForBiggerJoyrides.mp4`,
  },
  {
    imgUrl: "https://picsum.photos/seed/ugc-antes-depois/540/960",
    alt: "Antes e depois",
    label: "Antes e Depois",
    views: "112K views",
    videoUrl: `${VIDEO_BUCKET}/ForBiggerMeltdowns.mp4`,
  },
  {
    imgUrl: "https://picsum.photos/seed/ugc-tryon/540/960",
    alt: "Try-on de look",
    label: "Try-on",
    views: "38.6K views",
    videoUrl: `${VIDEO_BUCKET}/SubaruOutbackOnStreetAndDirt.mp4`,
  },
  {
    imgUrl: "https://picsum.photos/seed/ugc-grwm/540/960",
    alt: "Get ready with me",
    label: "GRWM",
    views: "54.9K views",
    videoUrl: `${VIDEO_BUCKET}/TearsOfSteel.mp4`,
  },
  {
    imgUrl: "https://picsum.photos/seed/ugc-hooks/540/960",
    alt: "Hook de 3 segundos",
    label: "Hooks",
    views: "96.3K views",
    videoUrl: `${VIDEO_BUCKET}/Sintel.mp4`,
  },
  {
    imgUrl: "https://picsum.photos/seed/ugc-ads/540/960",
    alt: "Peca para ads",
    label: "Ads UGC",
    views: "22.4K views",
    videoUrl: `${VIDEO_BUCKET}/ElephantsDream.mp4`,
  },
  {
    imgUrl: "https://picsum.photos/seed/ugc-bts/540/960",
    alt: "Bastidores de gravacao",
    label: "Bastidores",
    views: "18.7K views",
    videoUrl: `${VIDEO_BUCKET}/BigBuckBunny.mp4`,
  },
];

export default function ContentStyle() {
  return (
    <section
      id="estilo"
      className="relative overflow-x-hidden bg-offwhite px-4 py-10 md:px-8 md:py-24 scroll-mt-24"
    >
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow/40 blob blur-xl pointer-events-none" />
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="mb-8 reveal">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-magenta">
            Portfolio de conteudo
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight mt-3">
            Meu Estilo de <span className="text-magenta">Conteudo</span>
          </h2>
          <p className="text-muted mt-4 max-w-[50ch]">
            Players verticais no formato Reels e TikTok. Clica no play pra abrir
            grande e assistir.
          </p>
        </div>
      </div>
      <SocialCards cards={REEL_CARDS} />
    </section>
  );
}
