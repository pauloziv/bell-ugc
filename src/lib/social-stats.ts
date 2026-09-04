import { unstable_cache } from "next/cache";
import { INSTAGRAM_HANDLE, TIKTOK_HANDLE } from "@/lib/site";

export type SocialNetwork = "instagram" | "tiktok";

export type SocialStat = {
  network: SocialNetwork;
  handle: string;
  followers: number | null;
  source: "graph" | "public" | "unavailable";
};

export type SocialStats = {
  instagram: SocialStat;
  tiktok: SocialStat;
  fetchedAt: string;
};

const INSTAGRAM_USER = INSTAGRAM_HANDLE.replace(/^@/, "");
const TIKTOK_USER = TIKTOK_HANDLE.replace(/^@/, "");

const BROWSER_UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36";

function timedFetch(url: string, init: RequestInit = {}, revalidate = 3600) {
  return fetch(url, {
    ...init,
    cache: "force-cache",
    next: { revalidate },
    signal: init.signal ?? AbortSignal.timeout(5000),
    headers: {
      "User-Agent": BROWSER_UA,
      Accept: "text/html,application/json",
      ...init.headers,
    },
  });
}

function parseCompactCount(raw: string | undefined | null): number | null {
  if (!raw) return null;
  const cleaned = raw.replace(/\u00a0/g, " ").trim();
  const match = cleaned.match(/([\d.,]+)\s*([kKmMbB])?/);
  if (!match) return null;
  const n = Number.parseFloat(match[1].replace(/\./g, "").replace(",", "."));
  if (!Number.isFinite(n)) return null;
  const suffix = match[2]?.toLowerCase();
  if (suffix === "k") return Math.round(n * 1_000);
  if (suffix === "m") return Math.round(n * 1_000_000);
  if (suffix === "b") return Math.round(n * 1_000_000_000);
  return Math.round(n);
}

export function formatFollowerCount(count: number | null): string {
  if (count == null) return "—";
  if (count >= 1_000_000) {
    const v = count / 1_000_000;
    return `${v >= 10 ? Math.round(v) : v.toFixed(1).replace(/\.0$/, "")}M`;
  }
  if (count >= 1_000) {
    const v = count / 1_000;
    return `${v >= 10 ? Math.round(v) : v.toFixed(1).replace(/\.0$/, "")}K`;
  }
  return new Intl.NumberFormat("pt-BR").format(count);
}

function decodeHtml(value: string): string {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

async function instagramFromGraph(): Promise<number | null> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID;
  if (!token || !userId) return null;
  try {
    const url = new URL(`https://graph.facebook.com/v21.0/${userId}`);
    url.searchParams.set("fields", "followers_count,username");
    url.searchParams.set("access_token", token);
    const res = await timedFetch(url.toString(), {
      headers: { Accept: "application/json" },
    });
    if (!res.ok) return null;
    const json = (await res.json()) as { followers_count?: number };
    return typeof json.followers_count === "number" ? json.followers_count : null;
  } catch {
    return null;
  }
}

async function instagramFromPublic(): Promise<number | null> {
  const endpoints = [
    `https://www.instagram.com/api/v1/users/web_profile_info/?username=${encodeURIComponent(INSTAGRAM_USER)}`,
    `https://i.instagram.com/api/v1/users/web_profile_info/?username=${encodeURIComponent(INSTAGRAM_USER)}`,
  ];

  for (const endpoint of endpoints) {
    try {
      const res = await timedFetch(endpoint, {
        headers: {
          Accept: "application/json",
          "X-IG-App-ID": "936619743392459",
        },
      });
      if (!res.ok) continue;
      const json = (await res.json()) as {
        data?: { user?: { edge_followed_by?: { count?: number }; follower_count?: number } };
      };
      const count =
        json.data?.user?.edge_followed_by?.count ?? json.data?.user?.follower_count;
      if (typeof count === "number") return count;
    } catch {
      /* try html */
    }
  }

  try {
    const res = await timedFetch(`https://www.instagram.com/${INSTAGRAM_USER}/`);
    if (!res.ok) return null;
    const html = await res.text();
    const og = html.match(
      /<meta[^>]+property=["']og:description["'][^>]+content=["']([^"']+)["']/i,
    ) ?? html.match(
      /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:description["']/i,
    );
    const desc = og?.[1] ? decodeHtml(og[1]) : "";
    const followers = desc.match(/([\d.,]+[kKmM]?)\s+Followers/i)
      ?? desc.match(/([\d.,]+[kKmM]?)\s+seguidores/i);
    if (followers) return parseCompactCount(followers[1]);

    const jsonCount = html.match(/"edge_followed_by"\s*:\s*\{\s*"count"\s*:\s*(\d+)/);
    if (jsonCount) return Number.parseInt(jsonCount[1], 10);
  } catch {
    return null;
  }
  return null;
}

async function tiktokFromOpenApi(): Promise<number | null> {
  const token = process.env.TIKTOK_ACCESS_TOKEN;
  if (!token) return null;
  try {
    const res = await timedFetch(
      "https://open.tiktokapis.com/v2/user/info/?fields=follower_count,display_name,username",
      { headers: { Authorization: `Bearer ${token}`, Accept: "application/json" } },
    );
    if (!res.ok) return null;
    const json = (await res.json()) as {
      data?: { user?: { follower_count?: number } };
    };
    const count = json.data?.user?.follower_count;
    return typeof count === "number" ? count : null;
  } catch {
    return null;
  }
}

function extractTikTokFollowers(html: string): number | null {
  const patterns = [
    /"followerCount"\s*:\s*(\d+)/,
    /"fans"\s*:\s*(\d+)/,
    /"follower_count"\s*:\s*(\d+)/,
  ];
  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match) return Number.parseInt(match[1], 10);
  }

  const og = html.match(
    /<meta[^>]+(?:name|property)=["'](?:og:description|description)["'][^>]+content=["']([^"']+)["']/i,
  );
  if (og?.[1]) {
    const desc = decodeHtml(og[1]);
    const m = desc.match(/([\d.,]+[kKmM]?)\s+Followers/i)
      ?? desc.match(/([\d.,]+[kKmM]?)\s+seguidores/i);
    if (m) return parseCompactCount(m[1]);
  }
  return null;
}

async function tiktokFromPublic(): Promise<number | null> {
  const uniqueIds = Array.from(
    new Set([TIKTOK_USER, TIKTOK_USER.replace(/\./g, ""), "belconteudos"]),
  );

  for (const id of uniqueIds) {
    try {
      const api = await timedFetch(
        `https://www.tiktok.com/api/user/detail/?uniqueId=${encodeURIComponent(id)}`,
        { headers: { Accept: "application/json" } },
      );
      if (api.ok) {
        const json = (await api.json()) as {
          userInfo?: { stats?: { followerCount?: number }; user?: { uniqueId?: string } };
        };
        const count = json.userInfo?.stats?.followerCount;
        if (typeof count === "number") return count;
      }
    } catch {
      /* html next */
    }

    try {
      const res = await timedFetch(`https://www.tiktok.com/@${id}`);
      if (!res.ok) continue;
      const html = await res.text();
      if (/couldn't find this account/i.test(html)) continue;
      const count = extractTikTokFollowers(html);
      if (count != null) return count;
    } catch {
      /* next id */
    }
  }
  return null;
}

async function loadSocialStats(): Promise<SocialStats> {
  const [igGraph, ttApi] = await Promise.all([instagramFromGraph(), tiktokFromOpenApi()]);
  const [igPublic, ttPublic] = await Promise.all([
    igGraph == null ? instagramFromPublic() : Promise.resolve(null),
    ttApi == null ? tiktokFromPublic() : Promise.resolve(null),
  ]);

  const igCount = igGraph ?? igPublic;
  const ttCount = ttApi ?? ttPublic;

  return {
    instagram: {
      network: "instagram",
      handle: INSTAGRAM_HANDLE,
      followers: igCount,
      source: igGraph != null ? "graph" : igCount != null ? "public" : "unavailable",
    },
    tiktok: {
      network: "tiktok",
      handle: TIKTOK_HANDLE,
      followers: ttCount,
      source: ttApi != null ? "graph" : ttCount != null ? "public" : "unavailable",
    },
    fetchedAt: new Date().toISOString(),
  };
}

export const getSocialStats = unstable_cache(loadSocialStats, ["social-stats"], {
  revalidate: 3600,
  tags: ["social-stats"],
});
