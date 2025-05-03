import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Make sure repo name is correct
export default defineConfig({
  plugins: [react()],
  base: '/FitPro-Demo2/',
})