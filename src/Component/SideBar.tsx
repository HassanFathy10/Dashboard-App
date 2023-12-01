import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    FaUsers,
    FaHome,
    FaRegCalendarCheck,
    FaShareAlt,
    FaRegFileAlt,
    FaArrowAltCircleLeft,
    FaArrowAltCircleRight,
    FaMap 
} from "react-icons/fa";
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
                        defaultSelectedKeys={['2']}
                        className='min-vh-100'
                    >
                        <Menu.Item key="1" style={{ height: '150px' }} className='mb-2 mt-5'>
                            <ul className='list-unstyled text-center'>
                               <li><img alt="" height='50' src={process.env.PUBLIC_URL + '/assets/images/01.png'} /></li> 
                               <li><span className='fw-medium'>Hassan</span></li> 
                            </ul>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<FaHome className='fs-4' />}>
                            <Link to="/" className='text-decoration-none'>Home</Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<FaUsers className='fs-4' />}>
                            <Link to="/Option2" className='text-decoration-none'>DashBoard</Link>
                        </Menu.Item>
                        <Menu.Item key="4" icon={<FaRegCalendarCheck className='fs-4' />}>
                            <Link to="/Events" className='text-decoration-none'>Calendar</Link>
                        </Menu.Item>
                        <Menu.Item key="5" icon={<FaShareAlt className='fs-4' />}>
                            <Link to="/Candidate/1" className='text-decoration-none'>Candidate</Link>
                        </Menu.Item>
                        <Menu.Item key="6" icon={<FaRegFileAlt className='fs-4' />}>
                            <Link to="/Repo" className='text-decoration-none'>Reports</Link>
                        </Menu.Item>
                        <Menu.Item key="8" icon={<FaMap className='fs-4' />}>
                            <Link to="/GeographyChart" className='text-decoration-none'>Geography Chart</Link>
                        </Menu.Item>
                        <Menu.Item
                            key="toggle"
                            icon={collapsed ? <FaArrowAltCircleRight className='fs-4' /> : <FaArrowAltCircleLeft className='fs-4' />}
                            onClick={() => setCollapsed(!collapsed)} />
                    </Menu>
                </Sider>
            </Layout>
        </article>
    );
};
