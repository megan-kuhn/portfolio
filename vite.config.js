import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        styleGuide: resolve(__dirname, 'style-guide/index.html'),
      },
    },
  },
})