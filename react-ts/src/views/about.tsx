/*
 * @Date: 2023-09-18 16:12:08
 * @LastEditors: zbx
 * @LastEditTime: 2023-11-17 16:47:20
 * @descript: 文件描述
 */
import { useState } from 'react'

export default function About(){
  const [count, setCount] = useState(0)
    return (
        <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
            </button>
            <p>
            Edit <code>src/App.tsx</code> and save to test HMR
            </p>
      </div>
    )
}