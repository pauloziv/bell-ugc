import {Img, Node, Rect, Txt, makeScene2D} from '@motion-canvas/2d';
import {all, createRef, easeOutCubic, linear} from '@motion-canvas/core';
import costas from '../assets/bel-geladeira-costas.jpg';
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
        <Img ref={photo} src={costas} width={1080} height={1977} y={-20} />
      </Rect>
      <Rect width={1080} height={380} y={485} fill={C.navy} opacity={0.88} />
      <BrandMark onDark />
      <SlideIndex index={5} onDark />
      <Rect
        ref={bar}
        y={430}
        layout
        direction={'column'}
        alignItems={'center'}
        gap={12}
        opacity={0}
      >
        <Rect fill={C.yellow} radius={28} padding={[10, 22]} lineWidth={3} stroke={C.navy} layout>
          <Txt text={'moda · rua'} fontFamily={FONT_DISPLAY} fontWeight={800} fontSize={20} fill={C.navy} />
        </Rect>
        <Txt
          text={'Rua, não studio.'}
          fontFamily={FONT_DISPLAY}
          fontWeight={800}
          fontSize={56}
          fill={C.white}
        />
        <Txt
          text={'Costas, clip, couro. A marca entra no dia.'}
          fontFamily={FONT_BODY}
          fontSize={26}
          fill={C.yellow}
        />
      </Rect>
      <Dots index={5} onDark />
    </Node>,
  );

  yield* all(
    photo().scale(1.1, CARD_SECONDS, linear),
    bar().opacity(1, 0.45, easeOutCubic),
  );
});
