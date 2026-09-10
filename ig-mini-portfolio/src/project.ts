import {makeProject} from '@motion-canvas/core';
import {agentClient} from './agent-client';
import cover from './scenes/01-cover?scene';
import marcas from './scenes/02-marcas?scene';
import beleza from './scenes/03-beleza?scene';
import indicacoes from './scenes/04-indicacoes?scene';
import moda from './scenes/05-moda?scene';
import ads from './scenes/06-ads?scene';
import salao from './scenes/07-salao?scene';
import vida from './scenes/08-vida?scene';
import rua from './scenes/09-rua?scene';
import cta from './scenes/10-cta?scene';
import './global.css';

export default makeProject({
  name: 'ig-mini-portfolio',
  experimentalFeatures: true,
  plugins: [agentClient()],
  scenes: [cover, marcas, beleza, indicacoes, moda, ads, salao, vida, rua, cta],
});
