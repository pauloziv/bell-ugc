import {makeProject} from '@motion-canvas/core';
import {agentClient} from './agent-client';
import cover from './scenes/01-cover?scene';
import quem from './scenes/02-quem?scene';
import nichos from './scenes/03-nichos?scene';
import lata from './scenes/04-estilo-lata?scene';
import costas from './scenes/05-estilo-costas?scene';
import formatos from './scenes/06-formatos?scene';
import marcas from './scenes/07-marcas?scene';
import processo from './scenes/08-processo?scene';
import pacotes from './scenes/09-pacotes?scene';
import cta from './scenes/10-cta?scene';
import './global.css';

export default makeProject({
  name: 'ig-mini-portfolio',
  experimentalFeatures: true,
  plugins: [agentClient()],
  scenes: [cover, quem, nichos, lata, costas, formatos, marcas, processo, pacotes, cta],
});
