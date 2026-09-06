import KitCases from "@/components/media-kit/KitCases";

export default function ContentStyle() {
  return (
    <KitCases
      id="estilo"
      eyebrow="Portfolio de conteudo"
      title={
        <>
          Meu Estilo de <span className="text-magenta">Conteudo</span>
        </>
      }
      subtitle="Players verticais no formato Reels e TikTok. Clica no play pra abrir grande e assistir."
      reserveAvatar
    />
  );
}
