export const IG_CARD = {
  width: 1080,
  height: 1350,
  seconds: 6,
  fps: 30,
} as const;

export const IG_PORTFOLIO_CAPTION = `Não é anúncio. É indicação.

Recado de amiga. Não comercial.

Rua, não studio. 120+ vídeos. 35+ marcas.

R$ 200 ou R$ 500. Sem surpresa.

WhatsApp no link da bio
belconteudos.com

#ugc #ugccreator #ugcbrasil #creatordemarketing #reels`;

export type IgSlide = {
  id: string;
  file: string;
  kicker: string;
  title: string;
  body: string;
  onDark: boolean;
  photo?: string;
};

export const IG_SLIDES: IgSlide[] = [
  {
    id: "01-cover",
    file: "01-cover.mp4",
    kicker: "Capa",
    title: "Não é anúncio.",
    body: "É indicação.",
    onDark: true,
    photo: "/images/ig-portfolio/bel-geladeira-lata.jpg",
  },
  {
    id: "02-quem",
    file: "02-quem.mp4",
    kicker: "Quem",
    title: "Recado de amiga.",
    body: "Não comercial.",
    onDark: true,
    photo: "/images/creator-bel-hero.jpg",
  },
  {
    id: "03-nichos",
    file: "03-nichos.mp4",
    kicker: "Nichos",
    title: "Um tom.",
    body: "Moda. NY. Mãe.",
    onDark: false,
  },
  {
    id: "04-estilo-lata",
    file: "04-estilo-lata.mp4",
    kicker: "Estilo",
    title: "Sem estúdio.",
    body: "Produto na mão.",
    onDark: true,
    photo: "/images/ig-portfolio/bel-geladeira-lata.jpg",
  },
  {
    id: "05-estilo-costas",
    file: "05-estilo-costas.mp4",
    kicker: "Estilo",
    title: "Rua. Não studio.",
    body: "A marca entra no dia.",
    onDark: true,
    photo: "/images/ig-portfolio/bel-geladeira-costas.jpg",
  },
  {
    id: "06-formatos",
    file: "06-formatos.mp4",
    kicker: "Formatos",
    title: "O tom muda.",
    body: "Ads, recado, unboxing, review.",
    onDark: false,
  },
  {
    id: "07-marcas",
    file: "07-marcas.mp4",
    kicker: "Prova",
    title: "35+ marcas.",
    body: "Creamy, Skelt, Dove, Natura.",
    onDark: false,
  },
  {
    id: "08-processo",
    file: "08-processo.mp4",
    kicker: "Processo",
    title: "Briefing a sério.",
    body: "Prazo de verdade.",
    onDark: false,
  },
  {
    id: "09-pacotes",
    file: "09-pacotes.mp4",
    kicker: "Investimento",
    title: "R$ 200 · R$ 500",
    body: "Sem surpresa.",
    onDark: true,
  },
  {
    id: "10-cta",
    file: "10-cta.mp4",
    kicker: "Agora",
    title: "Vamo gravar.",
    body: "@bel.conteudos",
    onDark: true,
  },
];
