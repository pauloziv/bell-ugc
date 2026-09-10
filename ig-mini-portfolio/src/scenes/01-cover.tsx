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
      <PhotoBleed src={lata} imgRef={photo} width={1300} height={2311} y={50} />
      <BrandMark onDark />
      <IndexStamp index={1} />
      <HardSticker text={'é indicação'} fill={C.lime} x={-240} y={80} />
      <TypePlate lines={['NÃO É', 'ANÚNCIO.']} fontSize={108} y={410} />
    </Node>,
  );

  yield* photo().scale(1.1, CARD_SECONDS, linear);
});
