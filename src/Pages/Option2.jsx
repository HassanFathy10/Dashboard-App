import React from 'react';
// import * as Unicons from '@iconscout/react-unicons';
import Styles from './style.module.css';

export default function Option2() {
  return (
    <article className='d-flex flex-wrap mx-4 position-absolute'>
      <article className='col-lg-5 col-md-10 col-sm-10 pb-5'>
        <article className="  mt-3 pt-5 pb-5">
          <span className={`fw-bolder fs-5 ${Styles.font}`} href="#home">
            Opportunity Overview
          </span>
        </article>
        <article className='d-flex'>
          <article className='card border-0 text-start'>
            <article className='d-flex flex-column p-5 ps-4'>
              <span className='fw-bold fs-6 pb-4'>Applied</span>
              <span className='fw-bold fs-5'>3,122</span>
            </article>
          </article>
        </article>
      </article>

    </article>
  );
}
