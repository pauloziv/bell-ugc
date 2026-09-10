import {Circle, Img, Node, Rect, Txt, makeScene2D} from '@motion-canvas/2d';
import {createRef, linear} from '@motion-canvas/core';
import beleza from '../assets/work/kit-beleza.jpg';
import creamy from '../assets/work/creamy.jpg';
import smile from '../assets/work/kit-smile.jpg';
import {Dots, LogoPlate} from '../kit';
import {C, CARD_SECONDS, FONT_BODY, FONT_DISPLAY} from '../theme';

const PLATES: {name: string; x: number; y: number}[] = [
  {name: 'Creamy', x: -310, y: 210},
  {name: 'Skelt', x: 0, y: 210},
  {name: 'Natura', x: 310, y: 210},
  {name: 'Farm', x: -310, y: 310},
  {name: 'Granado', x: 0, y: 310},
  {name: 'Boticário', x: 310, y: 310},
  {name: 'Havaianas', x: -310, y: 410},
  {name: 'Muvon', x: 0, y: 410},
  {name: 'Ferrari', x: 310, y: 410},
];

export default makeScene2D(function* (view) {
  const collage = createRef<Node>();

  view.fill(C.offwhite);
  view.add(
    <Node ref={collage}>
      <Dots fill={C.navy} opacity={0.14} />
      {Array.from({length: 12}, (_, i) => (
        <Circle x={-500} y={-620 + i * 110} width={26} height={26} fill={C.navy} />
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
        y={-478}
        text={'com quem eu já gravei'}
        fontFamily={FONT_BODY}
        fontWeight={500}
        fontSize={32}
        fill={C.magenta}
      />
      <Rect
        x={-340}
        y={-250}
        rotation={-8}
        width={220}
        height={260}
        radius={18}
        clip
        lineWidth={5}
        stroke={C.navy}
      >
        <Img src={beleza} width={260} height={300} />
      </Rect>
      <Rect
        x={340}
        y={-270}
        rotation={8}
        width={200}
        height={240}
        radius={18}
        clip
        lineWidth={5}
        stroke={C.navy}
      >
        <Img src={creamy} width={240} height={280} />
      </Rect>
      <Rect
        x={0}
        y={-40}
        width={240}
        height={280}
        radius={18}
        clip
        lineWidth={5}
        stroke={C.navy}
      >
        <Img src={smile} width={280} height={340} y={20} />
      </Rect>
      {PLATES.map((p) => (
        <LogoPlate name={p.name} x={p.x} y={p.y} />
      ))}
    </Node>,
  );

  yield* collage().scale(1.03, CARD_SECONDS, linear);
});
