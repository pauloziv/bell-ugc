import type { Metadata, Viewport } from "next";
import "./globals.css";
import RevealObserver from "@/components/ui/RevealObserver";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Creator Bel | Criadora de Conteúdo UGC",
    template: "%s | Creator Bel",
  },
  description:
    "Portfólio de Creator Bel — criadora de conteúdo UGC. Reels, TikTok e ads autênticos que conectam marcas com pessoas reais.",
  keywords: [
    "UGC",
    "criadora de conteúdo",
    "Reels",
    "TikTok",
    "Instagram",
    "conteúdo para marcas",
    "Creator Bel",
  ],
  authors: [{ name: "Creator Bel" }],
  creator: "Creator Bel",
  openGraph: {
    title: "Creator Bel | Criadora de Conteúdo UGC",
    description:
      "Conteúdo autêntico que conecta marcas com pessoas reais.",
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Creator Bel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creator Bel | Criadora de Conteúdo UGC",
    description:
      "Conteúdo autêntico que conecta marcas com pessoas reais.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport: Viewport = {
  themeColor: "#E91E8C",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Creator Bel",
  jobTitle: "Criadora de Conteúdo UGC",
  url: SITE_URL,
  description:
    "Criadora de conteúdo UGC para Instagram e TikTok.",
  sameAs: [
    "https://instagram.com/bel.conteudos",
    "https://tiktok.com/@bel.conteudos",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="font-body bg-offwhite text-navy">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <RevealObserver />
        {children}
      </body>
    </html>
  );
}
