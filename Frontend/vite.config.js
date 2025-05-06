import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // ← this is what exposes it to the local network
    port: 5173,       // (optional) customize port if needed
  },
})
