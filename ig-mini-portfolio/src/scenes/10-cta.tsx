import {Img, Node, Rect, Txt, makeScene2D} from '@motion-canvas/2d';
import {all, createRef, linear, waitFor} from '@motion-canvas/core';
import fullbody from '../../../public/images/creator-bel-fullbody.png';
import {BrandMark, IndexStamp} from '../chrome';
import {C, CARD_SECONDS, FONT_DISPLAY} from '../theme';

export default makeScene2D(function* (view) {
  yield document.fonts.ready;
  const bel = createRef<Img>();

  view.fill(C.magenta);
  view.add(
    <Node>
      <Rect x={-430} y={-600} width={420} height={420} fill={C.yellow} radius={36} />
      <Img ref={bel} src={fullbody} x={340} y={80} width={820} height={1220} />
      <BrandMark onDark />
      <IndexStamp index={10} />
      <Txt
        x={-140}
        y={-80}
        width={640}
        textAlign={'left'}
        text={'VAMO\nGRAVAR.'}
        fontFamily={FONT_DISPLAY}
        fontWeight={800}
        fontSize={120}
        fill={C.white}
        lineHeight={114}
      />
      <Rect
        y={280}
        x={-160}
        fill={C.navy}
        radius={48}
        padding={[24, 40]}
        layout
        shadowColor={C.navy}
        shadowOffset={[8, 8]}
      >
        <Txt
          text={'WhatsApp  ·  @bel.conteudos'}
          fontFamily={FONT_DISPLAY}
          fontWeight={800}
          fontSize={28}
          fill={C.white}
        />
      </Rect>
    </Node>,
  );

  yield* all(bel().y(40, CARD_SECONDS, linear), waitFor(CARD_SECONDS));
});
