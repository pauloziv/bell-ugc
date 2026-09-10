import {Img, Node, makeScene2D} from '@motion-canvas/2d';
import {createRef, linear} from '@motion-canvas/core';
import lata from '../assets/bel-geladeira-lata.jpg';
import {BrandMark, IndexStamp} from '../chrome';
import {HardSticker, PhotoBleed, TypePlate} from '../poster';
import {C, CARD_SECONDS} from '../theme';

export default makeScene2D(function* (view) {
  yield document.fonts.ready;
  const photo = createRef<Img>();

  view.fill(C.navy);
  view.add(
    <Node>
      <PhotoBleed src={lata} imgRef={photo} width={1680} height={2987} x={220} y={90} />
      <BrandMark onDark />
      <IndexStamp index={4} />
      <HardSticker text={'produto na mão'} fill={C.lime} x={-250} y={-60} rotation={-12} />
      <TypePlate
        lines={['SEM', 'ESTÚDIO.']}
        fill={C.yellow}
        fontSize={108}
        y={400}
        rotation={-3}
      />
    </Node>,
  );

  yield* photo().scale(1.1, CARD_SECONDS, linear);
});
