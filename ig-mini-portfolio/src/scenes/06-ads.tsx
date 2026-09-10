import {Img, makeScene2D} from '@motion-canvas/2d';
import {all, createRef, linear} from '@motion-canvas/core';
import lata from '../assets/bel-geladeira-lata.jpg';
import ferrari from '../assets/work/ferrari.jpg';
import creamy from '../assets/work/creamy.jpg';
import {WorkCard} from '../kit';
import {CARD_SECONDS} from '../theme';

export default makeScene2D(function* (view) {
  yield document.fonts.ready;
  const a = createRef<Img>();
  const b = createRef<Img>();
  const c = createRef<Img>();
  view.add(
    <WorkCard
      title={'Video ads'}
      items={[
        {src: lata, brand: 'produto', imgRef: a},
        {src: ferrari, brand: 'serviço', imgRef: b},
        {src: creamy, brand: 'skincare', imgRef: c},
      ]}
    />,
  );
  yield* all(
    a().scale(1.12, CARD_SECONDS, linear),
    b().scale(1.1, CARD_SECONDS, linear),
    c().scale(1.14, CARD_SECONDS, linear),
  );
});
