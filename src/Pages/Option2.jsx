import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import * as Unicons from '@iconscout/react-unicons';
import Styles from './style.module.css';

export default function Option2() {
  return (
    <article className='d-flex flex-wrap mx-4 position-absolute'>
      {/* head section 1 */}
      <article className='col-lg-5 col-md-10 col-sm-10 pb-5'>
        <article className="mt-3 pt-5 pb-5">
          <span className={`fw-bolder fs-5 ${Styles.font}`} href="#home">
            Opportunity Overview
          </span>
        </article>
        <article className='d-flex'>
          <article className='p-1'>
            <article className='card  border-0 rounded-4' style={{ width: '13rem' }}>
              <article className=' card-body d-flex flex-column pb-4'>
                <span className='fw-bold fs-6 pb-4'>Applied</span>
                <span className='fw-bold fs-5'>3,122</span>
                <span className='fw-bold fs-5'>Previous Period</span>
                <article className='fw-light mt-2'>
                  <span>1590 &nbsp;</span>
                  <span className={Styles.number1}><Unicons.UilArrowGrowth size='15px' /> 15%</span>
                </article>
              </article>
            </article>
          </article>
          <article className='p-1'>
            <article className='card border-0 rounded-4' style={{ width: '13rem' }}>
              <article className='card-body d-flex flex-column pb-4 '>
                <span className='fw-bold fs-6 pb-4'>Applied</span>
                <span className='fw-bold fs-5'>3,122</span>
                <span className='fw-bold fs-5'>Previous Period</span>
                <article className='fw-light mt-2'>
                  <span>1590 &nbsp;</span>
                  <span className={Styles.number1}><Unicons.UilArrowGrowth size='15px' /> 15%</span>
                </article>
              </article>
            </article>
          </article>
          <article className='p-1'>
            <article className='card  border-0 rounded-4' style={{ width: '13rem' }}>
              <article className=' card-body d-flex flex-column pb-4'>
                <span className='fw-bold fs-6 pb-4'>Applied</span>
                <span className='fw-bold fs-5'>3,122</span>
                <span className='fw-bold fs-5'>Previous Period</span>
                <article className='fw-light mt-2'>
                  <span>1590 &nbsp;</span>
                  <span className={Styles.number1}><Unicons.UilArrowGrowth size='15px' /> 15%</span>
                </article>
              </article>
            </article>
          </article>
        </article>
        {/* chart */}
        <article className='mt-3'>
          <article className='card border-0 rounded-4' style={{ width: 'rem' }}>
            <article className=' card-body d-flex flex-column pb-4'>
              <NavDropdown id="nav-dropdown-dark-example" className='fw-bold fs-6 pb-4' title="Recommended">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </article>
          </article>
        </article>
      </article>
    </article>
  );
}
