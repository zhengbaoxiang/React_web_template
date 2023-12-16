/*
 * @Date: 2023-09-18 17:00:39
 * @LastEditors: zbx
 * @LastEditTime: 2023-09-19 09:56:15
 * @descript: 文件描述
 */

import { Routes, Route, Outlet, Link } from 'react-router-dom';

import Home from "@/views/home"

export default function Routers (){
    return (
        <Home ></Home>
    // <Routes>
        // <Route path='/home' element={ <Home/> }  />
    // </Routes>
    )
}