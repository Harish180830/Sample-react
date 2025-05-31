import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ['5173-harish180830-sample-reac-wdgdns7rbp.app.codeanywhere.com'],
  },
  plugins: [react(),tailwindcss()],
})
