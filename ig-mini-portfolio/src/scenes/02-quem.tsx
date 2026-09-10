import {Img, Node, Rect, Txt, makeScene2D} from '@motion-canvas/2d';
import {all, createRef, delay, easeOutBack, easeOutCubic, linear} from '@motion-canvas/core';
import about from '../assets/creator-bel-about.jpg';
import {BrandMark, Dots, SlideIndex} from '../chrome';
import {C, CARD_SECONDS, FONT_BODY, FONT_DISPLAY} from '../theme';

export default makeScene2D(function* (view) {
  yield document.fonts.ready;
  const photo = createRef<Img>();
  const stats = createRef<Rect>();

  view.fill(C.offwhite);
  view.add(
    <Node>
      <Rect x={470} y={-360} width={280} height={280} fill={C.yellow} radius={140} />
      <Rect
        x={-220}
        y={-210}
        width={420}
        height={420}
        radius={210}
        lineWidth={6}
        stroke={C.navy}
        fill={C.white}
        clip
      >
        <Img ref={photo} src={about} width={520} height={520} />
      </Rect>
      <BrandMark />
      <SlideIndex index={2} />
      <Txt
        x={220}
        y={-40}
        text={'Oi, eu sou\nCreator Bel'}
        fontFamily={FONT_DISPLAY}
        fontWeight={800}
        fontSize={58}
        fill={C.navy}
        textAlign={'left'}
        textWrap={'pre'}
      />
      <Txt
        y={160}
        width={880}
        textWrap
        textAlign={'center'}
        text={'Criadora de conteúdo UGC. Transformo produto em indicação — moda, casa, estética, NY, mãe. Já estive dos dois lados do briefing.'}
        fontFamily={FONT_BODY}
        fontSize={28}
        fill={C.muted}
      />
      <Rect ref={stats} y={430} layout gap={18} opacity={0}>
        <Stat n={'120+'} l={'vídeos'} fill={C.yellow} />
        <Stat n={'35+'} l={'marcas'} fill={C.lime} />
        <Stat n={'98%'} l={'satisfação'} fill={C.magenta} ink={C.white} />
      </Rect>
      <Dots index={2} />
    </Node>,
  );

  yield* all(
    photo().scale(1.08, CARD_SECONDS, linear),
    delay(0.2, stats().opacity(1, 0.4, easeOutCubic)),
    delay(0.2, stats().y(400, 0.5, easeOutBack)),
  );
});

function Stat({n, l, fill, ink = C.navy}: {n: string; l: string; fill: string; ink?: string}) {
  return (
    <Rect
      width={270}
      height={150}
      fill={fill}
      radius={28}
      lineWidth={3}
      stroke={C.navy}
      layout
      direction={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      gap={4}
    >
      <Txt text={n} fontFamily={FONT_DISPLAY} fontWeight={800} fontSize={48} fill={ink} />
      <Txt
        text={l}
        fontFamily={FONT_BODY}
        fontWeight={700}
        fontSize={16}
        fill={ink}
        letterSpacing={2}
      />
    </Rect>
  );
}
