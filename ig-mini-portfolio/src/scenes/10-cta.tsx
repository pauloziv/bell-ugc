import {Circle, Node, Rect, Txt, makeScene2D} from '@motion-canvas/2d';
import {createRef, linear} from '@motion-canvas/core';
import {Cursor, Dots} from '../kit';
import {C, CARD_SECONDS, FONT_BODY, FONT_DISPLAY} from '../theme';

export default makeScene2D(function* (view) {
  const stamp = createRef<Rect>();

  view.fill(C.offwhite);
  view.add(
    <Node>
      <Dots fill={C.magenta} opacity={0.22} />
      <Txt
        y={-540}
        text={'@bel.conteudos'}
        fontFamily={FONT_DISPLAY}
        fontWeight={800}
        fontSize={42}
        fill={C.navy}
      />
      <Txt
        y={-480}
        text={'@bel.conteudos'}
        fontFamily={FONT_DISPLAY}
        fontWeight={800}
        fontSize={36}
        fill={C.magenta}
      />
      <Rect
        y={-80}
        width={780}
        height={620}
        fill={C.white}
        radius={8}
        lineWidth={5}
        stroke={C.navy}
      />
      <Txt
        y={-280}
        text={'criadora de conteúdo'}
        fontFamily={FONT_BODY}
        fontWeight={500}
        fontSize={32}
        fill={C.navy}
      />
      <Rect
        ref={stamp}
        y={-80}
        rotation={-6}
        width={560}
        height={140}
        fill={C.yellow}
        radius={12}
        lineWidth={5}
        stroke={C.navy}
        layout
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Txt
          text={'ME CHAMA!'}
          fontFamily={FONT_DISPLAY}
          fontWeight={800}
          fontSize={72}
          fill={C.navy}
        />
      </Rect>
      <Rect
        y={160}
        width={420}
        height={88}
        fill={C.magenta}
        radius={40}
        lineWidth={5}
        stroke={C.navy}
        layout
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Txt
          text={'me chama'}
          fontFamily={FONT_DISPLAY}
          fontWeight={800}
          fontSize={40}
          fill={C.white}
        />
      </Rect>
      <Txt
        y={430}
        text={'whatsapp no link'}
        fontFamily={FONT_BODY}
        fontWeight={700}
        fontSize={28}
        fill={C.navy}
      />
      <Circle x={-420} y={-380} width={36} fill={C.lime} lineWidth={4} stroke={C.navy} />
      <Rect x={430} y={-200} width={54} height={54} fill={C.navy} rotation={45} />
      <Cursor x={400} y={480} />
    </Node>,
  );

  yield* stamp().rotation(4, CARD_SECONDS, linear);
});
