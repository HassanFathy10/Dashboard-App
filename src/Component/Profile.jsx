import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { FaUserCircle, FaUser, FaUserEdit, FaCalendarAlt, FaCircle, FaTags } from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { PiBagSimpleFill } from "react-icons/pi";
import { useLocation } from 'react-router-dom';
import videos from './video/mov_bbb.mp4';
import Styles from './style.module.css';

export default function Profile() {
    const { state } = useLocation();
    const { data } = state || {};
    return (
        <Container>
            <Row>
                {/* Personal Information */}
                <article className='card p-4 border-0 shadow mt-4 rounded-4'>
                    <h5 className='pb-5'>Personal Information</h5>
                    <article className='row'>
                        <article className='d-flex pb-4 col'>
                            <article className='m-4'>
                                <FaUserCircle className='fs-5' />
                            </article>
                            <ul className='list-unstyled fs-6 fw-medium'>
                                <li className='text-black-50 pb-4'>Nationality</li>
                                <li>{data?.nationality || 'Egyption'}</li>
                            </ul>
                        </article>
                        <article className='d-flex col'>
                            <article className='m-4'>
                                <FaUserEdit className='fs-5' />
                            </article>
                            <ul className='list-unstyled fs-6 fw-medium'>
                                <li className='text-black-50 pb-4'>National ID</li>
                                <li>{data?.nationalId || 'NA'}</li>
                            </ul>
                        </article>
                    </article>
                    <article className='row'>
                        <article className='d-flex pb-4 col'>
                            <article className='m-4'>
                                <FaUser className='fs-5' />
                            </article>
                            <ul className='list-unstyled fs-6 fw-medium'>
                                <li className='text-black-50 pb-4'>Gender</li>
                                <li>{data?.gender || 'Male'}</li>
                            </ul>
                        </article>
                        <article className='d-flex col'>
                            <article className='m-4'>
                                <FaCalendarAlt className='fs-5' />
                            </article>
                            <ul className='list-unstyled fs-6 fw-medium'>
                                <li className='text-black-50 pb-4'>Date of Birth</li>
                                <li>{data?.dateofbirth || '9-9-1999'}</li>
                            </ul>
                        </article>
                    </article>
                </article>
                {/* Education */}
                <article className='card p-4 border-0 shadow mt-5 rounded-4'>
                    <h5 className='pb-5'>Education</h5>
                    <article className='d-flex col pt-4'>
                        <article className='m-4'>
                            <HiBuildingOffice2 className='fs-5' />
                        </article>
                        <ul className='list-unstyled fs-6 fw-medium'>
                            <li className='text-black pb-4'>Bachelor's Degree</li>
                            <li>
                                <ul className='d-flex list-unstyled gap-2 text-black-50'>
                                    <li className='text-black'>
                                        {data?.edu || 'Agriculture Engineering - Alexandria University (2017 - 2021)'}
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </article>
                </article>
                {/* Work Experience */}
                <article className='card p-4 border-0 shadow mt-5 rounded-4'>
                    <h5 className='pb-5'>Work Experience</h5>
                    <article className='d-flex col pb-2'>
                        <article className='m-4'>
                            <PiBagSimpleFill className='fs-5' />
                        </article>
                        <ul className='list-unstyled fs-6 fw-medium'>
                            <li className='text-black pb-4'>Cyber Security Intern</li>
                            <li>
                                <ul className='d-flex list-unstyled gap-2 text-black-50'>
                                    <li className='text-black'>Coop Training</li>
                                    <li className={`${Styles.list}`}></li>
                                    <li>Saudi Arabia</li>
                                    <li className={`${Styles.list}`}></li>
                                    <li>Jan 2022 - Jan 2023</li>
                                </ul>
                            </li>
                        </ul>
                    </article>
                </article>
                {/* Additional Questions */}
                <article className='card p-4 border-0 shadow mt-5 rounded-4'>
                    <h5 className='pb-5'>Additional Questions</h5>
                    <article className='pb-2'>
                        <article className='border-bottom p-3'>
                            <span className={`text-warning p-2 fw-bold ${Styles.shortanswer}`}>Short Answer</span>
                        </article>
                        <article className='pt-4 d-flex gap-4'>
                            <article>
                                <FaCircle className='text-warning' />
                            </article>
                            <p className='fw-medium'>What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply</p>
                        </article>
                        <article className='p-4'>
                            <p className={`p-3 ${Styles.answer}`}>Dorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </article>
                    </article>
                    <article className='pb-4'>
                        <article className='border-bottom p-3'>
                            <span className={`p-2 fw-bold ${Styles.video}`}>Video Upload</span>
                        </article>
                        <article className='pt-4 d-flex gap-4'>
                            <article>
                                <FaCircle color='#9EB8FF' />
                            </article>
                            <p className='fw-medium'>What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply</p>
                        </article>
                        <article className='pt-3'>
                            <video src={videos} width='220px' controls />
                        </article>
                    </article>
                    <article className='pb-5'>
                        <article className='border-bottom p-3'>
                            <span className={`p-2 fw-bold ${Styles.number}`}>Number</span>
                        </article>
                        <article className='pt-4 d-flex gap-4'>
                            <article>
                                <FaCircle color='#E48A8F' />
                            </article>
                            <p className='fw-medium'>What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply</p>
                        </article>
                        <article className='p-4'>
                            <p className={`p-3 ${Styles.answer}`}>Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                        </article>
                    </article>
                    <article className='pb-4'>
                        <article className='border-bottom p-3'>
                            <span className={`p-2 fw-bold ${Styles.multiple}`}>Multiple Choice</span>
                        </article>
                        <article className='pt-4 d-flex gap-4'>
                            <article>
                                <FaCircle color='#75ca5e6a' />
                            </article>
                            <p className='fw-medium'>What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply</p>
                        </article>
                        <article className='p-4'>
                            <ul className='list-unstyled d-flex flex-wrap gap-2'>
                                <li className={`p-2 ${Styles.li}`}>New York</li>
                                <li className={`p-2 ${Styles.li}`}>New York</li>
                                <li className={`p-2 ${Styles.li}`}>New York</li>
                                <li className={`p-2 ${Styles.li}`}>New York</li>
                            </ul>
                        </article>
                    </article>
                    <article className='pb-2'>
                        <article className='border-bottom p-3'>
                            <span className={`p-2 fw-bold ${Styles.drop}`}>Dropdown</span>
                        </article>
                        <article className='pt-4 d-flex gap-4'>
                            <article>
                                <FaCircle color='#82E0FF' />
                            </article>
                            <p className='fw-medium'>What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply</p>
                        </article>
                        <article className='p-4'>
                            <p className={`p-3 ${Styles.answer}`}>Dorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </article>
                    </article>
                </article>
                {/* Enrolled Other Programs */}
                <article className='card p-4 border-0 shadow mt-5 rounded-4'>
                    <h5 className='pb-3'>Enrolled Other Programs</h5>
                    <article className='d-flex col pt-4 border-bottom'>
                        <article className='m-4'>
                            <FaTags className='fs-5' />
                        </article>
                        <article className='row w-100'>
                            <article className='col'>
                                <ul className='list-unstyled fs-6 fw-medium'>
                                    <li className='text-black pb-4'>Misk Traineeship</li>
                                    <li className='text-black-50'>Currently At Video Task</li>
                                </ul>
                            </article>
                            <article className='text-end col mt-4'>
                                <span className={`p-2 fw-medium ${Styles.active}`}>Active</span>
                            </article>
                        </article>
                    </article>
                    <article className='d-flex col pt-4 border-bottom'>
                        <article className='m-4'>
                            <FaTags className='fs-5' />
                        </article>
                        <article className='row w-100'>
                            <article className='col'>
                                <ul className='list-unstyled fs-6 fw-medium'>
                                    <li className='text-black pb-4'>Summer Internship</li>
                                    <li className='text-black-50'>Currently At Video Task</li>
                                </ul>
                            </article>
                            <article className='text-end col mt-4'>
                                <span className={`p-2 fw-medium ${Styles.disqualified}`}>Disqualified</span>
                            </article>
                        </article>
                    </article>
                    <article className='d-flex col pt-4 border-bottom'>
                        <article className='m-4'>
                            <FaTags className='fs-5' />
                        </article>
                        <article className='row w-100'>
                            <article className='col'>
                                <ul className='list-unstyled fs-6 fw-medium'>
                                    <li className='text-black pb-4'>XYZ Traineeship</li>
                                    <li className='text-black-50'>Currently At Video Task</li>
                                </ul>
                            </article>
                            <article className='text-end col mt-4'>
                                <span className={`p-2 fw-medium ${Styles.disqualified}`}>Disqualified</span>
                            </article>
                        </article>
                    </article>
                    <article className='d-flex col pt-4'>
                        <article className='m-4'>
                            <FaTags className='fs-5' />
                        </article>
                        <article className='row w-100'>
                            <article className='col'>
                                <ul className='list-unstyled fs-6 fw-medium'>
                                    <li className='text-black pb-4'>London Internship</li>
                                    <li className='text-black-50'>Currently At Video Task</li>
                                </ul>
                            </article>
                            <article className='text-end col mt-4'>
                                <span className={`p-2 fw-medium ${Styles.active}`}>Active</span>
                            </article>
                        </article>
                    </article>
                </article>
            </Row>
        </Container>
    );
}
