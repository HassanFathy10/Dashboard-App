import React from 'react';
import Form from 'react-bootstrap/Form';
import Header1 from '../Component/Header1';
import ListGroup from 'react-bootstrap/ListGroup';
import * as Unicons from '@iconscout/react-unicons';
import Styles from './style.module.css';

export default function Option1() {
    return (
        <article className={`min-vh-100 ${Styles.cover}`}>
            <Header1 />
            <article className='d-flex gap-5'>
                <article className='col-lg-4'>
                    <input
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="🔍 Search by name, edu, exp, or #tag"
                    />
                    <ListGroup className='mt-4'>
                        <ListGroup.Item action>
                            <article className='d-flex list-unstyled p-2'>
                                <li className='me-auto fs-5 fw-medium'>Filters</li>
                                <li className=''>0 Selected</li>
                            </article>
                        </ListGroup.Item>
                        <ListGroup.Item action>
                            <article className='d-flex list-unstyled p-2'>
                                <li className='me-auto fs-5 fw-medium'><Unicons.UilFileAlt />
                                    <span className='mx-2 pt-4' >Personal Information</span>
                                </li>
                                <li className=''><Unicons.UilAngleDown /></li>
                            </article>
                        </ListGroup.Item>
                        <ListGroup.Item action>
                            <article className='d-flex list-unstyled p-2'>
                                <li className='me-auto fs-5 fw-medium'><Unicons.UilFileAlt />
                                    <span className='mx-2 pt-4' >Education</span>
                                </li>
                                <li className=''><Unicons.UilAngleDown /></li>
                            </article>
                        </ListGroup.Item>
                        <ListGroup.Item action>
                            <article className='d-flex list-unstyled p-2'>
                                <li className='me-auto fs-5 fw-medium'><Unicons.UilFileAlt />
                                    <span className='mx-2 pt-4' >Work Experience</span>
                                </li>
                                <li className=''><Unicons.UilAngleDown /></li>
                            </article>
                        </ListGroup.Item>
                        <ListGroup.Item action>
                            <article className='d-flex list-unstyled p-2'>
                                <li className='me-auto fs-5 fw-medium'><Unicons.UilFileAlt />
                                    <span className='mx-2 pt-4' >Activity Filter</span>
                                </li>
                                <li className=''><Unicons.UilAngleDown /></li>
                            </article>
                        </ListGroup.Item>
                        <ListGroup.Item action>
                            <article className='d-flex list-unstyled p-2'>
                                <li className='me-auto fs-5 fw-medium'><Unicons.UilFileAlt />
                                    <span className='mx-2 pt-4' >Advanced Filter</span>
                                </li>
                                <li className=''><Unicons.UilAngleDown /></li>
                            </article>
                        </ListGroup.Item>
                    </ListGroup>
                </article>
                <article className='col-6 pb-5'>
                    <article className='row' >
                        <article className='card'>
                            <article className={`d-flex p-3 ${Styles.line}`}>
                                <Form.Check className='m-2' aria-label="option 1" />
                                <span className='text-primary fw-bold m-2'>247 candidates</span>
                                <article className='ms-auto'>
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
                                        <span className={`p-3 ${Styles.user}`}>AS</span>
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
                                        <span className={`p-3 ${Styles.user}`}>AS</span>
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
                                        <span className={`p-3 ${Styles.user}`}>AS</span>
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
                                        <span className={`p-3 ${Styles.user}`}>AS</span>
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
                                        <span className={`p-3 ${Styles.user}`}>AS</span>
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
                                        <span className={`p-3 ${Styles.user}`}>AS</span>
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
        </article>
    );
}
