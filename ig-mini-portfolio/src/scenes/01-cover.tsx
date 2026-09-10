import {Img, Node, makeScene2D} from '@motion-canvas/2d';
import {createRef, linear} from '@motion-canvas/core';
import smile from '../assets/work/kit-smile.jpg';
import lata from '../assets/bel-geladeira-lata.jpg';
import {Cursor, Folder, Polaroid} from '../kit';
import {CARD_SECONDS} from '../theme';

export default makeScene2D(function* (view) {
  yield document.fonts.ready;
  const photo = createRef<Img>();

  view.add(
    <Node>
      <Img ref={photo} src={smile} width={1480} height={1860} y={40} />
      <Folder handle={'@bel.conteudos'} />
      <Polaroid src={lata} x={-390} y={430} rotation={-14} />
      <Cursor x={430} y={560} />
    </Node>,
  );

  yield* photo().scale(1.08, CARD_SECONDS, linear);
});
