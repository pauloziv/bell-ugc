export const IG_CARD = {
  width: 1080,
  height: 1350,
  seconds: 6,
  fps: 30,
} as const;

export const IG_PORTFOLIO_CAPTION = `Vamos criar juntas?

Oi, eu sou a Creator Bel — UGC pra marcas que querem indicação, não anúncio.

Swipe: quem eu sou, estilo na rua, formatos, marcas, processo e pacotes.

Site: belconteudos.com
WhatsApp no link da bio

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
    kicker: "Mini portfólio",
    title: "Vamos criar juntas?",
    body: "Creator Bel — UGC que parece recado de amiga.",
    onDark: true,
    photo: "/images/ig-portfolio/bel-geladeira-lata.jpg",
  },
  {
    id: "02-quem",
    file: "02-quem.mp4",
    kicker: "Quem sou",
    title: "Conteúdo real, resultado real.",
    body: "Moda, casa, estética, NY, mãe. Dois lados do briefing.",
    onDark: false,
  },
  {
    id: "03-nichos",
    file: "03-nichos.mp4",
    kicker: "Nichos",
    title: "Olhar amplo. Entrega cirúrgica.",
    body: "Nove territórios. Um tom.",
    onDark: false,
  },
  {
    id: "04-estilo-lata",
    file: "04-estilo-lata.mp4",
    kicker: "Estilo",
    title: "Produto na vida real.",
    body: "Geladeira, jaqueta, lata na mão. Sem mesa de estúdio.",
    onDark: true,
    photo: "/images/ig-portfolio/bel-geladeira-lata.jpg",
  },
  {
    id: "05-estilo-costas",
    file: "05-estilo-costas.mp4",
    kicker: "Estilo",
    title: "Rua, não studio.",
    body: "Costas, clip, couro. A marca entra no dia.",
    onDark: true,
    photo: "/images/ig-portfolio/bel-geladeira-costas.jpg",
  },
  {
    id: "06-formatos",
    file: "06-formatos.mp4",
    kicker: "Formatos",
    title: "Ads, recado, unboxing, review.",
    body: "O tom muda. A Bel continua a mesma.",
    onDark: false,
  },
  {
    id: "07-marcas",
    file: "07-marcas.mp4",
    kicker: "Prova",
    title: "Marcas que já criaram comigo",
    body: "Creamy, Skelt, Sander, Dove e mais.",
    onDark: false,
  },
  {
    id: "08-processo",
    file: "08-processo.mp4",
    kicker: "Processo",
    title: "Briefing a sério. Prazo de verdade.",
    body: "Cinco etapas. Arquivo pronto pra publicar.",
    onDark: true,
  },
  {
    id: "09-pacotes",
    file: "09-pacotes.mp4",
    kicker: "Investimento",
    title: "Dois pacotes. Sem surpresa.",
    body: "Experimentar R$ 200 · Professional R$ 500.",
    onDark: true,
  },
  {
    id: "10-cta",
    file: "10-cta.mp4",
    kicker: "Próximo passo",
    title: "Me chama.",
    body: "@bel.conteudos · belconteudos.com",
    onDark: true,
  },
];
