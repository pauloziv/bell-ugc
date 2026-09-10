import {Node, Rect, Txt, makeScene2D} from '@motion-canvas/2d';
import {all, easeOutBack, makeRef, sequence, waitFor} from '@motion-canvas/core';
import {BrandMark, Dots, SlideIndex} from '../chrome';
import {C, CARD_SECONDS, FONT_BODY, FONT_DISPLAY} from '../theme';

const ITEMS = [
  {k: 'Ads', t: 'Oferta imperdível', fill: C.yellow},
  {k: 'Recado', t: 'gente, juro', fill: C.lime},
  {k: 'Unboxing', t: 'Abre comigo', fill: '#FFC1E3'},
  {k: 'Review', t: 'vou ser honesta', fill: C.white},
];

export default makeScene2D(function* (view) {
  yield document.fonts.ready;
  const cards: Rect[] = [];

  view.fill(C.offwhite);
  view.add(
    <Node>
      <BrandMark />
      <SlideIndex index={6} />
      <Txt
        y={-430}
        text={'COMO EU FALO'}
        fontFamily={FONT_BODY}
        fontWeight={700}
        fontSize={20}
        fill={C.magenta}
        letterSpacing={4}
      />
      <Txt
        y={-340}
        width={900}
        textWrap
        textAlign={'center'}
        text={'Ads, recado, unboxing, review.'}
        fontFamily={FONT_DISPLAY}
        fontWeight={800}
        fontSize={48}
        fill={C.navy}
      />
      <Rect y={80} layout direction={'column'} gap={16} alignItems={'center'}>
        {ITEMS.map((item, i) => (
          <Rect
            ref={makeRef(cards, i)}
            width={860}
            height={120}
            fill={item.fill}
            radius={28}
            lineWidth={3}
            stroke={C.navy}
            layout
            padding={28}
            alignItems={'center'}
            justifyContent={'space-between'}
            rotation={i % 2 ? 1.5 : -1.5}
            scale={0}
          >
            <Txt text={item.k.toUpperCase()} fontFamily={FONT_BODY} fontWeight={700} fontSize={18} letterSpacing={3} fill={C.navy} />
            <Txt text={item.t} fontFamily={FONT_DISPLAY} fontWeight={800} fontSize={32} fill={C.navy} />
          </Rect>
        ))}
      </Rect>
      <Dots index={6} />
    </Node>,
  );

  yield* all(
    sequence(0.1, ...cards.map(c => c.scale(1, 0.4, easeOutBack))),
    waitFor(CARD_SECONDS),
  );
});
