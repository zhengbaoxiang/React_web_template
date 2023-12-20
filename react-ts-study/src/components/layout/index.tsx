/*
 * @Date: 2023-12-20 19:19:58
 * @LastEditors: zbx
 * @LastEditTime: 2023-12-20 19:57:19
 * @descript: 文件描述
 */
import React from 'react';
import { Layout, Flex } from 'antd';
import { Routes, Route, Outlet, NavLink, Link } from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout;

export default function layout() {

    return (
        <>
            <Layout className="layoutCon">
                <Header className="hdr">
                </Header>
                <Layout className="mainCon">
                    <Sider width="25%" >
                        <nav
                            style={{
                                borderBottom: "solid 1px",
                                paddingBottom: "1rem"
                            }}
                        >
                            <Link to="/">home</Link> |{" "}
                            <Link to="/home">home2</Link> |{" "}
                            <Link to="/user">home2</Link> |{" "}
                            <Link to="/login">login</Link> |{" "}
                            <Link to="/template">template</Link> |{" "}
                            <NavLink to="/about">about</NavLink>
                        </nav>
                    </Sider>
                    <Content className="mainContent bdy">
                        <Outlet />
                    </Content>
                </Layout>
                <Footer >Footer</Footer>
            </Layout>
        </>
    )
}

