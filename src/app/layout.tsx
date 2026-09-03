import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bell | Criadora de Conteudo UGC",
  description:
    "Portfolio de Bell — criadora de conteudo UGC. Conteudo autentico que conecta marcas com pessoas reais.",
  openGraph: {
    title: "Bell | Criadora de Conteudo UGC",
    description:
      "Conteudo autentico que conecta marcas com pessoas reais.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/cabinet-grotesk"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/satoshi"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-offwhite text-navy">{children}</body>
    </html>
  );
}
