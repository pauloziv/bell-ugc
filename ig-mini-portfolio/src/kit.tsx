import {Circle, Img, Line, Node, Rect, Txt} from '@motion-canvas/2d';
import type {Reference} from '@motion-canvas/core';
import {C, FONT_BODY, FONT_DISPLAY} from './theme';

export function Dots({
  fill = C.yellow,
  opacity = 0.4,
  originY = -620,
}: {
  fill?: string;
  opacity?: number;
  originY?: number;
}) {
  const dots = [];
  for (let r = 0; r < 10; r++) {
    for (let c = 0; c < 9; c++) {
      dots.push(
        <Circle
          x={-480 + c * 120}
          y={originY + r * 140}
          width={22}
          height={22}
          fill={fill}
          opacity={opacity}
        />,
      );
    }
  }
  return <Node>{dots}</Node>;
}

export function Phone({
  src,
  x,
  y,
  rotation = 0,
  imgRef,
}: {
  src: string;
  x: number;
  y: number;
  rotation?: number;
  imgRef: Reference<Img>;
}) {
  return (
    <Rect
      x={x}
      y={y}
      rotation={rotation}
      width={292}
      height={530}
      radius={42}
      fill={'#0E0E12'}
      lineWidth={10}
      stroke={C.navy}
      clip
    >
      <Img ref={imgRef} src={src} width={360} height={640} y={10} />
      <Rect y={-248} width={72} height={8} radius={4} fill={'#ffffff'} opacity={0.88} />
      <Rect y={242} width={150} height={6} radius={3} fill={'#ffffff'} opacity={0.75} />
    </Rect>
  );
}

export function WorkCard({
  title,
  items,
}: {
  title: string;
  items: {src: string; brand: string; imgRef: Reference<Img>}[];
}) {
  const xs = [-340, 0, 340];
  const rots = [-3.5, 1.8, 3.2];
  return (
    <Node>
      <Rect width={1080} height={1350} fill={C.offwhite} />
      <Rect width={1080} height={520} y={-415} fill={C.navy} />
      <Dots fill={C.yellow} opacity={0.42} originY={-640} />
      <Dots fill={C.magenta} opacity={0.18} originY={80} />
      <Txt
        y={-430}
        text={title}
        fontFamily={FONT_DISPLAY}
        fontWeight={800}
        fontSize={title.length > 12 ? 72 : 92}
        fill={C.yellow}
      />
      {items.map((item, i) => (
        <Node>
          <Phone
            src={item.src}
            x={xs[i]}
            y={20}
            rotation={rots[i]}
            imgRef={item.imgRef}
          />
          <Txt
            x={xs[i]}
            y={340}
            text={item.brand}
            fontFamily={FONT_BODY}
            fontWeight={700}
            fontSize={24}
            fill={C.navy}
          />
        </Node>
      ))}
      <Txt
        y={560}
        text={'content'}
        fontFamily={FONT_DISPLAY}
        fontWeight={800}
        fontSize={110}
        fill={C.navy}
      />
    </Node>
  );
}

export function Folder({handle}: {handle: string}) {
  const dots = [];
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 9; c++) {
      dots.push(
        <Circle
          x={-320 + c * 80}
          y={-180 + r * 72}
          width={18}
          height={22}
          fill={C.magenta}
          opacity={0.42}
        />,
      );
    }
  }
  return (
    <Node y={280}>
      <Rect y={-278} width={700} height={80} fill={C.offwhite} radius={10} />
      <Rect y={-298} x={16} width={680} height={80} fill={'#FFF6C8'} radius={10} />
      <Rect
        x={-240}
        y={-252}
        width={220}
        height={70}
        fill={C.yellow}
        radius={16}
        lineWidth={6}
        stroke={C.navy}
      />
      <Circle x={-308} y={-252} width={28} height={28} fill={C.offwhite} lineWidth={5} stroke={C.navy} />
      <Rect width={800} height={560} fill={C.yellow} radius={20} lineWidth={6} stroke={C.navy} clip>
        <Node>{dots}</Node>
      </Rect>
      <Txt
        y={-90}
        rotation={-8}
        text={'mini'}
        fontFamily={FONT_DISPLAY}
        fontWeight={800}
        fontSize={58}
        fill={C.magenta}
      />
      <Txt
        y={20}
        text={'PORT'}
        fontFamily={FONT_DISPLAY}
        fontWeight={800}
        fontSize={100}
        fill={C.navy}
      />
      <Txt
        y={112}
        text={'FÓLIO'}
        fontFamily={FONT_DISPLAY}
        fontWeight={800}
        fontSize={100}
        fill={C.navy}
      />
      <Txt
        y={198}
        text={handle}
        fontFamily={FONT_DISPLAY}
        fontWeight={800}
        fontSize={32}
        fill={C.navy}
      />
      <Rect y={270} width={480} height={56} fill={C.white} radius={40} lineWidth={5} stroke={C.navy} />
    </Node>
  );
}

export function Polaroid({
  src,
  x,
  y,
  rotation,
}: {
  src: string;
  x: number;
  y: number;
  rotation: number;
}) {
  return (
    <Rect
      x={x}
      y={y}
      rotation={rotation}
      width={210}
      height={248}
      fill={C.white}
      radius={8}
      lineWidth={5}
      stroke={C.navy}
      clip
    >
      <Img src={src} width={210} height={200} y={-18} />
    </Rect>
  );
}

export function Cursor({x, y}: {x: number; y: number}) {
  return (
    <Line
      x={x}
      y={y}
      points={[
        [0, 0],
        [0, 64],
        [18, 48],
        [32, 78],
        [42, 72],
        [26, 42],
        [48, 42],
      ]}
      closed
      fill={C.white}
      stroke={C.navy}
      lineWidth={5}
    />
  );
}

export function LogoPlate({
  name,
  x,
  y,
}: {
  name: string;
  x: number;
  y: number;
}) {
  return (
    <Rect
      x={x}
      y={y}
      width={210}
      height={76}
      fill={C.white}
      radius={40}
      lineWidth={4}
      stroke={C.navy}
      layout
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Txt
        text={name}
        fontFamily={FONT_DISPLAY}
        fontWeight={800}
        fontSize={22}
        fill={C.navy}
      />
    </Rect>
  );
}
