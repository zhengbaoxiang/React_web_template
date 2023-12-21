/*
 * @Date: 2023-12-20 19:19:58
 * @LastEditors: zbx
 * @LastEditTime: 2023-12-21 17:39:04
 * @descript: 文件描述
 */
import React from 'react';
import { Layout, Flex } from 'antd';
import { Routes, Route, Outlet, NavLink, Link } from "react-router-dom";
import "./index.less"

const { Header, Footer, Sider, Content } = Layout;

export default function layout() {

    return (
        <>
            <Layout className="layoutCon">
                <Header className="hdr">
                </Header>
                <Layout className="mainCon">
                    <Sider width="250px" className="siderCon">
                        <p>  <Link to="/">主页</Link></p>
                        <p>  <Link to="/user">子页</Link></p>
                        <p>  <Link to="/login">login</Link></p>
                        <p>  <NavLink to="/about">about</NavLink></p>
                        <p>  <NavLink to="/template">模板页</NavLink></p>
                    </Sider>
                    <Content className="mainContent bdy">
                        <Outlet />
                    </Content>
                </Layout>
                {/* <Footer >Footer</Footer> */}
            </Layout>
        </>
    )
}

