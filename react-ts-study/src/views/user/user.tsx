/*
 * @Date: 2023-12-20 15:39:36
 * @LastEditors: zbx
 * @LastEditTime: 2023-12-20 17:41:43
 * @descript: 文件描述
 */
import { useState } from 'react'
import './user.css'

import { Button } from 'antd';

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>User{count}</h1>
        </>
    )
}

export default App
