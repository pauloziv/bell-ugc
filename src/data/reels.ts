export type ReelCard = {
  slug: string;
  imgUrl: string;
  alt: string;
  label: string;
  views: string;
  videoUrl: string;
};

const SAMPLE_BUCKET =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample";

/** Public CDN origin, no trailing slash. Example: https://media.belconteudos.com */
const REELS_CDN = (process.env.NEXT_PUBLIC_REELS_CDN ?? "").replace(/\/$/, "");

function videoUrl(slug: string, sampleFile: string, youtubeUrl?: string) {
  if (youtubeUrl) return youtubeUrl;
  if (REELS_CDN) return `${REELS_CDN}/${slug}.mp4`;
  return `${SAMPLE_BUCKET}/${sampleFile}`;
}

function picsumPoster(seed: string) {
  return `https://picsum.photos/seed/${seed}/540/960`;
}

/**
 * Fan cards. Prefer unlisted YouTube / Shorts URLs (iframe only on play).
 * Optional: mp4 on R2/Blob via NEXT_PUBLIC_REELS_CDN. Never commit mp4s.
 * Posters: swap imgUrl to /images/reels/{slug}.webp when ready.
 */
export const REEL_CARDS: ReelCard[] = [
  {
    slug: "unboxing",
    imgUrl: picsumPoster("ugc-unboxing"),
    alt: "Unboxing de produto",
    label: "Unboxing",
    views: "47.2K views",
    videoUrl: videoUrl("unboxing", "ForBiggerBlazes.mp4"),
  },
  {
    slug: "reviews",
    imgUrl: picsumPoster("ugc-reviews"),
    alt: "Review de skincare",
    label: "Reviews",
    views: "81.4K views",
    videoUrl: videoUrl("reviews", "ForBiggerEscapes.mp4"),
  },
  {
    slug: "tutoriais",
    imgUrl: picsumPoster("ugc-tutoriais"),
    alt: "Tutorial de aplicacao",
    label: "Tutoriais",
    views: "29.8K views",
    videoUrl: videoUrl("tutoriais", "ForBiggerFun.mp4"),
  },
  {
    slug: "lifestyle",
    imgUrl: picsumPoster("ugc-lifestyle"),
    alt: "Lifestyle cotidiano",
    label: "Lifestyle",
    views: "63.1K views",
    videoUrl: videoUrl("lifestyle", "ForBiggerJoyrides.mp4"),
  },
  {
    slug: "antes-depois",
    imgUrl: picsumPoster("ugc-antes-depois"),
    alt: "Antes e depois",
    label: "Antes e Depois",
    views: "112K views",
    videoUrl: videoUrl("antes-depois", "ForBiggerMeltdowns.mp4"),
  },
  {
    slug: "tryon",
    imgUrl: picsumPoster("ugc-tryon"),
    alt: "Try-on de look",
    label: "Try-on",
    views: "38.6K views",
    videoUrl: videoUrl("tryon", "SubaruOutbackOnStreetAndDirt.mp4"),
  },
  {
    slug: "grwm",
    imgUrl: picsumPoster("ugc-grwm"),
    alt: "Get ready with me",
    label: "GRWM",
    views: "54.9K views",
    videoUrl: videoUrl("grwm", "TearsOfSteel.mp4"),
  },
  {
    slug: "hooks",
    imgUrl: picsumPoster("ugc-hooks"),
    alt: "Hook de 3 segundos",
    label: "Hooks",
    views: "96.3K views",
    videoUrl: videoUrl("hooks", "Sintel.mp4"),
  },
  {
    slug: "ads",
    imgUrl: picsumPoster("ugc-ads"),
    alt: "Peca para ads",
    label: "Ads UGC",
    views: "22.4K views",
    videoUrl: videoUrl("ads", "ElephantsDream.mp4"),
  },
  {
    slug: "bts",
    imgUrl: picsumPoster("ugc-bts"),
    alt: "Bastidores de gravacao",
    label: "Bastidores",
    views: "18.7K views",
    videoUrl: videoUrl("bts", "BigBuckBunny.mp4"),
  },
];
