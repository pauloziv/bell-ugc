import {Img, Node, Rect, Txt, makeScene2D} from '@motion-canvas/2d';
import {all, createRef, easeOutCubic, linear} from '@motion-canvas/core';
import lata from '../assets/bel-geladeira-lata.jpg';
import {BrandMark, Dots, SlideIndex} from '../chrome';
import {C, CARD_SECONDS, FONT_BODY, FONT_DISPLAY} from '../theme';

export default makeScene2D(function* (view) {
  yield document.fonts.ready;
  const photo = createRef<Img>();
  const bar = createRef<Rect>();

  view.fill(C.navy);
  view.add(
    <Node>
      <Rect width={1080} height={1350} clip>
        <Img ref={photo} src={lata} width={1080} height={1920} y={-40} />
      </Rect>
      <Rect width={1080} height={380} y={485} fill={C.navy} opacity={0.88} />
      <BrandMark onDark />
      <SlideIndex index={4} onDark />
      <Rect
        ref={bar}
        y={430}
        layout
        direction={'column'}
        alignItems={'center'}
        gap={12}
        opacity={0}
      >
        <Rect fill={C.lime} radius={28} padding={[10, 22]} lineWidth={3} stroke={C.navy} layout>
          <Txt text={'lifestyle'} fontFamily={FONT_DISPLAY} fontWeight={800} fontSize={20} fill={C.navy} />
        </Rect>
        <Txt
          text={'Produto na vida real.'}
          fontFamily={FONT_DISPLAY}
          fontWeight={800}
          fontSize={52}
          fill={C.white}
        />
        <Txt
          text={'Geladeira, jaqueta, lata na mão.'}
          fontFamily={FONT_BODY}
          fontSize={26}
          fill={C.yellow}
        />
      </Rect>
      <Dots index={4} onDark />
    </Node>,
  );

  yield* all(
    photo().scale(1.1, CARD_SECONDS, linear),
    bar().opacity(1, 0.45, easeOutCubic),
  );
});
