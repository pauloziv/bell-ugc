import {Img, Node, Rect, makeScene2D} from '@motion-canvas/2d';
import {createRef, linear} from '@motion-canvas/core';
import smile from '../assets/work/kit-smile.jpg';
import lata from '../assets/bel-geladeira-lata.jpg';
import {Cursor, Folder, Polaroid} from '../kit';
import {CARD_SECONDS} from '../theme';

export default makeScene2D(function* (view) {
  const photo = createRef<Img>();

  view.add(
    <Node>
      <Rect width={1080} height={1350} clip>
        <Img ref={photo} src={smile} width={1680} height={2100} x={-80} y={-280} />
      </Rect>
      <Folder handle={'@bel.conteudos'} />
      <Polaroid src={lata} x={-390} y={500} rotation={-14} />
      <Cursor x={430} y={580} />
    </Node>,
  );

  yield* photo().scale(1.08, CARD_SECONDS, linear);
});
