import React from 'react';
import { Line } from 'react-chartjs-2';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Styles from './style.module.css';
import { HiArrowTrendingUp } from "react-icons/hi2";
import LineChart from '../Component/LineChart';
import Chord from '../Component/Chord';


export default function ProgramOverview() {
  return (
    <article className='container mt-4 flex-wrap gap-5'>
      <article className='row col-lg-12'>
        {/* section 1 */}
        <article className='pb-5'>
          {/* head section 1 */}
          <article className="mt-3 pt-5 pb-5">
            <span className={`fw-bolder fs-5 ${Styles.font}`} href="#home">
              Opportunity Overview
            </span>
          </article>
          {/* body section 1 */}
          <article className='d-flex flex-wrap gap-4 mt-3'>
            <article className='card shadow border-0 rounded-4' style={{ width: '10rem' }}>
              <article className='card-body d-flex flex-column pb-4'>
                <span className='fw-bold fs-6 pb-4'>Applied</span>
                <span className='fw-bold fs-5'>3,122</span>
                <span className='fw-normal fs-6'>Previous Period</span>
                <article className='fw-light mt-2'>
                  <span>1590 &nbsp;</span>
                  <span className={Styles.number1}><HiArrowTrendingUp size='15px' /> 15%</span>
                </article>
              </article>
            </article>
            <article className='card shadow border-0 rounded-4' style={{ width: '10rem' }}>
              <article className='card-body d-flex flex-column pb-4 '>
                <span className='fw-bold fs-6 pb-4'>Offer</span>
                <span className='fw-bold fs-5'>183</span>
                <span className='fw-normal fs-6'>Previous Period</span>
                <article className='fw-light mt-2'>
                  <span>71 &nbsp;</span>
                  <span className={Styles.number1}><HiArrowTrendingUp size='15px' /> 15%</span>
                </article>
              </article>
            </article>
            <article className='card shadow border-0 rounded-4' style={{ width: '10rem' }}>
              <article className='card-body d-flex flex-column pb-4'>
                <span className='fw-bold fs-6 pb-4'>Hired</span>
                <span className='fw-bold fs-5'>98</span>
                <span className='fw-normal fs-6'>Previous Period</span>
                <article className='fw-light mt-2'>
                  <span>167 &nbsp;</span>
                  <span className={Styles.number1}><HiArrowTrendingUp size='15px' /> 15%</span>
                </article>
              </article>
            </article>
          </article>
          {/* chart */}
          <article className='mt-3'>
            <article className='card border-0 rounded-4 shadow'>
              <article className='card-body d-flex flex-column pb-4'>
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
                {/* Chart && Chord */}
                <article className='container overflow-auto'>
                  <article className='row d-flex flex-wrap'>
                    <article className='col-lg-6 col-md-6 position-relative col-sm-4 mb-4'>
                      <LineChart />
                    </article>
                    <article className='col-lg-6 col-md-6 col-sm-4'>
                      <Chord />
                    </article>
                  </article>
                </article>
              </article>
            </article>
          </article>
        </article>
      </article>
      {/* section 2 */}
      <article className='row col-lg-12'>
        {/* body section 2 */}
        <article className='pb-5'>
          <article className='card shadow border-0 rounded-4'>
            <article className='p-3 d-flex flex-column'>
              <span className='fw-bold mb-4'>Total Candidate Flow</span>
              <span className='fw-bold fs-5'>4,567</span>
            </article>
            <article className='d-flex flex-wrap'>
              <ul className='list-unstyled p-3 lh-lg'>
                <li className='fw-bold'>Stage</li>
                <li>Applied</li>
                <li>Recommended</li>
                <li>Interview</li>
                <li>Offer</li>
                <li>Hired</li>
              </ul>
              <article className='ms-auto d-flex flex-wrap'>
                <ul className='list-unstyled text-start p-3 lh-lg'>
                  <li className='fw-bold'>Qualified</li>
                  <li>3,122</li>
                  <li>2,164</li>
                  <li>443</li>
                  <li>183</li>
                  <li>118</li>
                </ul>
                <ul className='list-unstyled text-start p-3 lh-lg'>
                  <li className='fw-bold'>Disqualified</li>
                  <li>1,445</li>
                  <li>958</li>
                  <li>1721</li>
                  <li>260</li>
                  <li>65</li>
                </ul>
              </article>
            </article>
          </article>
          {/* body section 2 */}
          <article className='d-flex gap-4 ms-auto pt-3 flex-wrap'>
            <article className='p-1'>
              <article className='card shadow border-0 rounded-4 bg-warning-subtle' style={{ width: '14rem' }}>
                <article className='card-body d-flex flex-column pb-4'>
                  <article className='d-flex'>
                    <span className='fw-bold fs-6 pb-4'>Recommanded</span>
                    <span className='fw-bold ms-auto fs-6 pb-4'>443</span>
                  </article>
                  <span className='fw-normal fs-6'>Previous Period</span>
                  <article className='fw-light mt-2'>
                    <span>1590 &nbsp;</span>
                    <span className={Styles.number1}><HiArrowTrendingUp size='15px' /> 15%</span>
                  </article>
                </article>
              </article>
            </article>
            <article className='p-1'>
              <article className='card shadow border-0 rounded-4 bg-danger-subtle' style={{ width: '14rem' }}>
                <article className='card-body d-flex flex-column pb-4'>
                  <article className='d-flex'>
                    <span className='fw-bold fs-6 pb-4'>Interview</span>
                    <span className='fw-bold ms-auto fs-6 pb-4'>443</span>
                  </article>
                  <span className='fw-normal fs-6'>Previous Period</span>
                  <article className='fw-light mt-2'>
                    <span>1590 &nbsp;</span>
                    <span className={Styles.number1}><HiArrowTrendingUp size='15px' /> 15%</span>
                  </article>
                </article>
              </article>
            </article>
            <article className='p-1'>
              <article className='card shadow border-0 rounded-4 bg-success-subtle' style={{ width: '14rem' }}>
                <article className='card-body d-flex flex-column pb-4'>
                  <article className='d-flex'>
                    <span className='fw-bold fs-6 pb-4'>Interview</span>
                    <span className='fw-bold ms-auto fs-6 pb-4'>443</span>
                  </article>
                  <span className='fw-normal fs-6'>Previous Period</span>
                  <article className='fw-light mt-2'>
                    <span>1590 &nbsp;</span>
                    <span className={Styles.number1}><HiArrowTrendingUp size='15px' /> 15%</span>
                  </article>
                </article>
              </article>
            </article>
          </article>
        </article>
      </article>
    </article>
  );
}
