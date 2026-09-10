import {Img, Node, Rect, Txt, makeScene2D} from '@motion-canvas/2d';
import {createRef, linear} from '@motion-canvas/core';
import matcha from '../../../public/images/creator-bel-matcha.png';
import {BrandMark, IndexStamp} from '../chrome';
import {TypePlate} from '../poster';
import {C, CARD_SECONDS, FONT_DISPLAY} from '../theme';

const WORDS = ['MODA', 'NY', 'MÃE'];

export default makeScene2D(function* (view) {
  yield document.fonts.ready;
  const art = createRef<Img>();

  view.fill(C.yellow);
  view.add(
    <Node>
      <Img ref={art} src={matcha} x={310} y={80} width={980} height={980} />
      <BrandMark />
      <IndexStamp index={3} />
      <Rect x={-220} y={-40} layout direction={'column'} gap={8}>
        {WORDS.map(w => (
          <Txt
            text={w}
            fontFamily={FONT_DISPLAY}
            fontWeight={800}
            fontSize={120}
            fill={C.navy}
            lineHeight={112}
          />
        ))}
      </Rect>
      <TypePlate
        lines={['UM TOM.']}
        fill={C.magenta}
        ink={C.white}
        fontSize={88}
        x={-160}
        y={420}
        rotation={-4}
      />
    </Node>,
  );

  yield* art().scale(1.06, CARD_SECONDS, linear);
});
