import React from 'react';
import Styles from './style.module.css';
import TagCandidate from 'Component/TagCandidate';
import NavBar from 'Component/NavBar';
import { FaUserCircle, FaUser, FaUserEdit, FaCalendarAlt } from "react-icons/fa";

export default function CandidatesProfile() {
    return (
        <article className='container'>
            <article className='row m-5'>
                <article className='col-lg-10 card border-0 shadow'>
                    <article className='d-inline-block'>
                        <article>
                            <img src='' alt='' className=' bg-black rounded-5' />
                        </article>
                        <article className='d-flex gap-5'>
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
                        <article className='col-8'>
                            <TagCandidate />
                        </article>
                    </article>
                    <article className='text-end'>
                        <article>
                            <p>Overall Score <span>7</span></p>
                        </article>
                        <article>
                            <p className='text-black-50'>Applied on 12 June 2023</p>
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
                </article>
            </article>
        </article>
    );
}
