import {Node, Rect, Txt, makeScene2D} from '@motion-canvas/2d';
import {waitFor} from '@motion-canvas/core';
import {BrandMark, IndexStamp} from '../chrome';
import {C, CARD_SECONDS, FONT_BODY, FONT_DISPLAY} from '../theme';

const BANDS = [
  {k: 'ADS', t: 'OFERTA IMPERDÍVEL', fill: C.yellow},
  {k: 'RECADO', t: 'gente, juro', fill: C.lime},
  {k: 'UNBOXING', t: 'Abre comigo', fill: '#FFC1E3'},
  {k: 'REVIEW', t: 'vou ser honesta', fill: C.white},
];

const H = 337.5;

export default makeScene2D(function* (view) {
  yield document.fonts.ready;

  view.fill(C.navy);
  view.add(
    <Node>
      {BANDS.map((b, i) => (
        <Rect
          y={-675 + H / 2 + i * H}
          width={1080}
          height={H}
          fill={b.fill}
          layout
          direction={'column'}
          justifyContent={'center'}
          padding={[0, 56]}
          gap={6}
        >
          <Txt
            text={b.k}
            fontFamily={FONT_BODY}
            fontWeight={700}
            fontSize={22}
            letterSpacing={6}
            fill={C.navy}
          />
          <Txt
            text={b.t}
            fontFamily={FONT_DISPLAY}
            fontWeight={800}
            fontSize={i === 0 ? 64 : 72}
            fill={C.navy}
          />
        </Rect>
      ))}
      <BrandMark />
      <IndexStamp index={6} />
    </Node>,
  );

  yield* waitFor(CARD_SECONDS);
});
