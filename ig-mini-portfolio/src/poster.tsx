import {Img, Rect, Txt} from '@motion-canvas/2d';
import type {Reference} from '@motion-canvas/core';
import {C, FONT_DISPLAY} from './theme';

export function PhotoBleed({
  src,
  imgRef,
  width = 1280,
  height = 1920,
  x = 0,
  y = 0,
}: {
  src: string;
  imgRef?: Reference<Img>;
  width?: number;
  height?: number;
  x?: number;
  y?: number;
}) {
  return (
    <Rect width={1080} height={1350} clip>
      <Img ref={imgRef} src={src} width={width} height={height} x={x} y={y} />
    </Rect>
  );
}

export function TypePlate({
  x = 0,
  y = 390,
  rotation = -2,
  fill = C.yellow,
  ink = C.navy,
  lines,
  fontSize = 96,
}: {
  x?: number;
  y?: number;
  rotation?: number;
  fill?: string;
  ink?: string;
  lines: string[];
  fontSize?: number;
}) {
  return (
    <Rect
      x={x}
      y={y}
      rotation={rotation}
      fill={fill}
      radius={32}
      padding={[22, 40, 28, 40]}
      lineWidth={8}
      stroke={C.navy}
      shadowColor={C.navy}
      shadowOffset={[10, 10]}
      layout
      direction={'column'}
    >
      {lines.map(line => (
        <Txt
          text={line}
          fontFamily={FONT_DISPLAY}
          fontWeight={800}
          fontSize={fontSize}
          fill={ink}
          lineHeight={fontSize * 0.9}
        />
      ))}
    </Rect>
  );
}

export function HardSticker({
  text,
  fill,
  x,
  y,
  rotation = -8,
  ink = C.navy,
  fontSize = 32,
}: {
  text: string;
  fill: string;
  x: number;
  y: number;
  rotation?: number;
  ink?: string;
  fontSize?: number;
}) {
  return (
    <Rect
      x={x}
      y={y}
      rotation={rotation}
      fill={fill}
      radius={36}
      padding={[16, 30]}
      lineWidth={5}
      stroke={C.navy}
      shadowColor={C.navy}
      shadowOffset={[6, 6]}
      layout
    >
      <Txt
        text={text}
        fontFamily={FONT_DISPLAY}
        fontWeight={800}
        fontSize={fontSize}
        fill={ink}
      />
    </Rect>
  );
}
