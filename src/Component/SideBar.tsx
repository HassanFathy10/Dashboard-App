import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Styles from './style.module.css';
import {
    FaUsers,
    FaHome,
    FaRegCalendarCheck,
    FaShareAlt,
    FaRegUserCircle,
    FaRegFileAlt,
    FaHeart,
    FaArrowAltCircleLeft,
    FaArrowAltCircleRight
} from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { Layout, Menu } from 'antd';
const { Sider } = Layout;

export default function SideBar() {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <article>
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed} className='d-flex justify-content-center'>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        className='min-vh-100'
                    >
                        <Menu.Item key="1" className='mb-5' icon={<FaRegUserCircle className='fs-4' />}>
                            <Link to="/" className='text-decoration-none'>Hassan Fathy</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<FaHome className='fs-4' />}>
                            <Link to="/" className='text-decoration-none'>Home</Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<FaUsers className='fs-4' />}>
                            <Link to="/Option2" className='text-decoration-none'>DashBoard</Link>
                        </Menu.Item>
                        <Menu.Item key="4" icon={<FaRegCalendarCheck className='fs-4' />}>
                            <Link to="/" className='text-decoration-none'>nav 3</Link>
                        </Menu.Item>
                        <Menu.Item key="5" icon={<FaShareAlt className='fs-4' />}>
                            <Link to="/" className='text-decoration-none'>nav 3</Link>
                        </Menu.Item>
                        <Menu.Item key="6" icon={<FaRegFileAlt className='fs-4' />}>
                            <Link to="/" className='text-decoration-none'>nav 3</Link>
                        </Menu.Item>
                        <Menu.Item key="7" icon={<FaHeart className='fs-4' />}>
                            <Link to="/" className='text-decoration-none'>nav 3</Link>
                        </Menu.Item>
                        <Menu.Item key="8" icon={<IoMdSettings className='fs-4' />}>
                            <Link to="/" className='text-decoration-none'>nav 3</Link>
                        </Menu.Item>
                        <Menu.Item
                            icon={collapsed ? <FaArrowAltCircleRight className='fs-4' /> : <FaArrowAltCircleLeft className='fs-4' />}
                            onClick={() => setCollapsed(!collapsed)}>
                        </Menu.Item>
                        <Menu.Item key="9" className='position-absolute bottom-0 mb-5' icon={<FaRegUserCircle className='fs-4' />}>
                            <Link to="/" className='text-decoration-none'>nav 3</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
            </Layout>
        </article>
    );
};
