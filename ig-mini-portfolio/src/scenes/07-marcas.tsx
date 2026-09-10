import {Img, Node, Rect, Txt, makeScene2D} from '@motion-canvas/2d';
import {all, easeOutBack, makeRef, sequence, waitFor} from '@motion-canvas/core';
import creamy from '../assets/brands/creamy.svg';
import skelt from '../assets/brands/skelt.svg';
import sander from '../assets/brands/sander.png';
import dove from '../assets/brands/dove.png';
import muvon from '../assets/brands/muvon.svg';
import natura from '../assets/brands/natura.svg';
import {BrandMark, Dots, SlideIndex} from '../chrome';
import {C, CARD_SECONDS, FONT_BODY, FONT_DISPLAY} from '../theme';

const BRANDS: {src: string; fill: string}[] = [
  {src: creamy, fill: '#F6AB9E'},
  {src: skelt, fill: '#F9DCDC'},
  {src: sander, fill: C.yellow},
  {src: dove, fill: '#F4EFE6'},
  {src: muvon, fill: '#FBF8F2'},
  {src: natura, fill: '#FF6A00'},
];

export default makeScene2D(function* (view) {
  yield document.fonts.ready;
  const stamps: Rect[] = [];

  view.fill(C.offwhite);
  view.add(
    <Node>
      <BrandMark />
      <SlideIndex index={7} />
      <Txt
        y={-430}
        text={'QUEM JÁ CRIOU COMIGO'}
        fontFamily={FONT_BODY}
        fontWeight={700}
        fontSize={20}
        fill={C.magenta}
        letterSpacing={4}
      />
      <Txt
        y={-330}
        width={900}
        textWrap
        textAlign={'center'}
        text={'Marcas no palco.'}
        fontFamily={FONT_DISPLAY}
        fontWeight={800}
        fontSize={58}
        fill={C.navy}
      />
      <Rect y={80} width={920} layout wrap={'wrap'} gap={18} justifyContent={'center'}>
        {BRANDS.map((b, i) => (
          <Rect
            ref={makeRef(stamps, i)}
            width={280}
            height={140}
            fill={b.fill}
            radius={28}
            lineWidth={3}
            stroke={C.navy}
            layout
            alignItems={'center'}
            justifyContent={'center'}
            rotation={i % 2 ? 4 : -4}
            clip
            scale={0}
          >
            <Img src={b.src} width={200} height={52} />
          </Rect>
        ))}
      </Rect>
      <Dots index={7} />
    </Node>,
  );

  yield* all(
    sequence(0.08, ...stamps.map(s => s.scale(1, 0.4, easeOutBack))),
    waitFor(CARD_SECONDS),
  );
});
