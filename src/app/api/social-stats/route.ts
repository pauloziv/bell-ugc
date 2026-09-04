import { getSocialStats } from "@/lib/social-stats";

export const revalidate = 3600;

export async function GET() {
  const stats = await getSocialStats();
  return Response.json(stats, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
