import React from 'react';
import Styles from './style.module.css';
import TagCandidate from 'Component/TagCandidate';
import NavBar from 'Component/NavBar';
import { FaUserCircle, FaUser, FaUserEdit, FaCalendarAlt, FaCircle } from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { PiBagSimpleFill } from "react-icons/pi";

export default function CandidatesProfile() {
    return (
        <article className='container'>
            <article className='row m-5'>
                <article className='card p-4 border-0 shadow'>
                    <article className='row'>
                        <article className='col'>
                            <article>
                                <img src='' alt='' className='bg-black rounded-5' />
                            </article>
                            <article className='d-flex gap-4'>
                                <h4>Aaliyah Sanderson</h4>
                                <article className='mt-1'>
                                    <ul className='d-flex list-unstyled gap-5'>
                                        <li>New York</li>
                                        <li>Marketing</li>
                                        <li>London</li>
                                    </ul>
                                </article>
                            </article>
                            <article>
                                <ul className='d-flex list-unstyled gap-2'>
                                    <li >Saudi Arabia</li>
                                    <li className={`${Styles.list}`}></li>
                                    <li>aaliyahs@gmail.com</li>
                                    <li className={`${Styles.list}`}></li>
                                    <li>+00 000 000 0000</li>
                                </ul>
                            </article>
                            <TagCandidate />
                        </article>
                        <article className='text-end col mt-5'>
                            <article>
                                <p className='fs-5 fw-bold'>Overall Score <span>7</span></p>
                            </article>
                            <article>
                                <p className='text-black-50'>Applied on 12 June 2023</p>
                            </article>
                        </article>
                    </article>
                </article>
            </article>
            <article className='row m-5'>
                <article className='col-lg-10'>
                    <article className='pb-5'>
                        <NavBar />
                    </article>
                    <article className='card p-3 border-0 shadow'>
                        <h5 className='pb-5'>Personal Information</h5>
                        <article className='row'>
                            <article className='d-flex pb-4 col'>
                                <article className='m-4'>
                                    <FaUserCircle className='fs-5' />
                                </article>
                                <ul className='list-unstyled fs-6 fw-medium'>
                                    <li className='text-black-50 pb-4'>Nationality</li>
                                    <li>Sri Lankan</li>
                                </ul>
                            </article>
                            <article className='d-flex col'>
                                <article className='m-4'>
                                    <FaUserEdit className='fs-5' />
                                </article>
                                <ul className='list-unstyled fs-6 fw-medium'>
                                    <li className='text-black-50 pb-4'>National ID</li>
                                    <li>0000000000</li>
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
                                    <li>Female</li>
                                </ul>
                            </article>
                            <article className='d-flex col'>
                                <article className='m-4'>
                                    <FaCalendarAlt className='fs-5' />
                                </article>
                                <ul className='list-unstyled fs-6 fw-medium'>
                                    <li className='text-black-50 pb-4'>Date of Birth</li>
                                    <li>00-00-0000</li>
                                </ul>
                            </article>
                        </article>
                    </article>
                    <article className='card p-4 border-0 shadow mt-5'>
                        <h5 className='pb-5'>Education</h5>
                        <article className='d-flex col pb-2 border-bottom'>
                            <article className='m-4'>
                                <HiBuildingOffice2 className='fs-5' />
                            </article>
                            <ul className='list-unstyled fs-6 fw-medium'>
                                <li className='text-black pb-4'>Bachelor in Biochemistry</li>
                                <li>
                                    <ul className='d-flex list-unstyled gap-2 text-black-50'>
                                        <li className='text-black'>King Saud University</li>
                                        <li className={`${Styles.list}`}></li>
                                        <li>Saudi Arabia</li>
                                        <li className={`${Styles.list}`}></li>
                                        <li>Jan 2022 - Jan 2023</li>
                                    </ul>
                                </li>
                            </ul>
                        </article>
                        <article className='d-flex col pt-4'>
                            <article className='m-4'>
                                <HiBuildingOffice2 className='fs-5' />
                            </article>
                            <ul className='list-unstyled fs-6 fw-medium'>
                                <li className='text-black pb-4'>Bachelor in Biochemistry</li>
                                <li>
                                    <ul className='d-flex list-unstyled gap-2 text-black-50'>
                                        <li className='text-black'>King Saud University</li>
                                        <li className={`${Styles.list}`}></li>
                                        <li>Saudi Arabia</li>
                                        <li className={`${Styles.list}`}></li>
                                        <li>Jan 2022 - Jan 2023</li>
                                    </ul>
                                </li>
                            </ul>
                        </article>
                    </article>
                    <article className='card p-4 border-0 shadow mt-5'>
                        <h5 className='pb-5'>Work Experience</h5>
                        <article className='d-flex col pb-2 border-bottom'>
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
                        <article className='d-flex col pt-4'>
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
                    <article className='card p-4 border-0 shadow mt-5'>
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
                        <article className='pb-5'>
                            <article className='border-bottom p-3'>
                                <span className={`p-2 fw-bold ${Styles.video}`}>Video Upload</span>
                            </article>
                            <article className='pt-4 d-flex gap-4'>
                                <article>
                                    <FaCircle color='#9EB8FF' />
                                </article>
                                <p className='fw-medium'>What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply</p>
                            </article>
                            <video src="..." className="object-fit-contain" controls></video>
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
                        <article className='pb-5'>
                            <article className='border-bottom p-3'>
                                <span className={`p-2 fw-bold ${Styles.video}`}>Video Upload</span>
                            </article>
                            <article className='pt-4 d-flex gap-4'>
                                <article>
                                    <FaCircle color='#9EB8FF' />
                                </article>
                                <p className='fw-medium'>What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply</p>
                            </article>
                            <video src="..." className="object-fit-contain" controls></video>
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
                                <ul className='list-unstyled d-flex gap-5'>
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
                </article>
            </article>
        </article>
    );
}
