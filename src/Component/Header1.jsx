import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Nav, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import * as Unicons from '@iconscout/react-unicons';
import Styles from './style.module.css';


export default function Header1() {
    return (
        <Navbar expand="lg" className="mx-4 mt-4 pt-3 pb-5 sticky-top">
            <article className='d-flex flex-column'>
                <span className={`fw-bolder fs-5 ${Styles.font}`} href="#home">
                    London Internship Program
                </span>
                <span className='fw-light'>Londan</span>
            </article>
            <Navbar.Toggle className='m-1' aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='mb-4 ms-auto'>
                    <Dropdown>
                        <Dropdown.Toggle variant="white" className={`fw-bolder ${Styles.font}`} id="dropdown-basic">
                            Opportunity Browsing
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item className='p-3 fw-bolder' href="#/action-1">Applied</Dropdown.Item>
                            <Dropdown.Item className='p-3 fw-bolder' href="#/action-2">Shortlisted</Dropdown.Item>
                            <Dropdown.Item className='p-3 fw-bolder' href="#/action-3">Technical Interview</Dropdown.Item>
                            <Dropdown.Item className='p-3 fw-bolder' href="#/action-3">Opportunity Browsing</Dropdown.Item>
                            <Dropdown.Item className='p-3 fw-bolder' href="#/action-3">Video Interview I</Dropdown.Item>
                            <Dropdown.Item className='p-3 fw-bolder' href="#/action-3">Video Interview II</Dropdown.Item>
                            <Dropdown.Item className='p-3 fw-bolder' href="#/action-3">Video Interview III</Dropdown.Item>
                            <Dropdown.Item className='p-3 fw-bolder' href="#/action-3">Offer</Dropdown.Item>
                            <Dropdown.Item className='p-3 fw-bolder' href="#/action-3">Withdrawn</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
                <article className='d-flex ms-auto  mb-4'>
                    <Nav.Link className={`p-2 ${Styles.link}`} href="#link"><Unicons.UilTagAlt /></Nav.Link>
                    <Nav.Link className={`p-2 ${Styles.link}`} href="#link"><Unicons.UilUserTimes /></Nav.Link>
                    <Nav.Link className={`p-2 ${Styles.link}`} href="#link"><Unicons.UilUserCheck /></Nav.Link>
                    <Nav.Link className={`p-2 ${Styles.link}`} href="#link"><Unicons.UilEnvelope /></Nav.Link>
                </article>
                <Dropdown as={ButtonGroup} className='ms-auto mb-4'>
                    <Button variant="primary">Move To Video Interview I</Button>
                    <Dropdown.Toggle variant="primary" id="dropdown-split-basic" />
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Navbar.Collapse>
        </Navbar>
    );
}
