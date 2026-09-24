import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Project site on GitHub Pages: https://nazarlakusta.github.io/kairos-experiences/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/kairos-experiences/',
  server: {
    host: '0.0.0.0',
    port: 43127,
    strictPort: true,
  },
  preview: {
    host: '0.0.0.0',
    port: 43127,
    strictPort: true,
  },
})
