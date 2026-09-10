import {Img, Node, Rect, Txt, makeScene2D} from '@motion-canvas/2d';
import {waitFor} from '@motion-canvas/core';
import creamy from '../assets/brands/creamy.svg';
import skelt from '../assets/brands/skelt.svg';
import dove from '../assets/brands/dove.png';
import natura from '../assets/brands/natura.svg';
import {BrandMark, IndexStamp} from '../chrome';
import {C, CARD_SECONDS, FONT_DISPLAY} from '../theme';

const BRANDS: {src: string; fill: string}[] = [
  {src: creamy, fill: '#F6AB9E'},
  {src: skelt, fill: '#F9DCDC'},
  {src: dove, fill: '#F4EFE6'},
  {src: natura, fill: '#FF6A00'},
];

export default makeScene2D(function* (view) {
  yield document.fonts.ready;

  view.fill(C.yellow);
  view.add(
    <Node>
      <BrandMark />
      <IndexStamp index={7} />
      <Txt
        y={-280}
        width={960}
        textAlign={'left'}
        text={'35+'}
        fontFamily={FONT_DISPLAY}
        fontWeight={800}
        fontSize={280}
        fill={C.navy}
        lineHeight={240}
      />
      <Txt
        y={-40}
        width={960}
        textAlign={'left'}
        text={'MARCAS.'}
        fontFamily={FONT_DISPLAY}
        fontWeight={800}
        fontSize={110}
        fill={C.magenta}
      />
      <Rect y={300} width={920} layout wrap={'wrap'} gap={16} justifyContent={'center'}>
        {BRANDS.map((b, i) => (
          <Rect
            width={440}
            height={168}
            fill={b.fill}
            radius={32}
            lineWidth={6}
            stroke={C.navy}
            shadowColor={C.navy}
            shadowOffset={[8, 8]}
            layout
            alignItems={'center'}
            justifyContent={'center'}
            rotation={i % 2 ? 4 : -5}
            clip
          >
            <Img src={b.src} width={240} height={70} />
          </Rect>
        ))}
      </Rect>
    </Node>,
  );

  yield* waitFor(CARD_SECONDS);
});
