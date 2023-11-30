import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './style.module.css';

export default function ErrorPage() {
    return (
        <article className="container">
            <article className="row">
                <article className="col-sm-12 d-flex mt-5 mb-5">
                    <article className="col-sm-10 d-flex justify-content-center">
                        <article className={Styles.image}>
                        </article>
                    </article>
                </article>
            </article>
            <article>
                <article className='text-center'>
                    <h3 className="h2">
                        Look like you're lost
                    </h3>
                    <p>the page you are looking for not avaible!</p>
                    <Link to="/" className="btn btn-warning">Go to Home</Link>
                </article>
            </article>
        </article>
    );
}