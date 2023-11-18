import React from 'react';
import Styles from './style.module.css';
import TagCandidate from 'Component/TagCandidate';

export default function CandidatesProfile() {
    return (
        <article className='container'>
            <article className='row'>
                <article className=''>
                    <img src='' alt='' className=' bg-black rounded-5' />
                    <article className='d-flex gap-5'>
                        <h4>Aaliyah Sanderson</h4>
                        <article className='mt-1'>
                            <ul className='d-flex list-unstyled gap-3'>
                                <li>New York</li>
                                <li>Marketing</li>
                                <li>London</li>
                            </ul>
                        </article>
                        <article className='mx-auto'>
                            <p>Overall Score <span>7</span></p>
                        </article>
                    </article>
                    <article>
                        <ul className='d-flex list-unstyled gap-5'>
                            <li >Saudi Arabia</li>
                            <li className={`${Styles.list}`}></li>
                            <li>aaliyahs@gmail.com</li>
                            <li className={`${Styles.list}`}></li>
                            <li>+00 000 000 0000</li>
                        </ul>
                    </article>
                    <article className='d-flex'>
                        <TagCandidate />
                        <article className=' mx-auto'>
                            <p className='text-black-50'>Applied on 12 June 2023</p>
                        </article>
                    </article>
                </article>
            </article>
        </article>
    );
}
