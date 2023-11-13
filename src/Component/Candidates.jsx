import React from 'react';
import Styles from './style.module.css';

export default function Candidates({ candidates }) {
    return (
        <article>
            {candidates.map(candidate => (
                <article key={candidate.id}>
                    <article className='d-flex align-items-center mt-5 gap-5'>
                        <article className='mx-3'>
                            <span className={`p-3 fw-bolder fs-5 ${Styles.user}`}>AS</span>
                        </article>
                        <ul className='list-unstyled lh-lg'>
                            <li className='fw-bold'>{candidate.name}</li>
                            <li className='fw-normal'>{candidate.location}</li>
                            <li className='fw-light'>{candidate.edu}</li>
                            <li className='fw-light text-primary'>{candidate.tag}</li>
                            <li className='fw-medium text-info'>
                                <span className={Styles.info}>New York</span> &nbsp;
                                <span className={Styles.info}>Marketing</span> &nbsp;
                                <span className={Styles.info}>London</span>
                            </li>
                        </ul>
                    </article>
                </article>
            ))}
        </article>
    );
};





