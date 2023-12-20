/*
 * @Date: 2023-12-20 15:15:07
 * @LastEditors: zbx
 * @LastEditTime: 2023-12-20 15:52:54
 * @descript: 文件描述
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
})
