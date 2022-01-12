import React, {useState} from "react";
import {NavLink } from "react-router-dom";
import {Breadcrumb, Layout, Menu} from "antd";
import {EnvironmentOutlined, HomeOutlined, InboxOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import Sider from "antd/es/layout/Sider";
const {Content, Footer, Header} = Layout;


export function Sidebar(props) {

    const [collapsed, setCollapsed] = useState(false);
    // const sideBarMenuKey = useSelector(
    //     state => state.currentComponetReducer.sideBarMenuItemKey
    //   );

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed}
                   onCollapse={setCollapsed}>
                <div className="logo" />
                <Menu theme="dark" selectedKeys ={['1']} mode="inline">
                    <Menu.Item key="1" icon={<HomeOutlined />}>
                    <NavLink to="/">Home</NavLink>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<TeamOutlined />}>
                    <NavLink to="/Admin">Admins</NavLink>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<InboxOutlined />}>
                    <NavLink to="/LocationSubmit">Location submits</NavLink>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<InboxOutlined />}>
                    <NavLink to="/Report">Reports</NavLink>
                    </Menu.Item>
                    <Menu.Item key="5" icon={<UserOutlined />}>
                    <NavLink to="/Profile">Profile</NavLink>
                    </Menu.Item>
                    <Menu.Item key="6" icon={<EnvironmentOutlined />}>
                    <NavLink to="/Location">Locations</NavLink>
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