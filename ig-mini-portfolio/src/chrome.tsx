import {Layout, Rect, Txt} from '@motion-canvas/2d';
import {C, FONT_DISPLAY} from './theme';

export function BrandMark({onDark = false, x = -390, y = -605}: {onDark?: boolean; x?: number; y?: number}) {
  const ink = onDark ? C.white : C.navy;
  return (
    <Layout layout x={x} y={y} alignItems={'center'} gap={10}>
      <Txt text={'Bel'} fontFamily={FONT_DISPLAY} fontWeight={800} fontSize={36} fill={ink} />
      <Rect
        fill={C.lime}
        radius={40}
        padding={[8, 14]}
        lineWidth={4}
        stroke={C.navy}
        layout
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Txt
          text={'UGC'}
          fontFamily={FONT_DISPLAY}
          fontWeight={800}
          fontSize={16}
          fill={C.navy}
          letterSpacing={3}
        />
      </Rect>
    </Layout>
  );
}

export function IndexStamp({index}: {index: number}) {
  return (
    <Rect
      x={400}
      y={-605}
      fill={C.lime}
      radius={18}
      padding={[10, 22]}
      lineWidth={4}
      stroke={C.navy}
      layout
    >
      <Txt
        text={String(index).padStart(2, '0')}
        fontFamily={FONT_DISPLAY}
        fontWeight={800}
        fontSize={32}
        fill={C.navy}
      />
    </Rect>
  );
}

export function Sticker({
  text,
  fill,
  x,
  y,
  rotation = 8,
  ink = C.navy,
  fontSize = 28,
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
      radius={32}
      padding={[16, 28]}
      lineWidth={4}
      stroke={C.navy}
      layout
      alignItems={'center'}
      justifyContent={'center'}
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
