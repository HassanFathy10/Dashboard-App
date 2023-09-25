import React from 'react';
import Header1 from '../Component/Header1';
import * as Unicons from '@iconscout/react-unicons';
import Styles from './style.module.css';

export default function Option1() {
    return (
        <article className={Styles.cover}>
            <Header1 />
            <article className='col-lg-4'>
                <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="🔍 Search by name, edu, exp, or #tag"
                />
            </article>
        </article>
    );
}
