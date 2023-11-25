import React, {useState} from 'react';
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
  const [selectedItem, setSelectedItem] = useState('London Internship Program'); // Here i Initialize with the default text i want
  const handleSelect = (eventKey) => {
    setSelectedItem(eventKey);
  };
  return (
    <article className='d-flex m-5 flex-wrap gap-5 position-absolute'>
      <article className=''>
        {/* head section 1 */}
        <article className="mt-3 pt-5 pb-5 d-flex flex-column">
          <span className='fw-bolder fs-5 mb-3'>
            Program Overview - Google
          </span>
          <span className='fw-bold'>UX Internship</span>
        </article>
        {/* body section 1 */}
        <article className='d-flex mt-2'>
          <article className='p-1'>
            <article className='card  border-0 rounded-4' style={{ width: '11rem' }}>
              <article className=' card-body d-flex flex-column pb-4'>
                <span className='fw-bold fs-6 pb-4'>Applied</span>
                <span className='fw-bold fs-5'>95</span>
                <span className='fw-normal fs-6'>Previous Period</span>
                <article className='fw-light mt-2'>
                  <span>1590 &nbsp;</span>
                  <span className={Styles.number1}><Unicons.UilArrowGrowth size='15px' /> 15%</span>
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
                  <span className={Styles.number1}><Unicons.UilArrowGrowth size='15px' /> 15%</span>
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
                  <span className={Styles.number1}><Unicons.UilArrowGrowth size='15px' /> 15%</span>
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
      <article className='col-4'>
        {/* head section 1 */}
        <article className="mt-3 pt-5 pb-5 d-flex gap-1">
          <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant="white" className='fw-bolder rounded-5' id="dropdown-basic">
              {selectedItem} &nbsp; &nbsp; &nbsp;
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="Applied" className={`d-flex p-3 fw-bolder ${selectedItem === 'Applied' ? Styles.itemdrop : ''}`} href="#/action-1">
                London Internship Program
              </Dropdown.Item>
              <Dropdown.Item eventKey="Applied" className={`d-flex p-3 fw-bolder ${selectedItem === 'Applied' ? Styles.itemdrop : ''}`} href="#/action-1">
                Opportunity Overview
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="white" className='fw-bold bg-white rounded-5' id="dropdown-basic">
              <span className='p-1'><Unicons.UilCalendarAlt size='15px' /></span>&nbsp;<span className='fs-6'>01 Jan 2023 - 31 July 2023</span>
            </Dropdown.Toggle>
          </Dropdown>
        </article>
        {/* body section 1 */}
        <article className='mt-5 pb-5'>
          <article className='card border-0 rounded-4 m-2' style={{ width: '28rem' }}>
            <article className='p-3 d-flex flex-column'>
              <span className='fw-bold mb-4'>Total Candidate Flow</span>
              <span className='fw-bold fs-5'>27</span>
            </article>
            <article className='d-flex'>
              <ul className='list-unstyled p-3 lh-lg'>
                <li className='fw-bold'>Stage</li>
                <li>Applied</li>
                <li>Recommended</li>
                <li>Interview</li>
                <li>Offer</li>
                <li>Hired</li>
              </ul>
              <article className='ms-auto d-flex '>
                <ul className='list-unstyled text-end p-3 lh-lg'>
                  <li className='fw-bold'>Qualified</li>
                  <li>3,122</li>
                  <li>2,164</li>
                  <li>443</li>
                  <li>183</li>
                  <li>118</li>
                </ul>
                <ul className='list-unstyled text-end p-3 lh-lg'>
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
          {/* body section 1 */}
          <article className='d-flex pt-3'>
            <article className='p-2'>
              <article className='card border-0 rounded-4' style={{ width: '12rem' }}>
                <article className='card-body d-flex flex-column pb-4'>
                  <article className='d-flex'>
                    <span className='fw-bold fs-6 pb-4'>Recommended</span>
                    <span className='fw-bold ms-auto fs-6 pb-4'>57</span>
                  </article>
                  <span className='fw-normal fs-6'>Previous Period</span>
                  <article className='fw-light mt-2'>
                    <span>1590 &nbsp;</span>
                    <span className={Styles.number1}><Unicons.UilArrowGrowth size='15px' /> 15%</span>
                  </article>
                </article>
              </article>
            </article>
            <article className='p-1 ms-auto'>
              <article className='card  border-0 rounded-4' style={{ width: '12rem' }}>
                <article className='card-body d-flex flex-column pb-4'>
                  <article className='d-flex'>
                    <span className='fw-bold fs-6 pb-4'>Interview</span>
                    <span className='fw-bold ms-auto fs-6 pb-4'>39</span>
                  </article>
                  <span className='fw-normal fs-6'>Previous Period</span>
                  <article className='fw-light mt-2'>
                    <span>1590 &nbsp;</span>
                    <span className={Styles.number1}><Unicons.UilArrowGrowth size='15px' /> 15%</span>
                  </article>
                </article>
              </article>
            </article>
          </article>
        </article>
      </article>
      <article className=''>
        {/* head section 1 */}
        <article className="mt-3 pt-5 pb-5 d-flex flex-column">
          <span className='fw-bolder fs-5 mb-3'>
            Art Internship
          </span>
        </article>
        {/* body section 1 */}
        <article className='d-flex mt-2'>
          <article className='p-1'>
            <article className='card  border-0 rounded-4' style={{ width: '11rem' }}>
              <article className=' card-body d-flex flex-column pb-4'>
                <span className='fw-bold fs-6 pb-4'>Applied</span>
                <span className='fw-bold fs-5'>95</span>
                <span className='fw-normal fs-6'>Previous Period</span>
                <article className='fw-light mt-2'>
                  <span>1590 &nbsp;</span>
                  <span className={Styles.number1}><Unicons.UilArrowGrowth size='15px' /> 15%</span>
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
                  <span className={Styles.number1}><Unicons.UilArrowGrowth size='15px' /> 15%</span>
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
                  <span className={Styles.number1}><Unicons.UilArrowGrowth size='15px' /> 15%</span>
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
      <article className='col-4'>
        {/* head section 1 */}
        <article className="pt-5 pb-5 d-flex gap-1">
          <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant="white" className='fw-bolder rounded-5' id="dropdown-basic">
              {selectedItem} &nbsp; &nbsp; &nbsp;
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="Applied" className={`d-flex p-3 fw-bolder ${selectedItem === 'Applied' ? Styles.itemdrop : ''}`} href="#/action-1">
                London Internship Program
              </Dropdown.Item>
              <Dropdown.Item eventKey="Applied" className={`d-flex p-3 fw-bolder ${selectedItem === 'Applied' ? Styles.itemdrop : ''}`} href="#/action-1">
                Opportunity Overview
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="white" className='fw-bold bg-white rounded-5' id="dropdown-basic">
              <span className='p-1'><Unicons.UilCalendarAlt size='15px' /></span>&nbsp;<span className='fs-6'>01 Jan 2023 - 31 July 2023</span>
            </Dropdown.Toggle>
          </Dropdown>
        </article>
        {/* body section 1 */}
        <article className='pt-4 pb-5'>
          <article className='card border-0 rounded-4 m-2' style={{ width: '28rem' }}>
            <article className='p-3 d-flex flex-column'>
              <span className='fw-bold mb-4'>Total Candidate Flow</span>
              <span className='fw-bold fs-5'>27</span>
            </article>
            <article className='d-flex'>
              <ul className='list-unstyled p-3 lh-lg'>
                <li className='fw-bold'>Stage</li>
                <li>Applied</li>
                <li>Recommended</li>
                <li>Interview</li>
                <li>Offer</li>
                <li>Hired</li>
              </ul>
              <article className='ms-auto d-flex '>
                <ul className='list-unstyled text-end p-3 lh-lg'>
                  <li className='fw-bold'>Qualified</li>
                  <li>3,122</li>
                  <li>2,164</li>
                  <li>443</li>
                  <li>183</li>
                  <li>118</li>
                </ul>
                <ul className='list-unstyled text-end p-3 lh-lg'>
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
          {/* body section 1 */}
          <article className='d-flex pt-3'>
            <article className='p-2'>
              <article className='card border-0 rounded-4' style={{ width: '12rem' }}>
                <article className='card-body d-flex flex-column pb-4'>
                  <article className='d-flex'>
                    <span className='fw-bold fs-6 pb-4'>Recommended</span>
                    <span className='fw-bold ms-auto fs-6 pb-4'>57</span>
                  </article>
                  <span className='fw-normal fs-6'>Previous Period</span>
                  <article className='fw-light mt-2'>
                    <span>1590 &nbsp;</span>
                    <span className={Styles.number1}><Unicons.UilArrowGrowth size='15px' /> 15%</span>
                  </article>
                </article>
              </article>
            </article>
            <article className='p-1 ms-auto'>
              <article className='card  border-0 rounded-4' style={{ width: '12rem' }}>
                <article className='card-body d-flex flex-column pb-4'>
                  <article className='d-flex'>
                    <span className='fw-bold fs-6 pb-4'>Interview</span>
                    <span className='fw-bold ms-auto fs-6 pb-4'>39</span>
                  </article>
                  <span className='fw-normal fs-6'>Previous Period</span>
                  <article className='fw-light mt-2'>
                    <span>1590 &nbsp;</span>
                    <span className={Styles.number1}><Unicons.UilArrowGrowth size='15px' /> 15%</span>
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
