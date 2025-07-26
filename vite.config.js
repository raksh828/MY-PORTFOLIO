import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/MY-PORTFOLIO/",  // replace with your repo name
  plugins: [react()],
})