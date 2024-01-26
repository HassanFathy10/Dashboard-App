import React from 'react';
import Styles from '../Pages/style.module.css';
import TagCandidate from 'Component/TagCandidate';
import NavBar from 'Component/NavBar';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useLocation } from 'react-router-dom';

export default function CandidatesProfile() {
    const { state } = useLocation();
    const { data } = state || {};

    return (
        <article className={`container ${Styles.bg}`}>
            <article className='row mt-5'>
                <article className='card mt-5 p-4 border-0 shadow rounded-5'>
                    <article className='d-flex gap-3 flex-wrap'>
                        <Stack direction="row" spacing={2}>
                            <Avatar alt={data?.name || 'Hassan Fathy'} src='./' />
                        </Stack>
                        <h5 className='p-2'>{data?.name || 'Hassan Fathy'}</h5>
                        <article className=''>
                            <ul className='d-flex fw-medium list-unstyled p-1 gap-2'>
                                <li className={`p-1 ${Styles.answer}`}>New York</li>
                                <li className={`p-1 ${Styles.answer}`}>Marketing</li>
                                <li className={`p-1 ${Styles.answer}`}>London</li>
                            </ul>
                        </article>
                        <article className='text-end ms-auto'>
                            <article>
                                <p className='fs-5 fw-bold'>Overall Score <span>7</span></p>
                            </article>
                            <article>
                                <p className='text-black-50'>Applied on 12 June 2023</p>
                            </article>
                        </article>
                    </article>
                    <article>
                        <ul className='d-flex flex-wrap list-unstyled gap-4'>
                            <li >{data?.location || 'Egypt, Alexandira'}</li>
                            <li className={`${Styles.list}`}></li>
                            <li>{data?.email || 'Hassanfathy@gmail.com'}</li>
                            <li className={`${Styles.list}`}></li>
                            <li>{data?.phone || '+201143814036'}</li>
                        </ul>
                    </article>
                    <TagCandidate />
                </article>
            </article>
            <article className='row'>
                <article className='mt-5 mb-5'>
                    <article className='w-100'>
                        <NavBar />
                    </article>
                </article>
            </article>
        </article>
    );
}
