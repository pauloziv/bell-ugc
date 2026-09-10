import {Node, Rect, Txt, makeScene2D} from '@motion-canvas/2d';
import {all, easeOutBack, makeRef, sequence, waitFor} from '@motion-canvas/core';
import {BrandMark, Dots, SlideIndex} from '../chrome';
import {C, CARD_SECONDS, FONT_BODY, FONT_DISPLAY} from '../theme';

const NICHES = [
  'moda',
  'arquitetura',
  'design',
  'publicidade',
  'estética',
  'NY',
  'mãe',
  'briefing',
  'empreendedorismo',
];

const FILLS = [C.yellow, C.white, C.lime, C.magenta, C.white, C.lime, C.white, C.magenta, C.white];

export default makeScene2D(function* (view) {
  yield document.fonts.ready;
  const chips: Rect[] = [];

  view.fill(C.yellow);
  view.add(
    <Node>
      <BrandMark />
      <SlideIndex index={3} />
      <Txt
        y={-430}
        text={'POR QUE VÁRIOS NICHOS?'}
        fontFamily={FONT_BODY}
        fontWeight={700}
        fontSize={20}
        fill={C.navy}
        letterSpacing={4}
      />
      <Txt
        y={-310}
        width={920}
        textWrap
        textAlign={'center'}
        text={'Olhar amplo. Entrega cirúrgica.'}
        fontFamily={FONT_DISPLAY}
        fontWeight={800}
        fontSize={64}
        fill={C.navy}
      />
      <Rect y={120} width={920} layout wrap={'wrap'} gap={16} justifyContent={'center'}>
        {NICHES.map((n, i) => (
          <Rect
            ref={makeRef(chips, i)}
            fill={FILLS[i]}
            radius={40}
            padding={[18, 30]}
            lineWidth={3}
            stroke={C.navy}
            rotation={i % 2 ? 4 : -4}
            layout
            scale={0}
          >
            <Txt
              text={n}
              fontFamily={FONT_DISPLAY}
              fontWeight={800}
              fontSize={28}
              fill={FILLS[i] === C.magenta ? C.white : C.navy}
            />
          </Rect>
        ))}
      </Rect>
      <Dots index={3} />
    </Node>,
  );

  yield* all(
    sequence(0.06, ...chips.map(chip => chip.scale(1, 0.38, easeOutBack))),
    waitFor(CARD_SECONDS),
  );
});
