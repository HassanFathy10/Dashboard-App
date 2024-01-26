import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
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
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 840);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <article className=''>
            {isMobile ? (
                <article className=''>
                    {/* Mobile Navbar */}
                    <Navbar fixed="top" bg="dark" expand='lg' data-bs-theme="dark">
                        <Container>
                            <Link to='/' className='fs-3 fw-bold text-warning text-decoration-none'><span className='text-primary'>HF</span> Dashboard</Link>
                            <span className='ms-auto'>
                                <img alt="" height='50' src={process.env.PUBLIC_URL + '/assets/images/01.png'} />
                            </span>
                            <Navbar.Toggle className='ms-4' aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav className="d-flex align-items-center lh-lg">
                                    <Nav.Item>
                                        <Link to="/" className='text-decoration-none'>Home</Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Link to="/Option2" className='text-decoration-none'>DashBoard</Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Link to="/Events" className='text-decoration-none'>Calendar</Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Link to="/Candidate/1" className='text-decoration-none'>Candidate</Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Link to="/Repo" className='text-decoration-none'>Reports</Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Link to="/GeographyChart" className='text-decoration-none'>Geography Chart</Link>
                                    </Nav.Item>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </article>
            ) : (
                <Layout className='position-fixed sticky-top'>
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
            )}
        </article>
    );
};
