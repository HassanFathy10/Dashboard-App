import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import * as Unicons from '@iconscout/react-unicons';
import Styles from './style.module.css';

export default function Option1() {
    const [selectedItem, setSelectedItem] = useState('Opportunity Browsing'); // Here i Initialize with the default text i want
    const handleSelect = (eventKey) => {
        setSelectedItem(eventKey);
    }
    return (
        <article className='d-flex flex-wrap mx-4 position-absolute'>
            
            {/* Section1 */}
            <article className='col-lg-4 col-md-10 col-sm-10 pb-4'>
                {/* head section 1 */}
                <article className="pt-5 mb-5">
                    <article className='d-flex flex-column p-3'>
                        <span className={`fw-bolder fs-5 ${Styles.font}`}>
                            London Internship Program
                        </span>
                        <span className='fw-light'>Londan</span>
                    </article>
                </article>
                {/* body section 1 */}
                <article>
                    <article className='p-1'>
                        <input
                            className="form-control form-control-lg border-0"
                            type="text"
                            placeholder="🔍 Search by name, edu, exp, or #tag"
                        />
                    </article>
                    <ListGroup className='mt-2 p-1'>
                        <ListGroup.Item action className='border-0 border-bottom'>
                            <article className='d-flex list-unstyled p-2'>
                                <li className='me-auto fs-5 fw-medium'>Filters</li>
                                <li className=''>0 Selected</li>
                            </article>
                        </ListGroup.Item>
                        <ListGroup.Item action className='border-0 border-bottom'>
                            <article className='d-flex list-unstyled p-2'>
                                <li className='me-auto fs-5 fw-medium'><Unicons.UilFileAlt />
                                    <span className='mx-2 pt-4' >Personal Information</span>
                                </li>
                                <li className=''><Unicons.UilAngleDown /></li>
                            </article>
                        </ListGroup.Item>
                        <ListGroup.Item action className='border-0 border-bottom'>
                            <article className='d-flex list-unstyled p-2'>
                                <li className='me-auto fs-5 fw-medium'><Unicons.UilFileAlt />
                                    <span className='mx-2 pt-4' >Education</span>
                                </li>
                                <li className=''><Unicons.UilAngleDown /></li>
                            </article>
                        </ListGroup.Item>
                        <ListGroup.Item action className='border-0 border-bottom'>
                            <article className='d-flex list-unstyled p-2'>
                                <li className='me-auto fs-5 fw-medium'><Unicons.UilFileAlt />
                                    <span className='mx-2 pt-4' >Work Experience</span>
                                </li>
                                <li className=''><Unicons.UilAngleDown /></li>
                            </article>
                        </ListGroup.Item>
                        <ListGroup.Item action className='border-0 border-bottom'>
                            <article className='d-flex list-unstyled p-2'>
                                <li className='me-auto fs-5 fw-medium'><Unicons.UilFileAlt />
                                    <span className='mx-2 pt-4' >Activity Filter</span>
                                </li>
                                <li className=''><Unicons.UilAngleDown /></li>
                            </article>
                        </ListGroup.Item>
                        <ListGroup.Item action className='border-0'>
                            <article className='d-flex list-unstyled p-2'>
                                <li className='me-auto fs-5 fw-medium'><Unicons.UilFileAlt />
                                    <span className='mx-2 pt-4' >Advanced Filter</span>
                                </li>
                                <li className=''><Unicons.UilAngleDown /></li>
                            </article>
                        </ListGroup.Item>
                    </ListGroup>
                </article>
            </article>

            {/* Section2 */}
            <article className='col-lg-6 col-md-10 col-sm-10 '>
                
                {/* head section 2 */}
                <article className='d-flex mt-5 pt-3 pb-3 flex-wrap'>
                    {/* Handle selected value in drop down */}
                    <Dropdown onSelect={handleSelect}>
                        <Dropdown.Toggle variant="white" className={`fw-bolder bg-white rounded-5 ${Styles.font}`} id="dropdown-basic">
                            {selectedItem} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="Applied" className={`d-flex p-3 fw-bolder ${selectedItem === 'Applied' ? Styles.itemdrop : ''}`} href="#/action-1">
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
                    <article className='d-flex'>
                        <Nav>
                            <Nav.Link className={`p-2 ${Styles.link}`} href="#link"><Unicons.UilTagAlt /></Nav.Link>
                            <Nav.Link className={`p-2 ${Styles.link}`} href="#link"><Unicons.UilUserTimes /></Nav.Link>
                            <Nav.Link className={`p-2 ${Styles.link}`} href="#link"><Unicons.UilUserCheck /></Nav.Link>
                            <Nav.Link className={`p-2 ${Styles.link}`} href="#link"><Unicons.UilEnvelope /></Nav.Link>
                        </Nav>
                    </article>
                    <Dropdown as={ButtonGroup} className='mx-2'>
                        <Button variant="primary" className='mx-1'>Move To Video Interview I</Button>
                        <Dropdown.Toggle variant="primary" id="dropdown-split-basic" />
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </article>

                {/* body section 2 */}
                <article className='p-3 mt-5'>
                    <article className='card border-0'>
                        <article className={`d-flex p-3 flex-wrap ${Styles.line}`}>
                            <Form.Check className='m-2' aria-label="option 1" />
                            <span className='text-primary fw-bold m-2'>247 candidates</span>
                            <article className='ms-auto d-flex'>
                                <span className='fw-medium text-primary m-2'>Qualified</span>
                                <span className={Styles.span}></span>
                                <span className='text-black fw-medium m-2'>Task <span className={Styles.number}>25</span></span>
                                <span className={Styles.span}></span>
                                <span className='text-black fw-medium m-2'>Disqualified <span className={Styles.number}>78</span></span>
                            </article>
                        </article>
                        <article className={`d-flex p-3 gap-5 ${Styles.line}`}>
                            <article className='d-flex mt-5'>
                                <Form.Check className=' mt-3' aria-label="option 1" />
                                <article className='mt-3 mx-3'>
                                    <span className={`p-3 fw-bolder fs-5 ${Styles.user}`}>AS</span>
                                </article>
                            </article>
                            <ul className='list-unstyled lh-lg'>
                                <li className='fw-bold'>Aaliyah Sanderson</li>
                                <li className='fw-normal'>Riyadh, Saudi Arabia</li>
                                <li className='fw-light'>Bachelor - Cambridge University (2023 - 2023)</li>
                                <li className='fw-light text-primary'>#top_candidate &nbsp; &nbsp; &nbsp;  #top_candidate</li>
                                <li className='fw-medium text-info'>
                                    <span className={Styles.info}>New York</span> &nbsp;
                                    <span className={Styles.info}>Marketing</span> &nbsp;
                                    <span className={Styles.info}>Londan</span>
                                </li>
                            </ul>
                        </article>
                        <article className={`d-flex p-3 gap-5 ${Styles.line}`}>
                            <article className='d-flex mt-5'>
                                <Form.Check className=' mt-3' aria-label="option 1" />
                                <article className='mt-3 mx-3'>
                                    <span className={`p-3 fw-bolder fs-5 ${Styles.user}`}>AS</span>
                                </article>
                            </article>
                            <ul className='list-unstyled lh-lg'>
                                <li className='fw-bold'>John Doe</li>
                                <li className='fw-normal'>Bostom, USA</li>
                                <li className='fw-light'>Bachelor - MIT (2023 - 2023)</li>
                                <li className='fw-light text-primary'>#top_candidate &nbsp; &nbsp; &nbsp;  #top_candidate</li>
                                <li className='fw-medium text-info'>
                                    <span className={Styles.info}>New York</span> &nbsp;
                                    <span className={Styles.info}>Marketing</span> &nbsp;
                                    <span className={Styles.info}>Londan</span>
                                </li>
                            </ul>
                        </article>
                        <article className={`d-flex p-3 gap-5 ${Styles.line}`}>
                            <article className='d-flex mt-5'>
                                <Form.Check className=' mt-3' aria-label="option 1" />
                                <article className='mt-3 mx-3'>
                                    <span className={`p-3 fw-bolder fs-5 ${Styles.user}`}>AS</span>
                                </article>
                            </article>
                            <ul className='list-unstyled lh-lg'>
                                <li className='fw-bold'>Thomas Matt</li>
                                <li className='fw-normal'>Edinburgh, UK</li>
                                <li className='fw-light'>Bachelor - Harvard University (2023 - 2023)</li>
                                <li className='fw-light text-primary'>#top_candidate &nbsp; &nbsp; &nbsp;  #top_candidate</li>
                                <li className='fw-medium text-info'>
                                    <span className={Styles.info}>New York</span> &nbsp;
                                    <span className={Styles.info}>Marketing</span> &nbsp;
                                    <span className={Styles.info}>Londan</span>
                                </li>
                            </ul>
                        </article>
                        <article className={`d-flex p-3 gap-5 ${Styles.line}`}>
                            <article className='d-flex mt-5'>
                                <Form.Check className=' mt-3' aria-label="option 1" />
                                <article className='mt-3 mx-3'>
                                    <span className={`p-3 fw-bolder fs-5 ${Styles.user}`}>AS</span>
                                </article>
                            </article>
                            <ul className='list-unstyled lh-lg'>
                                <li className='fw-bold'>Kamilia Smith</li>
                                <li className='fw-normal'>London, UK</li>
                                <li className='fw-light'>Bachelor - Boston University (2023 - 2023)</li>
                                <li className='fw-light text-primary'>#top_candidate &nbsp; &nbsp; &nbsp;  #top_candidate</li>
                                <li className='fw-medium text-info'>
                                    <span className={Styles.info}>New York</span> &nbsp;
                                    <span className={Styles.info}>Marketing</span> &nbsp;
                                    <span className={Styles.info}>Londan</span>
                                </li>
                            </ul>
                        </article>
                        <article className={`d-flex p-3 gap-5 ${Styles.line}`}>
                            <article className='d-flex mt-5'>
                                <Form.Check className=' mt-3' aria-label="option 1" />
                                <article className='mt-3 mx-3'>
                                    <span className={`p-3 fw-bolder fs-5 ${Styles.user}`}>AS</span>
                                </article>
                            </article>
                            <ul className='list-unstyled lh-lg'>
                                <li className='fw-bold'>Roy Jade</li>
                                <li className='fw-normal'>Cambridge,  UK</li>
                                <li className='fw-light'>Bachelor - Yale (2023 - 2023)</li>
                                <li className='fw-light text-primary'>#top_candidate &nbsp; &nbsp; &nbsp;  #top_candidate</li>
                                <li className='fw-medium text-info'>
                                    <span className={Styles.info}>New York</span> &nbsp;
                                    <span className={Styles.info}>Marketing</span> &nbsp;
                                    <span className={Styles.info}>Londan</span>
                                </li>
                            </ul>
                        </article>
                        <article className={`d-flex p-3 gap-5 ${Styles.line}`}>
                            <article className='d-flex mt-5'>
                                <Form.Check className=' mt-3' aria-label="option 1" />
                                <article className='mt-3 mx-3'>
                                    <span className={`p-3 fw-bolder fs-5 ${Styles.user}`}>AS</span>
                                </article>
                            </article>
                            <ul className='list-unstyled lh-lg'>
                                <li className='fw-bold'>Ahmed Salman</li>
                                <li className='fw-normal'>New York, USA</li>
                                <li className='fw-light'>Bachelor - Cambridge University (2023 - 2023)</li>
                                <li className='fw-light text-primary'>#top_candidate &nbsp; &nbsp; &nbsp;  #top_candidate</li>
                                <li className='fw-medium text-info'>
                                    <span className={Styles.info}>New York</span> &nbsp;
                                    <span className={Styles.info}>Marketing</span> &nbsp;
                                    <span className={Styles.info}>Londan</span>
                                </li>
                            </ul>
                        </article>
                    </article>
                </article>
            </article>
        </article>
    );
};
