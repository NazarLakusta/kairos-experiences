import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Relative base so the build works on GitHub Pages (project or user site).
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
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
