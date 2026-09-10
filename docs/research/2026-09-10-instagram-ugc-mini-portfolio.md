# Instagram UGC mini-portfólio (carrossel)

Pesquisa para o carrossel de 10 cards da Bel. Só afirmação com fonte. O que o Instagram bloqueou, fica marcado como não visto.

## 1. O que é esse formato

UGC creator trata o feed como **mini media kit**: um único post carrossel que a marca swipeia no celular e entende quem é, o que entrega, prova e como contratar — sem abrir PDF.

Fontes:

- Influencer Marketing Hub (29 dez 2025): portfólio UGC = coleção curada (bio, 6–12 peças, métricas, menu de serviços, contato). Marcas shortlistam pelo pacote, não por follower count. [influencermarketinghub.com/ugc-portfolio](https://influencermarketinghub.com/ugc-portfolio/)
- Metricool: no Creator Marketplace o portfólio dentro do Instagram “acts like a mini media kit inside Instagram” (quem é, trabalho anterior, marcas). [metricool.com/instagram-creator-marketplace](https://metricool.com/instagram-creator-marketplace/)
- ContentCreators.com (UGC Portfolio Builder): feed precisa de 3+ usos de produto, 1 Reel, 1 carrossel/story de storytelling, collabs em Highlights ou post fixado, estética consistente. [contentcreators.com/resources/toolkit/ugc-portfolio-builder](https://contentcreators.com/resources/toolkit/ugc-portfolio-builder)

No mercado hispano-americano o gancho de capa costuma ser **“¿Trabajamos juntos?”** — pitch direto para marca, não tutorial para seguidor.

## 2. Exemplo pedido — o que deu para verificar

URL: `https://www.instagram.com/p/DcI8cWtlskr/?img_index=5`

**Visto (embed público do Instagram, 10 set 2026):**

| Campo | Valor verificado |
| --- | --- |
| Conta | [@daniielarosales](https://www.instagram.com/daniielarosales/) |
| Local no embed | Venezuela |
| Perfil no embed | 866 posts · 95K followers |
| Caption | `Trabajamos juntooos?❤️ Obvio me inspire de @estefanymina_ x @axhlymendoza` |
| Likes no embed | 2,220 |
| Tipo de mídia | Carrossel. Cover = vídeo (`CAROUSEL_ITEM` + `video_default_cover_frame`). Outro item vídeo + item `regular_photo` (xpids 3024) |
| `img_index=5` | Query oficial de slide; o post tem **no mínimo 5** itens |

**Não visto (login wall / embed só entrega cover + thumbs):** layout tipográfico de cada slide, paleta, copy interna, tarifas. Não inventar esses slides.

Leitura segura do exemplo: **carrossel misto vídeo+foto**, capa em vídeo, gancho “trabalhamos juntos?”, crédito a outras UGC (Estefany Mina, Axhly Mendoza). Padrão LatAm de mini-portfólio no feed.

## 3. Regras oficiais Meta / Instagram (não blog)

### App (Help Center)

[Share a post with multiple photos or videos](https://help.instagram.com/269314186824048):

- Até **20** fotos e vídeos num post (carrossel) no app.
- Orientação do **primeiro** item (square / portrait / landscape) vale para **todos**. Não mistura orientação.
- Vídeo de carrossel **não é Reel**: não vai para a aba Reels nem ganha features de Reels.
- Depois de publicar: reordenar e remover itens; **não dá** para adicionar item novo.

### Graph API / Content Publishing (v26, docs Meta)

[IG User Media](https://developers.facebook.com/documentation/instagram-platform/instagram-graph-api/reference/ig-user/media) · [Content Publishing](https://developers.facebook.com/documentation/instagram-platform/content-publishing) (atualizado 30 jun 2026 / 12 ago 2026):

- API publica carrossel com até **10** children (`media_type=CAROUSEL` + `children=`). Mix foto+vídeo. **Reels não entram** no carrossel (`create image or video containers instead (reels are not supported)`).
- Imagem: JPEG, ≤8 MB, aspect **4:5 a 1.91:1**, largura 320–1440.
- Vídeo (Reels spec na mesma página; carousel child usa container `VIDEO` + `is_carousel_item=true`): MP4/MOV, H.264/HEVC, AAC, 23–60 fps, ≥3 s.
- Caption: 2200 caracteres, 30 hashtags, 20 @. Caption no container do carrossel, não no child.
- Crop do carrossel na API: “Carousel images are all cropped based on the first image… default 1:1”. Por isso o slide 1 define o recorte. **Todos os 10 no mesmo 4:5.**

### Ads media requirements (stream, não o mesmo que organic, mas aspect oficial)

[Media Requirements](https://developers.facebook.com/docs/instagram/ads-api/reference/media-requirements/): stream Instagram aceita **1.91:1 até 4:5**; vídeo **3–60 s**; loop infinito no Instagram.

**Decisão de export:** `1080×1350` (4:5), **6 s**, **30 fps**, H.264 + AAC silencioso. Cabe no Help Center, no Graph image spec e no mínimo de 3 s.

Blogs 2026 que falam 3:4 (1080×1440) ou “20 slides no app vs 10 na API” **não substituem** o spec 4:5 da Graph para imagem. App permite 20; API 10. Entrega: **10**, funciona nos dois.

## 4. Arquitetura de slides que as fontes descrevem

Não copiar um template Canva. Combinar o que as fontes primárias/setoriais pedem:

| # | Papel | Por quê | Fonte |
| --- | --- | --- | --- |
| 1 | Capa / gancho (“vamos criar juntas?”) | Capa decide swipe. Completions 7–10 slides. | Help Center (1º item = crop); Canvora (hook + valor + CTA; 7–10); exemplo daniielarosales |
| 2 | Quem sou + o que faço | Marca decide relevância em segundos | IMH §1 |
| 3 | Nicho / identidade visual | Niche > follower count | IMH Step 2 |
| 4–5 | Prova visual (lifestyle, product-in-use) | 6–12 exemplos; foto UGC = lifestyle / produto no uso | IMH §2; ContentCreators table (Lifestyle Integration) |
| 6 | Formatos (demo, unboxing, review, recado) | Marca quer versatilidade de formato | IMH; ContentCreators formats |
| 7 | Marcas / social proof | Collabs visíveis | Metricool; ContentCreators “past collaborations” |
| 8 | Processo | Reduz risco operacional | IMH “professionalism”; tarifário UGC LatAm (YouTube guia 2026: prazo + briefing) |
| 9 | Menu / pacotes | Menu baixo atrito | IMH §4; guia UGC 2026 (tarifario PDF, pacotes, ads rights) |
| 10 | CTA + contato | Email/WhatsApp/handle clicável no kit; aqui vira handle + site | IMH §5 |

Vídeo em **todo** slide: o exemplo usa vídeo na capa; Meta deixa mix. Pedido da Bel: 10 cards em Motion Canvas (vídeo). Instagram **loopa** vídeo de feed ([ads media: endless loop](https://developers.facebook.com/docs/instagram/ads-api/reference/media-requirements/)).

## 5. Identidade Bel (não inventar)

Do design system Bold Pop e do site:

- Cores: magenta `#E91E8C`, yellow `#FFD23F`, lime `#7BED4F`, navy `#1A1A2E`, offwhite `#FAFAFA`
- Tipo: Cabinet Grotesk + Satoshi
- Tom PT-BR, sticker, hard-shadow, squircle
- Copy já publicada: “Creator Bel”, “Vamos criar juntos?”, 120+ vídeos, 35+ marcas, 98%, nichos, pacotes R$ 200 / R$ 500
- Fotos novas (anexo): geladeira Coca-Cola, jaqueta de couro — product-in-use / lifestyle. Entram nos slides 4 e 5 (e polaroid na capa)

## 6. Spec de produção

- 10 MP4 1080×1350, 6,00 s, 30 fps, H.264 yuv420p, AAC 48 kHz stereo (silêncio)
- Texto longe da borda (safe ~72 px; rodapé ~120 px para dots nativos do IG)
- Sem emoji no card (regra do design system)
- Motor: [VideoZero/skills](https://github.com/VideoZero/skills) → Motion Canvas (`motion-canvas`, `motion-canvas-agent`, `animation-basics`)

## 7. Fontes consultadas (não fabricadas)

1. Instagram Help Center — carrossel até 20, orientação única, vídeo ≠ Reel  
2. Meta IG User Media v26 — children ≤10, mix, Reels fora, JPEG 4:5–1.91:1  
3. Meta Content Publishing 30 jun 2026 — CAROUSEL, crop pelo 1º item  
4. Meta Ads Media Requirements — 4:5, vídeo 3–60 s, loop  
5. Embed Instagram `p/DcI8cWtlskr` — metadados da seção 2  
6. Influencer Marketing Hub — UGC portfolio 29 dez 2025  
7. Metricool Creator Marketplace  
8. ContentCreators.com UGC Portfolio Builder  
9. VideoZero/skills README + SKILL.md Motion Canvas (clone 10 set 2026)

**Não usado como fato:** blogs que afirmam 3:4 “oficial 2026” sem Help Center; conteúdo interno dos slides do exemplo (não renderizou).
