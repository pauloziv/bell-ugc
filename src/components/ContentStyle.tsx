import KitCases from "@/components/media-kit/KitCases";

export default function ContentStyle() {
  return (
    <KitCases
      id="estilo"
      eyebrow="Portfólio de conteúdo"
      title={
        <>
          Meu Estilo de <span className="text-magenta">Conteúdo</span>
        </>
      }
      subtitle="Players verticais no formato Reels e TikTok. Skelt entra com capa cinema — clica no play pra assistir."
      reserveAvatar
    />
  );
}
