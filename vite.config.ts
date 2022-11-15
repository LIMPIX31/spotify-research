import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), path()],
  server: {
    port: 3000,
  },
})
