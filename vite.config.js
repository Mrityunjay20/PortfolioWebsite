import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { sites } from '@openai/sites-vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sites()],
  server: {
    proxy: {
      '/spline-proxy': {
        target: 'https://prod.spline.design',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/spline-proxy/, ''),
      },
    },
  },
})
