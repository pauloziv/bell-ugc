import {Img, Node, makeScene2D} from '@motion-canvas/2d';
import {createRef, linear} from '@motion-canvas/core';
import hero from '../../../public/images/creator-bel-hero.jpg';
import {BrandMark, IndexStamp} from '../chrome';
import {HardSticker, PhotoBleed, TypePlate} from '../poster';
import {C, CARD_SECONDS} from '../theme';

export default makeScene2D(function* (view) {
  yield document.fonts.ready;
  const photo = createRef<Img>();

  view.fill(C.navy);
  view.add(
    <Node>
      <PhotoBleed
        src={hero}
        imgRef={photo}
        width={1400}
        height={2489}
        x={-70}
        y={-90}
      />
      <BrandMark onDark />
      <IndexStamp index={2} />
      <HardSticker text={'Creator Bel'} fill={C.magenta} ink={C.white} x={260} y={-40} rotation={8} />
      <TypePlate
        lines={['RECADO', 'DE AMIGA.']}
        fill={C.lime}
        fontSize={92}
        y={400}
        rotation={-3}
      />
    </Node>,
  );

  yield* photo().scale(1.08, CARD_SECONDS, linear);
});
