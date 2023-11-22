import React from 'react';
import Styles from './style.module.css';
import TagCandidate from 'Component/TagCandidate';
import NavBar from 'Component/NavBar';

export default function CandidatesProfile() {
    return (
        <article className='container'>
            <article className='row m-5'>
                <article className='card p-4 border-0 shadow rounded-5'>
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
                </article>
            </article>
        </article>
    );
}
