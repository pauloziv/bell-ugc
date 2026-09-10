import {Node, Rect, Txt, makeScene2D} from '@motion-canvas/2d';
import {all, createRef, easeOutBack, easeOutCubic, waitFor} from '@motion-canvas/core';
import {BrandMark, Dots, SlideIndex} from '../chrome';
import {C, CARD_SECONDS, FONT_BODY, FONT_DISPLAY} from '../theme';

export default makeScene2D(function* (view) {
  yield document.fonts.ready;
  const title = createRef<Txt>();
  const pill = createRef<Rect>();

  view.fill(C.magenta);
  view.add(
    <Node>
      <Rect x={-340} y={-520} width={420} height={420} fill={C.yellow} radius={210} />
      <Rect x={400} y={520} width={380} height={380} fill={C.navy} radius={190} />
      <BrandMark onDark />
      <SlideIndex index={10} onDark />
      <Txt
        y={-280}
        text={'PRÓXIMO PASSO'}
        fontFamily={FONT_BODY}
        fontWeight={700}
        fontSize={20}
        fill={C.yellow}
        letterSpacing={4}
      />
      <Txt
        ref={title}
        y={-80}
        width={900}
        textWrap
        textAlign={'center'}
        text={'Me chama.'}
        fontFamily={FONT_DISPLAY}
        fontWeight={800}
        fontSize={110}
        fill={C.white}
        opacity={0}
      />
      <Rect
        ref={pill}
        y={160}
        fill={C.navy}
        radius={48}
        padding={[22, 40]}
        layout
        alignItems={'center'}
        scale={0}
      >
        <Txt
          text={'WhatsApp  ·  @bel.conteudos'}
          fontFamily={FONT_DISPLAY}
          fontWeight={800}
          fontSize={28}
          fill={C.white}
        />
      </Rect>
      <Txt
        y={280}
        text={'belconteudos.com'}
        fontFamily={FONT_BODY}
        fontWeight={700}
        fontSize={28}
        fill={C.navy}
      />
      <Dots index={10} onDark />
    </Node>,
  );

  yield* all(
    title().opacity(1, 0.45, easeOutCubic),
    title().scale(1.04, 0.5, easeOutBack),
    pill().scale(1, 0.45, easeOutBack),
    waitFor(CARD_SECONDS),
  );
});
