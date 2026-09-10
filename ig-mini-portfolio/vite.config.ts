import {defineConfig} from 'vite';
import motionCanvas from '@motion-canvas/vite-plugin';
import ffmpeg from '@motion-canvas/ffmpeg';
import {agentPlugin} from './agent-plugin';

export default defineConfig({
  plugins: [
    motionCanvas({project: './src/project.ts'}),
    ffmpeg(),
    agentPlugin({screenshotDir: './screenshots'}),
  ],
  server: {
    port: 9000,
    strictPort: true,
  },
});
