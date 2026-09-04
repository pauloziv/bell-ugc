const YT_ID = /^[\w-]{11}$/;

const YT_HOSTS = new Set([
  "youtube.com",
  "m.youtube.com",
  "music.youtube.com",
  "youtube-nocookie.com",
  "youtu.be",
]);

export function parseYouTubeId(url: string): string | null {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");
    if (!YT_HOSTS.has(host)) return null;

    if (host === "youtu.be") {
      const id = parsed.pathname.split("/").filter(Boolean)[0] ?? "";
      return YT_ID.test(id) ? id : null;
    }

    const fromQuery = parsed.searchParams.get("v");
    if (fromQuery && YT_ID.test(fromQuery)) return fromQuery;

    const parts = parsed.pathname.split("/").filter(Boolean);
    const kind = parts.findIndex((part) =>
      part === "shorts" || part === "embed" || part === "live" || part === "v",
    );
    const candidate = kind >= 0 ? (parts[kind + 1] ?? "") : "";
    return YT_ID.test(candidate) ? candidate : null;
  } catch {
    return null;
  }
}

export function youtubeEmbedSrc(id: string) {
  const query = new URLSearchParams({
    autoplay: "1",
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
    iv_load_policy: "3",
  });
  return `https://www.youtube-nocookie.com/embed/${id}?${query.toString()}`;
}
