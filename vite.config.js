import {defineConfig} from 'vite';
import {resolve} from 'path'

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'fromAgolTiles.mjs'),
      name: 'from-agol-tiles',
      fileName: 'fromAgolTiles'
    }
  },
  test: {
    environment: 'happy-dom'
  }
});

