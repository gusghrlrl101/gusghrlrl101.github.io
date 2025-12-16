import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/resume/',
  build: {
    outDir: '../dist/resume',
    emptyOutDir: true,
  },
})
