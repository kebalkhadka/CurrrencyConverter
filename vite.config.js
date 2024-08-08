import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/CurrrencyConverter/', // Ensure this matches your GitHub repository name exactly
  plugins: [react()],
})
