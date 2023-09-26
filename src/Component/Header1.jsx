import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Nav, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import * as Unicons from '@iconscout/react-unicons';
import Styles from './style.module.css';


export default function Header1() {
    const [selectedItem, setSelectedItem] = useState('Opportunity Browsing'); // Here i Initialize with the default text i want
    const handleSelect = (eventKey) => {
        setSelectedItem(eventKey);
    }; 
    return (
        <Navbar expand="lg" className="co-lg-10 mt-4 pt-3 pb-5 ">
            <article className='d-flex flex-column'>
                <span className={`fw-bolder fs-5 ${Styles.font}`} href="#home">
                    London Internship Program
                </span>
                <span className='fw-light'>Londan</span>
            </article>
            <Navbar.Toggle className='m-4' aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='mb-4 ms-auto'>
                    {/* Handle selected value in drop down */}
                    <Dropdown onSelect={handleSelect} className='mx-5'>
                        <Dropdown.Toggle variant="white" className={`fw-bolder ${Styles.font}`} id="dropdown-basic">
                            {selectedItem} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="Applied"  className={`d-flex p-3 fw-bolder ${selectedItem === 'Applied' ? Styles.itemdrop : ''}`} href="#/action-1">
                                Applied
                                <article className='ms-auto'>
                                    <span className={`fw-meduim ${Styles.number}`}>1745</span>
                                </article>
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="Shortlisted" className={`d-flex p-3 fw-bolder ${selectedItem === 'Shortlisted' ? Styles.itemdrop : ''}`} href="#/action-2">
                                Shortlisted
                                <article className='ms-auto'>
                                    <span className={`fw-meduim ${Styles.number}`}>453</span>
                                </article>
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="Technical Interview" className={`d-flex p-3 fw-bolder ${selectedItem === 'Technical Interview' ? Styles.itemdrop : ''}`} href="#/action-3">
                                Technical Interview
                                <article className='ms-auto'>
                                    <span className={`fw-meduim ${Styles.number}`}>123</span>
                                </article>
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="Opportunity Browsing" className={`d-flex p-3 fw-bolder ${selectedItem === 'Opportunity Browsing' ? Styles.itemdrop : ''}`} href="#/action-3">
                                Opportunity Browsing &nbsp; &nbsp;
                                <article className='ms-auto'>
                                    <span className={`fw-meduim ${Styles.number}`}>243</span>
                                </article>
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="Video Interview I" className={`d-flex p-3 fw-bolder ${selectedItem === 'Video Interview I' ? Styles.itemdrop : ''}`} href="#/action-3">
                                Video Interview I
                                <article className='ms-auto'>
                                    <span className={`fw-meduim ${Styles.number}`}>25</span>
                                </article>
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="Video Interview II" className={`d-flex p-3 fw-bolder ${selectedItem === 'Video Interview II' ? Styles.itemdrop : ''}`} href="#/action-3">
                                Video Interview II
                                <article className='ms-auto'>
                                    <span className={`fw-meduim ${Styles.number}`}>25</span>
                                </article>
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="Video Interview III" className={`d-flex p-3 fw-bolder ${selectedItem === 'Video Interview III' ? Styles.itemdrop : ''}`} href="#/action-3">
                                Video Interview III
                                <article className='ms-auto'>
                                    <span className={`fw-meduim ${Styles.number}`}>25</span>
                                </article>
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="Offer" className={`d-flex p-3 fw-bolder ${selectedItem === 'Offer' ? Styles.itemdrop : ''}`} href="#/action-3">
                                Offer
                                <article className='ms-auto'>
                                    <span className={`fw-meduim ${Styles.number}`}>25</span>
                                </article>
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="Withdrawn" className={`d-flex p-3 fw-bolder ${selectedItem === 'Withdrawn' ? Styles.itemdrop : ''}`} href="#/action-3">
                                Withdrawn 
                                <article className='ms-auto'>
                                    <span className={`fw-meduim ${Styles.number}`}>25</span>
                                </article>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
                <article className='d-flex mb-4 mx-5'>
                    <Nav.Link className={`p-2 ${Styles.link}`} href="#link"><Unicons.UilTagAlt /></Nav.Link>
                    <Nav.Link className={`p-2 ${Styles.link}`} href="#link"><Unicons.UilUserTimes /></Nav.Link>
                    <Nav.Link className={`p-2 ${Styles.link}`} href="#link"><Unicons.UilUserCheck /></Nav.Link>
                    <Nav.Link className={`p-2 ${Styles.link}`} href="#link"><Unicons.UilEnvelope /></Nav.Link>
                </article>
                <Dropdown as={ButtonGroup} className='mx-5 mb-4'>
                    <Button variant="primary" className='mx-1'>Move To Video Interview I</Button>
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
