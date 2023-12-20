/*
 * @Date: 2023-12-20 15:15:07
 * @LastEditors: zbx
 * @LastEditTime: 2023-12-20 17:26:45
 * @descript: 文件描述
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// 貌似不支持全部引入，只能按需加载？还要插件？

import './index.less'

ReactDOM.createRoot(document.getElementById('root')!).render(
    // 这个严格模式，会使constructor 和 componentDidMount 都执行两次
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
