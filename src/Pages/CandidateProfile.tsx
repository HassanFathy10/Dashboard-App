import React from 'react';
import Styles from './style.module.css';
import TagCandidate from 'Component/TagCandidate';

export default function CandidatesProfile() {
    return (
        <article className='container'>
            <article className='row'>
                <article className='col-lg-10 card m-5 border-0 shadow'>
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
        </article>
    );
}
