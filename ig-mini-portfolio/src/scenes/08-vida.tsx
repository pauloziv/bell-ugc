import {Img, makeScene2D} from '@motion-canvas/2d';
import {all, createRef, linear} from '@motion-canvas/core';
import smile from '../assets/work/kit-smile.jpg';
import loja from '../assets/work/kit-loja.jpg';
import costas from '../assets/bel-geladeira-costas.jpg';
import {WorkCard} from '../kit';
import {CARD_SECONDS} from '../theme';

export default makeScene2D(function* (view) {
  const a = createRef<Img>();
  const b = createRef<Img>();
  const c = createRef<Img>();
  view.add(
    <WorkCard
      title={'Vida real'}
      items={[
        {src: smile, brand: 'rosto', imgRef: a},
        {src: loja, brand: 'na rua', imgRef: b},
        {src: costas, brand: 'gesto', imgRef: c},
      ]}
    />,
  );
  yield* all(
    a().scale(1.12, CARD_SECONDS, linear),
    b().scale(1.1, CARD_SECONDS, linear),
    c().scale(1.14, CARD_SECONDS, linear),
  );
});
