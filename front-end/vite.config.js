import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // URL del back-end
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // Opcional, depende de cómo configuraste las rutas
      }
    }
  }
})