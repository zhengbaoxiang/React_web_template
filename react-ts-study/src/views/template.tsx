/*
 * @Date: 2023-12-20 15:35:59
 * @LastEditors: zbx
 * @LastEditTime: 2023-12-21 17:41:15
 * @descript: 文件描述
 */
import { useNavigate, Link } from "react-router-dom";

import { Button } from 'antd';


export default function () {
    let navigate = useNavigate();
    function loginClick() {
        console.log('click');
        navigate('/')
    }
    return (
        <main style={{ padding: "1rem " }}>
            <h2>模板文件</h2>
            <p>
                <Link to="/">返回主页</Link>
            </p>
            <Button onClick={loginClick}>返回主页</Button>
        </main>
    )
}