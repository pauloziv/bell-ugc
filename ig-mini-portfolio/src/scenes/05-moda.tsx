import {Img, makeScene2D} from '@motion-canvas/2d';
import {all, createRef, linear} from '@motion-canvas/core';
import loja from '../assets/work/kit-loja.jpg';
import estudio from '../assets/work/kit-estudio.jpg';
import hero from '../assets/work/hero.jpg';
import {WorkCard} from '../kit';
import {CARD_SECONDS} from '../theme';

export default makeScene2D(function* (view) {
  yield document.fonts.ready;
  const a = createRef<Img>();
  const b = createRef<Img>();
  const c = createRef<Img>();
  view.add(
    <WorkCard
      title={'Moda'}
      items={[
        {src: loja, brand: 'look na loja', imgRef: a},
        {src: estudio, brand: 'look no dia', imgRef: b},
        {src: hero, brand: 'selfie', imgRef: c},
      ]}
    />,
  );
  yield* all(
    a().scale(1.12, CARD_SECONDS, linear),
    b().scale(1.1, CARD_SECONDS, linear),
    c().scale(1.14, CARD_SECONDS, linear),
  );
});
