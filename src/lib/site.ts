export const SITE_URL = "https://belconteudos.com";
export const WHATSAPP = "5511963826929";
export const EMAIL = "bel.conteudos@gmail.com";
export const INSTAGRAM_URL = "https://instagram.com/bel.conteudos";
export const TIKTOK_URL = "https://tiktok.com/@bel.conteudos";
export const INSTAGRAM_HANDLE = "@bel.conteudos";
export const TIKTOK_HANDLE = "@bel.conteudos";

export function whatsappUrl(text: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
}
