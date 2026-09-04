import type { Metadata, Viewport } from "next";
import "./globals.css";
import RevealObserver from "@/components/ui/RevealObserver";

const SITE_URL = "https://bell-ugc.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Bell | Criadora de Conteudo UGC",
    template: "%s | Bell UGC",
  },
  description:
    "Portfolio de Bell — criadora de conteudo UGC. Reels, TikTok e ads autenticos que conectam marcas com pessoas reais.",
  keywords: [
    "UGC",
    "criadora de conteudo",
    "Reels",
    "TikTok",
    "Instagram",
    "conteudo para marcas",
    "Bell UGC",
  ],
  authors: [{ name: "Bell" }],
  creator: "Bell",
  openGraph: {
    title: "Bell | Criadora de Conteudo UGC",
    description:
      "Conteudo autentico que conecta marcas com pessoas reais.",
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Bell UGC",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bell | Criadora de Conteudo UGC",
    description:
      "Conteudo autentico que conecta marcas com pessoas reais.",
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
  name: "Bell",
  jobTitle: "Criadora de Conteudo UGC",
  url: SITE_URL,
  description:
    "Criadora de conteudo UGC para Instagram, TikTok e YouTube.",
  sameAs: [
    "https://instagram.com/bellugc",
    "https://tiktok.com/@bellugc",
    "https://youtube.com/@bellugc",
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
