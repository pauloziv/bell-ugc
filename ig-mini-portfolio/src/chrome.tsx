import {Circle, Layout, Rect, Txt} from '@motion-canvas/2d';
import {C, FONT_BODY, FONT_DISPLAY} from './theme';

export function BrandMark({onDark = false, x = -400, y = -602}: {onDark?: boolean; x?: number; y?: number}) {
  const ink = onDark ? C.white : C.navy;
  return (
    <Layout layout x={x} y={y} alignItems={'center'} gap={10}>
      <Txt text={'Bel'} fontFamily={FONT_DISPLAY} fontWeight={800} fontSize={40} fill={ink} />
      <Rect
        fill={C.lime}
        radius={40}
        padding={[8, 14]}
        lineWidth={3}
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

export function SlideIndex({index, onDark = false}: {index: number; onDark?: boolean}) {
  return (
    <Txt
      x={400}
      y={-602}
      text={`${String(index).padStart(2, '0')} / 10`}
      fontFamily={FONT_BODY}
      fontWeight={700}
      fontSize={22}
      fill={onDark ? C.white : C.navy}
      letterSpacing={2}
    />
  );
}

export function Dots({index, onDark = false}: {index: number; onDark?: boolean}) {
  return (
    <Layout layout y={618} gap={10} alignItems={'center'}>
      {Array.from({length: 10}, (_, i) => (
        <Circle
          width={i === index - 1 ? 18 : 11}
          height={i === index - 1 ? 18 : 11}
          fill={i === index - 1 ? C.lime : onDark ? '#ffffff44' : '#1A1A2E22'}
          stroke={C.navy}
          lineWidth={2}
        />
      ))}
    </Layout>
  );
}

export function Sticker({
  text,
  fill,
  x,
  y,
  rotation = 8,
}: {
  text: string;
  fill: string;
  x: number;
  y: number;
  rotation?: number;
}) {
  return (
    <Rect
      x={x}
      y={y}
      rotation={rotation}
      fill={fill}
      radius={28}
      padding={[12, 22]}
      lineWidth={3}
      stroke={C.navy}
      layout
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Txt
        text={text}
        fontFamily={FONT_DISPLAY}
        fontWeight={800}
        fontSize={22}
        fill={C.navy}
      />
    </Rect>
  );
}
