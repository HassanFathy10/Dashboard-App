import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';
import * as Unicons from '@iconscout/react-unicons';
import Styles from './style.module.css';

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
const dataset1Data = [100, 200, 300, 400, 500, 600, 700];
const dataset2Data = [50, 150, 250, 350, 450, 550, 650];
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

export default function Option2() {



  return (
    <article className='d-flex flex-wrap mx-4 position-absolute flex-wrap'>
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
          <article className='card border-0 rounded-4' style={{ width: '40rem' }}>
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
              <article style={{ width: '600px' }}>
                <Line options={options} data={data} />
              </article>
            </article>
          </article>
        </article>
      </article>
      <article className='col-lg-5'>
        
      </article>
    </article>
  );
}
