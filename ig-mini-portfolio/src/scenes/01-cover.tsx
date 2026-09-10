import {Img, Node, Rect, Txt, makeScene2D} from '@motion-canvas/2d';
import {
  all,
  createRef,
  delay,
  easeOutBack,
  easeOutCubic,
  linear,
} from '@motion-canvas/core';
import lata from '../assets/bel-geladeira-lata.jpg';
import costas from '../assets/bel-geladeira-costas.jpg';
import {BrandMark, Dots, SlideIndex} from '../chrome';
import {C, CARD_SECONDS, FONT_BODY, FONT_DISPLAY} from '../theme';

export default makeScene2D(function* (view) {
  yield document.fonts.ready;

  const photo = createRef<Img>();
  const polaroid = createRef<Rect>();
  const title = createRef<Txt>();
  const sub = createRef<Txt>();
  const sticker = createRef<Rect>();

  view.fill(C.navy);
  view.add(
    <Node>
      <Rect x={-380} y={-520} width={420} height={420} fill={C.magenta} radius={210} opacity={0.5} />
      <Rect width={1080} height={780} y={-285} clip>
        <Img ref={photo} src={lata} width={1080} height={1920} y={-40} />
      </Rect>
      <Rect width={1080} height={420} y={210} fill={C.navy} />
      <Rect
        ref={polaroid}
        x={340}
        y={-410}
        width={200}
        height={268}
        fill={C.white}
        radius={18}
        lineWidth={4}
        stroke={C.navy}
        rotation={10}
        clip
        opacity={0}
      >
        <Img src={costas} width={200} height={268} />
      </Rect>
      <BrandMark onDark />
      <SlideIndex index={1} onDark />
      <Rect
        ref={sticker}
        x={-330}
        y={155}
        rotation={-9}
        fill={C.lime}
        radius={28}
        padding={[12, 24]}
        lineWidth={3}
        stroke={C.navy}
        layout
        alignItems={'center'}
        scale={0}
      >
        <Txt
          text={'disponível'}
          fontFamily={FONT_DISPLAY}
          fontWeight={800}
          fontSize={22}
          fill={C.navy}
        />
      </Rect>
      <Txt
        ref={title}
        y={290}
        text={'Vamos criar juntas?'}
        fontFamily={FONT_DISPLAY}
        fontWeight={800}
        fontSize={88}
        fill={C.white}
        textAlign={'center'}
        width={920}
        textWrap
        opacity={0}
      />
      <Txt
        ref={sub}
        y={430}
        text={'Creator Bel  ·  UGC que vende de verdade'}
        fontFamily={FONT_BODY}
        fontWeight={500}
        fontSize={30}
        fill={C.yellow}
        opacity={0}
      />
      <Txt
        y={555}
        text={'desliza'}
        fontFamily={FONT_BODY}
        fontWeight={700}
        fontSize={18}
        fill={'#ffffff99'}
        letterSpacing={8}
      />
      <Dots index={1} onDark />
    </Node>,
  );

  yield* all(
    photo().scale(1.1, CARD_SECONDS, linear),
    polaroid().opacity(1, 0.4, easeOutCubic),
    polaroid().rotation(6, 0.55, easeOutBack),
    title().opacity(1, 0.45, easeOutCubic),
    title().y(250, 0.55, easeOutBack),
    delay(0.12, sub().opacity(1, 0.4, easeOutCubic)),
    delay(0.2, sticker().scale(1, 0.45, easeOutBack)),
  );
});
