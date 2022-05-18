import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://tichdaen.github.io/tichdaen.io/',
  plugins: [react()]
})

// TODO: Main Branch Push => gh-pages deploy 실행