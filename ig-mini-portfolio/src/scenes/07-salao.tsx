import {Img, makeScene2D} from '@motion-canvas/2d';
import {all, createRef, linear} from '@motion-canvas/core';
import ferrari from '../assets/work/ferrari.jpg';
import salao from '../assets/work/kit-salao.jpg';
import estudio from '../assets/work/kit-estudio.jpg';
import {WorkCard} from '../kit';
import {CARD_SECONDS} from '../theme';

export default makeScene2D(function* (view) {
  const a = createRef<Img>();
  const b = createRef<Img>();
  const c = createRef<Img>();
  view.add(
    <WorkCard
      title={'Salão'}
      items={[
        {src: ferrari, brand: 'ferrari hair', imgRef: a},
        {src: salao, brand: 'no salão', imgRef: b},
        {src: estudio, brand: 'cabelo no dia', imgRef: c},
      ]}
    />,
  );
  yield* all(
    a().scale(1.12, CARD_SECONDS, linear),
    b().scale(1.1, CARD_SECONDS, linear),
    c().scale(1.14, CARD_SECONDS, linear),
  );
});
