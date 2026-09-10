import {Circle, Img, Node, Rect, Txt, makeScene2D} from '@motion-canvas/2d';
import {createRef, linear} from '@motion-canvas/core';
import beleza from '../assets/work/kit-beleza.jpg';
import creamy from '../assets/work/creamy.jpg';
import smile from '../assets/work/kit-smile.jpg';
import {Dots, LogoPlate} from '../kit';
import {C, CARD_SECONDS, FONT_BODY, FONT_DISPLAY} from '../theme';

const LOGOS = [
  ['Creamy', 'Skelt', 'Natura'],
  ['Farm', 'Granado', 'Boticário'],
  ['Havaianas', 'Muvon', 'Ferrari'],
];

export default makeScene2D(function* (view) {
  yield document.fonts.ready;
  const collage = createRef<Node>();

  view.fill(C.offwhite);
  view.add(
    <Node ref={collage}>
      <Dots fill={C.navy} opacity={0.12} />
      {Array.from({length: 11}, (_, i) => (
        <Circle x={-510} y={-600 + i * 120} width={28} fill={C.navy} />
      ))}
      <Txt
        y={-560}
        text={'Algumas marcas'}
        fontFamily={FONT_DISPLAY}
        fontWeight={800}
        fontSize={72}
        fill={C.navy}
      />
      <Txt
        y={-480}
        text={'com quem eu já gravei'}
        fontFamily={FONT_BODY}
        fontWeight={500}
        fontSize={32}
        fill={C.magenta}
      />
      <Rect
        x={-360}
        y={-280}
        rotation={-8}
        width={200}
        height={240}
        radius={16}
        clip
        lineWidth={5}
        stroke={C.navy}
      >
        <Img src={beleza} width={240} height={280} />
      </Rect>
      <Rect
        x={360}
        y={-300}
        rotation={7}
        width={180}
        height={220}
        radius={16}
        clip
        lineWidth={5}
        stroke={C.navy}
      >
        <Img src={creamy} width={220} height={260} />
      </Rect>
      <Rect
        y={20}
        width={640}
        height={320}
        radius={18}
        fill={C.offwhite}
        lineWidth={8}
        stroke={C.navy}
      />
      <Rect x={-210} y={-80} width={8} height={220} fill={C.navy} />
      <Rect x={210} y={-80} width={8} height={220} fill={C.navy} />
      <Rect x={0} y={-80} width={420} height={8} fill={C.navy} />
      <Rect x={0} y={40} width={420} height={8} fill={C.navy} />
      <Rect x={0} y={140} width={420} height={8} fill={C.navy} />
      {LOGOS.map((row, r) =>
        row.map((name, c) => (
          <LogoPlate name={name} x={-300 + c * 300} y={300 + r * 92} />
        )),
      )}
      <Rect
        x={400}
        y={140}
        width={220}
        height={260}
        radius={18}
        clip
        lineWidth={5}
        stroke={C.navy}
      >
        <Img src={smile} width={280} height={320} y={20} />
      </Rect>
    </Node>,
  );

  yield* collage().scale(1.03, CARD_SECONDS, linear);
});
