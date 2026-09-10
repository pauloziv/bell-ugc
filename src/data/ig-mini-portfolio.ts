import {EMAIL} from "@/lib/site";

export const IG_CARD = {
  width: 1080,
  height: 1350,
  seconds: 6,
  fps: 30,
} as const;

export const IG_PORTFOLIO_CAPTION = `Vamos juntas?

Mini portfólio. Trabalhos que eu já gravei — beleza, indicações, moda, ads, rua.

Me chama.

${EMAIL}
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
    title: "mini PORTFÓLIO",
    body: "@bel.conteudos",
    onDark: false,
    photo: "/images/kit/kit-smile.jpg",
  },
  {
    id: "02-marcas",
    file: "02-marcas.mp4",
    kicker: "Marcas",
    title: "Algumas marcas",
    body: "com quem eu já gravei",
    onDark: false,
  },
  {
    id: "03-beleza",
    file: "03-beleza.mp4",
    kicker: "Beleza",
    title: "Beleza",
    body: "content",
    onDark: true,
    photo: "/images/kit/kit-beleza.jpg",
  },
  {
    id: "04-indicacoes",
    file: "04-indicacoes.mp4",
    kicker: "Indicações",
    title: "Indicações",
    body: "content",
    onDark: true,
    photo: "/images/ig-portfolio/bel-geladeira-lata.jpg",
  },
  {
    id: "05-moda",
    file: "05-moda.mp4",
    kicker: "Moda",
    title: "Moda",
    body: "content",
    onDark: true,
    photo: "/images/kit/kit-loja.jpg",
  },
  {
    id: "06-ads",
    file: "06-ads.mp4",
    kicker: "Ads",
    title: "Video ads",
    body: "content",
    onDark: true,
    photo: "/images/ig-portfolio/bel-geladeira-lata.jpg",
  },
  {
    id: "07-salao",
    file: "07-salao.mp4",
    kicker: "Salão",
    title: "Salão",
    body: "content",
    onDark: true,
    photo: "/images/kit/kit-salao.jpg",
  },
  {
    id: "08-vida",
    file: "08-vida.mp4",
    kicker: "Vida",
    title: "Vida real",
    body: "content",
    onDark: true,
    photo: "/images/kit/kit-smile.jpg",
  },
  {
    id: "09-rua",
    file: "09-rua.mp4",
    kicker: "Rua",
    title: "Na rua",
    body: "content",
    onDark: true,
    photo: "/images/ig-portfolio/bel-geladeira-costas.jpg",
  },
  {
    id: "10-cta",
    file: "10-cta.mp4",
    kicker: "Contato",
    title: "Me chama",
    body: "@bel.conteudos",
    onDark: false,
  },
];
