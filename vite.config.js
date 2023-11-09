import {defineConfig} from 'vite';
import {resolve} from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'fromAgolTiles.mjs'),
      name: 'from-agol-tiles',
      fileName: 'fromAgolTiles'
    }
  },
  test: {
    environment: 'happy-dom'
  }
});

