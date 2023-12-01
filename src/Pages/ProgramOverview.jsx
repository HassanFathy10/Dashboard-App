import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js';
import { Line } from 'react-chartjs-2';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Styles from './style.module.css';
import { HiArrowTrendingUp } from "react-icons/hi2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
      ,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const dataset1Data = [150, 250, 750, 250, 950, 550, 550];
const dataset2Data = [500, 200, 350, 600, 350, 700, 750];
export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: dataset1Data,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: dataset2Data,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
export default function ProgramOverview() {
  return (
    <article className='d-flex m-5 flex-wrap gap-5 position-absolute'>
      <article className=''>
        {/* head section 1 */}
        <article className="pb-5 d-flex flex-column">
          <span className='fw-bolder fs-5 mb-3'>
            Program Overview - Google
          </span>
          <span className='fw-bold'>UX Internship</span>
        </article>
        {/* body section 1 */}
        <article className='d-flex flex-wrap'>
          <article className='p-1'>
            <article className='card  border-0 rounded-4' style={{ width: '11rem' }}>
              <article className=' card-body d-flex flex-column pb-4'>
                <span className='fw-bold fs-6 pb-4'>Applied</span>
                <span className='fw-bold fs-5'>95</span>
                <span className='fw-normal fs-6'>Previous Period</span>
                <article className='fw-light mt-2'>
                  <span>1590 &nbsp;</span>
                  <span className={Styles.number1}><HiArrowTrendingUp size='15px' /> 15%</span>
                </article>
              </article>
            </article>
          </article>
          <article className='p-1'>
            <article className='card border-0 rounded-4' style={{ width: '11rem' }}>
              <article className='card-body d-flex flex-column pb-4 '>
                <span className='fw-bold fs-6 pb-4'>Offer</span>
                <span className='fw-bold fs-5'>33</span>
                <span className='fw-normal fs-6'>Previous Period</span>
                <article className='fw-light mt-2'>
                  <span>71 &nbsp;</span>
                  <span className={Styles.number1}><HiArrowTrendingUp size='15px' /> 15%</span>
                </article>
              </article>
            </article>
          </article>
          <article className='p-1'>
            <article className='card  border-0 rounded-4' style={{ width: '11rem' }}>
              <article className=' card-body d-flex flex-column pb-4'>
                <span className='fw-bold fs-6 pb-4'>Hired</span>
                <span className='fw-bold fs-5'>15</span>
                <span className='fw-normal fs-6'>Previous Period</span>
                <article className='fw-light mt-2'>
                  <span>167 &nbsp;</span>
                  <span className={Styles.number1}><HiArrowTrendingUp size='15px' /> 15%</span>
                </article>
              </article>
            </article>
          </article>
        </article>
        {/* chart */}
        <article className='mt-3'>
          <article className='card border-0 rounded-4' style={{ width: '34.5rem' }}>
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
              <article style={{ width: '500px' }}>
                <Line options={options} data={data} />
              </article>
            </article>
          </article>
        </article>
      </article>
      <article className='pt-4 pb-5 mt-5'>
        <article className='card shadow mt-5 border-0 rounded-4 m-2'>
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
      <article className='d-flex gap-5'>
        <article className=''>
          {/* head section 1 */}
          <article className="pb-5 mb-4 d-flex flex-column">
            <span className='fw-bolder fs-5 mb-3'>
              Art Internship
            </span>
            <span></span>
          </article>
          {/* body section 1 */}
          <article className='d-flex flex-wrap'>
            <article className='p-1'>
              <article className='card border-0 rounded-4' style={{ width: '11rem' }}>
                <article className=' card-body d-flex flex-column pb-4'>
                  <span className='fw-bold fs-6 pb-4'>Applied</span>
                  <span className='fw-bold fs-5'>95</span>
                  <span className='fw-normal fs-6'>Previous Period</span>
                  <article className='fw-light mt-2'>
                    <span>1590 &nbsp;</span>
                    <span className={Styles.number1}><HiArrowTrendingUp size='15px' /> 15%</span>
                  </article>
                </article>
              </article>
            </article>
            <article className='p-1'>
              <article className='card border-0 rounded-4' style={{ width: '11rem' }}>
                <article className='card-body d-flex flex-column pb-4 '>
                  <span className='fw-bold fs-6 pb-4'>Offer</span>
                  <span className='fw-bold fs-5'>33</span>
                  <span className='fw-normal fs-6'>Previous Period</span>
                  <article className='fw-light mt-2'>
                    <span>71 &nbsp;</span>
                    <span className={Styles.number1}><HiArrowTrendingUp size='15px' /> 15%</span>
                  </article>
                </article>
              </article>
            </article>
            <article className='p-1'>
              <article className='card  border-0 rounded-4' style={{ width: '11rem' }}>
                <article className=' card-body d-flex flex-column pb-4'>
                  <span className='fw-bold fs-6 pb-4'>Hired</span>
                  <span className='fw-bold fs-5'>15</span>
                  <span className='fw-normal fs-6'>Previous Period</span>
                  <article className='fw-light mt-2'>
                    <span>167 &nbsp;</span>
                    <span className={Styles.number1}><HiArrowTrendingUp size='15px' /> 15%</span>
                  </article>
                </article>
              </article>
            </article>
          </article>
          {/* chart */}
          <article className='mt-3'>
            <article className='card border-0 rounded-4' style={{ width: '34.5rem' }}>
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
                <article style={{ width: '500px' }}>
                  <Line options={options} data={data} />
                </article>
              </article>
            </article>
          </article>
        </article>
        <article className='pt-4 pb-5 mt-5'>
          <article className='card shadow mt-5 border-0 rounded-4 m-2'>
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
