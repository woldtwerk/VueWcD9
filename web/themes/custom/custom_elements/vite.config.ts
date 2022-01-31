import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    mkcert(),
    vue({
      customElement: true,
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.includes('-')
        }
      }
    })
  ],
  build: {
    lib: {
      entry: 'src/main.ts',
      formats: ['es'],
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
