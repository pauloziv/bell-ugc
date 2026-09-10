import {Node, Rect, Txt, makeScene2D} from '@motion-canvas/2d';
import {all, createRef, delay, easeOutBack, easeOutCubic, waitFor} from '@motion-canvas/core';
import {BrandMark, Dots, SlideIndex} from '../chrome';
import {C, CARD_SECONDS, FONT_BODY, FONT_DISPLAY} from '../theme';

export default makeScene2D(function* (view) {
  yield document.fonts.ready;
  const a = createRef<Rect>();
  const b = createRef<Rect>();

  view.fill(C.navy);
  view.add(
    <Node>
      <BrandMark onDark />
      <SlideIndex index={9} onDark />
      <Txt
        y={-440}
        text={'INVESTIMENTO'}
        fontFamily={FONT_BODY}
        fontWeight={700}
        fontSize={20}
        fill={C.yellow}
        letterSpacing={4}
      />
      <Txt
        y={-360}
        text={'Dois pacotes. Sem surpresa.'}
        fontFamily={FONT_DISPLAY}
        fontWeight={800}
        fontSize={42}
        fill={C.white}
      />
      <Rect
        ref={a}
        x={-230}
        y={90}
        width={430}
        height={600}
        fill={C.white}
        radius={40}
        lineWidth={4}
        stroke={C.navy}
        layout
        direction={'column'}
        padding={36}
        gap={18}
        alignItems={'start'}
        rotation={-3}
        opacity={0}
      >
        <Txt text={'Experimentar'} fontFamily={FONT_DISPLAY} fontWeight={800} fontSize={34} fill={C.navy} />
        <Txt text={'Um vídeo pra testar o fit'} fontFamily={FONT_BODY} fontSize={22} fill={C.muted} />
        <Txt text={'R$ 200'} fontFamily={FONT_DISPLAY} fontWeight={800} fontSize={56} fill={C.navy} />
        <Txt
          text={'1 UGC · revisão · ads 3 meses'}
          fontFamily={FONT_BODY}
          fontSize={22}
          fill={C.navy}
          textWrap
          width={340}
        />
      </Rect>
      <Rect
        ref={b}
        x={230}
        y={70}
        width={430}
        height={640}
        fill={C.magenta}
        radius={40}
        lineWidth={4}
        stroke={C.navy}
        layout
        direction={'column'}
        padding={36}
        gap={16}
        alignItems={'start'}
        rotation={3}
        opacity={0}
      >
        <Rect fill={C.yellow} radius={24} padding={[8, 16]} layout>
          <Txt text={'mais popular'} fontFamily={FONT_DISPLAY} fontWeight={800} fontSize={16} fill={C.navy} />
        </Rect>
        <Txt text={'Professional'} fontFamily={FONT_DISPLAY} fontWeight={800} fontSize={34} fill={C.white} />
        <Txt text={'Três vídeos + roteiro'} fontFamily={FONT_BODY} fontSize={22} fill={'#ffffffcc'} />
        <Txt text={'R$ 500'} fontFamily={FONT_DISPLAY} fontWeight={800} fontSize={56} fill={C.white} />
        <Txt
          text={'3 UGC · ads 6 meses · prazo combinado'}
          fontFamily={FONT_BODY}
          fontSize={22}
          fill={C.white}
          textWrap
          width={340}
        />
      </Rect>
      <Dots index={9} onDark />
    </Node>,
  );

  yield* all(
    delay(0.05, a().opacity(1, 0.4, easeOutCubic)),
    delay(0.05, a().rotation(-2, 0.5, easeOutBack)),
    delay(0.18, b().opacity(1, 0.4, easeOutCubic)),
    delay(0.18, b().rotation(2, 0.5, easeOutBack)),
    waitFor(CARD_SECONDS),
  );
});
