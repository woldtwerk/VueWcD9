import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import mkcert from 'vite-plugin-mkcert'
import { tailwindHMR } from './src/api/vite-plugin-twhmr'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/themes/custom/custom_elements/dist/',
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    tailwindHMR,
    vue({
      customElement: true,
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.includes('-')
        }
      }
    }),
    mkcert(),
  ],
  build: {
    lib: {
      entry: 'src/main.ts',
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'vue.runtime.esm-browser.prod': ['vue'],
        }
      }
    },
  },
  server: {
    https: true,
    strictPort: true,
    port: 3000,
    hmr: {
      host: 'localhost',
    },
  }
})
