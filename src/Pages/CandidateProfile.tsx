import React from 'react';
import Styles from './style.module.css';
import TagCandidate from 'Component/TagCandidate';
import NavBar from 'Component/NavBar';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function CandidatesProfile() {
    return (
        <article className='container'>
            <article className='row m-5'>
                <article className='card p-4 border-0 shadow rounded-5'>
                    <article className='row'>
                        <article className='col'>
                            <article className='d-flex gap-3'>
                                <Stack direction="row" spacing={2}>
                                    <Avatar alt="Remy Sharp" src='' />
                                </Stack>
                                <h5 className='p-2'>Aaliyah Sanderson</h5>
                                <article>
                                <ul className='d-flex fw-medium list-unstyled p-1 gap-2'>
                                    <li className={`p-1 ${Styles.answer}`}>New York</li>
                                    <li className={`p-1 ${Styles.answer}`}>Marketing</li>
                                    <li className={`p-1 ${Styles.answer}`}>London</li>
                                </ul>
                            </article>
                            </article>
                            <article>
                                <ul className='d-flex list-unstyled gap-4'>
                                    <li >Saudi Arabia</li>
                                    <li className={`${Styles.list}`}></li>
                                    <li>aaliyahs@gmail.com</li>
                                    <li className={`${Styles.list}`}></li>
                                    <li>+00 000 000 0000</li>
                                </ul>
                            </article>
                            <TagCandidate />
                        </article>
                        <article className='text-end col mt-4'>
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
