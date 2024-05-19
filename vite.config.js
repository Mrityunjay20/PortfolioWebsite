import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
