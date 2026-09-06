import type { Metadata } from "next";
import MediaKit from "@/components/media-kit/MediaKit";

export const metadata: Metadata = {
  title: "Media kit",
  description:
    "Media kit de Creator Bel — UGC com movimento. Sobre, conceito, processo e cases.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/media-kit" },
};

export default function MediaKitPage() {
  return <MediaKit />;
}
