import {Node, Rect, Txt, makeScene2D} from '@motion-canvas/2d';
import {all, easeOutBack, makeRef, sequence, waitFor} from '@motion-canvas/core';
import {BrandMark, Dots, SlideIndex} from '../chrome';
import {C, CARD_SECONDS, FONT_BODY, FONT_DISPLAY} from '../theme';

const STEPS = [
  {n: '01', t: 'Briefing', d: 'Objetivo e voz da marca', fill: C.magenta, ink: C.white},
  {n: '02', t: 'Roteiro', d: 'Autêntico e estratégico', fill: C.yellow, ink: C.navy},
  {n: '03', t: 'Produção', d: 'Luz, som, estética', fill: C.lime, ink: C.navy},
  {n: '04', t: 'Edição', d: 'Ritmo de plataforma', fill: C.white, ink: C.navy},
  {n: '05', t: 'Entrega', d: 'Arquivo pronto pra publicar', fill: C.yellow, ink: C.navy},
];

export default makeScene2D(function* (view) {
  yield document.fonts.ready;
  const rows: Rect[] = [];

  view.fill(C.navy);
  view.add(
    <Node>
      <BrandMark onDark />
      <SlideIndex index={8} onDark />
      <Txt
        y={-430}
        text={'COMO EU TRABALHO'}
        fontFamily={FONT_BODY}
        fontWeight={700}
        fontSize={20}
        fill={C.yellow}
        letterSpacing={4}
      />
      <Txt
        y={-340}
        width={920}
        textWrap
        textAlign={'center'}
        text={'Briefing a sério. Prazo de verdade.'}
        fontFamily={FONT_DISPLAY}
        fontWeight={800}
        fontSize={48}
        fill={C.white}
      />
      <Rect y={80} layout direction={'column'} gap={14}>
        {STEPS.map((s, i) => (
          <Rect
            ref={makeRef(rows, i)}
            width={880}
            height={96}
            fill={s.fill}
            radius={24}
            lineWidth={3}
            stroke={C.navy}
            layout
            padding={[0, 24]}
            alignItems={'center'}
            gap={24}
            scale={0}
          >
            <Txt text={s.n} fontFamily={FONT_DISPLAY} fontWeight={800} fontSize={28} fill={s.ink} />
            <Rect layout direction={'column'} gap={2}>
              <Txt text={s.t} fontFamily={FONT_DISPLAY} fontWeight={800} fontSize={30} fill={s.ink} />
              <Txt text={s.d} fontFamily={FONT_BODY} fontSize={20} fill={s.ink} />
            </Rect>
          </Rect>
        ))}
      </Rect>
      <Dots index={8} onDark />
    </Node>,
  );

  yield* all(
    sequence(0.1, ...rows.map(r => r.scale(1, 0.38, easeOutBack))),
    waitFor(CARD_SECONDS),
  );
});
