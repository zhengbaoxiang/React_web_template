import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import { useState } from 'react'

// 使用 JSX 时
import Home from "@/views/home/home";
import Template from "@/views/template";
import Login from "@/views/login/login";
import About from "@/views/about/about";
// 喜欢基于 JavaScript 对象的路由配置
import { Router } from '@/route/index'



import { Button } from 'antd';


function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Button type="primary" onClick={() => setCount((count) => count + 1)}>Button-{count}</Button>

            <BrowserRouter>
                <div>
                    <h1>Bookkeeper</h1>
                   
                    <Router />
                    <hr />
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="template" element={<Template />}></Route>
                        <Route path="about" element={<About />}></Route>
                    </Routes>

                </div>
            </BrowserRouter>

        </>
    )
}

export default App
