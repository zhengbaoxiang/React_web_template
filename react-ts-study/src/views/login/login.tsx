/*
 * @Date: 2023-09-19 13:09:49
 * @LastEditors: zbx
 * @LastEditTime: 2023-12-20 17:59:13
 * @descript: 文件描述
 */
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./index.less"

import { Button } from 'antd';

export default function () {
    let navigate = useNavigate();
    function loginClick() {
        console.log('click');
        navigate('/home')
    }

    return (
        < >
            <div className="loginCon">
                <h1>login页</h1>
                <Link to="/">返回主页</Link>
                <Button onClick={loginClick}>登录成功跳转</Button>
            </div>
        </>
    )
}
