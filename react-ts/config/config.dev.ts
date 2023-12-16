/*
 * @Date: 2023-09-18 16:00:51
 * @LastEditors: zbx
 * @LastEditTime: 2023-09-18 16:09:59
 * @descript: 文件描述
 */
import { mergeConfig } from 'vite';
import baseConfig from './vite.config.base';

export default mergeConfig(
    {
        mode:'development',
        server: {
            host: '172.31.227.198',
            port: 7777,
            open: true,
            fs: {
              strict: false,
            },
            proxy: {
              '/api': {
                target: 'https://imcpftest.eastmoney.com:26060/', // IM
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
              },
            }
        }
    },
    {
        ...baseConfig,
        base: '/front', // 资源目录
        define: {
          'process.env': {
            "mode": "dev",
            "base": '/front', // 路由前缀
            "baseURL": '/api',  // 接口路径
            "serviceHost": 'http://172.31.227.198:8777',
          }
        },
    }
)