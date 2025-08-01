import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    target: 'es2020'
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
})