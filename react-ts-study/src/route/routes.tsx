/*
 * @Date: 2023-12-20 19:53:11
 * @LastEditors: zbx
 * @LastEditTime: 2023-12-21 17:20:08
 * @descript: 文件描述
 */
/*
 * @Date: 2023-09-19 14:02:55
 * @LastEditors: zbx
 * @LastEditTime: 2023-10-17 15:47:44
 * @descript: 文件描述
 */
import { useState, Suspense, lazy } from 'react';


const Home =lazy (()=>import("@/views/home/home") )
const User =lazy (()=>import("@/views/user/user") )


export default [
    {
        // index:true,  // 索引路由可以被认为是“默认子路由”
        path: '/',  // 使用索引路由，则需要path 为 / 比较好
        name: 'home', 
        meta: {
            title:'主页2'
        },
        element: <Suspense fallback={<></>}><Home /> </Suspense>
    },
    {
        path: '/user',
        name: 'user',
        meta: {
            title:'用户列表'
        },
        element:<Suspense fallback={<></>}><User /> </Suspense>
    },
]