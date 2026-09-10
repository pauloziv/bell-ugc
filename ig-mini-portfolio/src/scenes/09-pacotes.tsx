import {Node, Rect, Txt, makeScene2D} from '@motion-canvas/2d';
import {waitFor} from '@motion-canvas/core';
import {BrandMark, IndexStamp} from '../chrome';
import {C, CARD_SECONDS, FONT_BODY, FONT_DISPLAY} from '../theme';

export default makeScene2D(function* (view) {
  yield document.fonts.ready;

  view.fill(C.navy);
  view.add(
    <Node>
      <Rect x={-270} width={540} height={1350} fill={C.white} />
      <Rect x={270} width={540} height={1350} fill={C.magenta} />
      <BrandMark />
      <IndexStamp index={9} />
      <Txt
        x={-270}
        y={-180}
        text={'Experimentar'}
        fontFamily={FONT_DISPLAY}
        fontWeight={800}
        fontSize={32}
        fill={C.navy}
      />
      <Txt
        x={-270}
        y={20}
        text={'R$ 200'}
        fontFamily={FONT_DISPLAY}
        fontWeight={800}
        fontSize={120}
        fill={C.navy}
      />
      <Txt
        x={-270}
        y={160}
        text={'1 vídeo'}
        fontFamily={FONT_BODY}
        fontWeight={700}
        fontSize={28}
        fill={C.muted}
      />
      <Rect x={270} y={-260} fill={C.yellow} radius={24} padding={[10, 20]} layout>
        <Txt
          text={'mais popular'}
          fontFamily={FONT_DISPLAY}
          fontWeight={800}
          fontSize={22}
          fill={C.navy}
        />
      </Rect>
      <Txt
        x={270}
        y={-180}
        text={'Professional'}
        fontFamily={FONT_DISPLAY}
        fontWeight={800}
        fontSize={32}
        fill={C.white}
      />
      <Txt
        x={270}
        y={20}
        text={'R$ 500'}
        fontFamily={FONT_DISPLAY}
        fontWeight={800}
        fontSize={120}
        fill={C.white}
      />
      <Txt
        x={270}
        y={160}
        text={'3 vídeos'}
        fontFamily={FONT_BODY}
        fontWeight={700}
        fontSize={28}
        fill={'#ffffffcc'}
      />
    </Node>,
  );

  yield* waitFor(CARD_SECONDS);
});
