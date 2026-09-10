import {Node, Txt, makeScene2D} from '@motion-canvas/2d';
import {all, createRef, linear, waitFor} from '@motion-canvas/core';
import {BrandMark, IndexStamp} from '../chrome';
import {HardSticker} from '../poster';
import {C, CARD_SECONDS, FONT_DISPLAY} from '../theme';

export default makeScene2D(function* (view) {
  yield document.fonts.ready;
  const title = createRef<Txt>();

  view.fill(C.lime);
  view.add(
    <Node>
      <BrandMark />
      <IndexStamp index={8} />
      <Txt
        ref={title}
        y={-40}
        width={980}
        textAlign={'left'}
        text={'BRIEFING\nA SÉRIO.'}
        fontFamily={FONT_DISPLAY}
        fontWeight={800}
        fontSize={140}
        fill={C.navy}
        lineHeight={132}
      />
      <HardSticker text={'prazo de verdade'} fill={C.navy} ink={C.yellow} x={-160} y={320} fontSize={36} />
    </Node>,
  );

  yield* all(title().scale(1.04, CARD_SECONDS, linear), waitFor(CARD_SECONDS));
});
