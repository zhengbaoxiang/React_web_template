/*
 * @Date: 2023-09-18 15:59:56
 * @LastEditors: zbx
 * @LastEditTime: 2023-09-19 10:27:40
 * @descript: 文件描述
 */
import { resolve } from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
            '@': resolve(__dirname, '../src'),
            'assets':resolve(__dirname, '../src/assets'),

            "react-router": resolve(
                __dirname,
                "node_modules/react-router/index"
              ),
             
            "react-router-dom": resolve(
                __dirname,
                "node_modules/react-router-dom/index"
              )
        },
    extensions: ['.ts','.tsx', '.js'],

  }
})
