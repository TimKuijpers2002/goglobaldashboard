import React, {useState} from "react";
import {Breadcrumb, Layout, Menu} from "antd";
import {EnvironmentOutlined, HomeOutlined, InboxOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import Sider from "antd/es/layout/Sider";
const {Content, Footer, Header} = Layout;


export const Sidebar = (props) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed}
                   onCollapse={setCollapsed}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<HomeOutlined />} onClick={() => {window.location.pathname = "/"}}>
                        Home
                    </Menu.Item>
                    <Menu.Item key="2" icon={<TeamOutlined />} onClick={() => {window.location.pathname = "/Admin"}}>
                        Admins
                    </Menu.Item>
                    <Menu.Item key="3" icon={<InboxOutlined />} onClick={() => {window.location.pathname = "/LocationSubmit"}}>
                        Location submits
                    </Menu.Item>
                    <Menu.Item key="4" icon={<InboxOutlined />} onClick={() => {window.location.pathname = "/Report"}}>
                        Reports
                    </Menu.Item>
                    <Menu.Item key="5" icon={<UserOutlined />} onClick={() => {window.location.pathname = "/Profile"}}>
                        Profile
                    </Menu.Item>
                    <Menu.Item key="6" icon={<EnvironmentOutlined />} onClick={() => {window.location.pathname = "/Location"}}>
                        Locations
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>{props.name}</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        {props.data}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>By Tim Kuijpers ©2021</Footer>
            </Layout>
        </Layout>
    );
}