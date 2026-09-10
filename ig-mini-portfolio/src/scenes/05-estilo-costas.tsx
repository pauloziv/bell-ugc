import {Img, Node, makeScene2D} from '@motion-canvas/2d';
import {createRef, linear} from '@motion-canvas/core';
import costas from '../assets/bel-geladeira-costas.jpg';
import {BrandMark, IndexStamp} from '../chrome';
import {HardSticker, PhotoBleed, TypePlate} from '../poster';
import {C, CARD_SECONDS} from '../theme';

export default makeScene2D(function* (view) {
  yield document.fonts.ready;
  const photo = createRef<Img>();

  view.fill(C.navy);
  view.add(
    <Node>
      <PhotoBleed src={costas} imgRef={photo} width={1400} height={2563} y={10} />
      <BrandMark onDark />
      <IndexStamp index={5} />
      <HardSticker
        text={'a marca entra no dia'}
        fill={C.magenta}
        ink={C.white}
        x={280}
        y={-20}
        rotation={10}
        fontSize={26}
      />
      <TypePlate
        lines={['RUA.', 'NÃO STUDIO.']}
        fill={C.yellow}
        fontSize={88}
        y={420}
        rotation={2}
      />
    </Node>,
  );

  yield* photo().scale(1.1, CARD_SECONDS, linear);
});
