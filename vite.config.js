import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
=======
  base: '/Risk-Resilience/',
>>>>>>> 7d34d15706e3b25335c6766b745ce64d93514324
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // 添加这个配置
  server: {
    favicon: false
  }
})