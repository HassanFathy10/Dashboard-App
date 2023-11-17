import React, {useState} from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Table from 'react-bootstrap/Table';
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
  const [selectedItem, setSelectedItem] = useState('London Internship Program'); // Here i Initialize with the default text i want
  const handleSelect = (eventKey) => {
      setSelectedItem(eventKey);
  }

  return (
    <article className='d-flex flex-wrap mx-5 position-absolute flex-wrap'>
      <article className='col-lg-5 col-md-10 col-sm-10 pb-5'>
        {/* head section 1 */}
        <article className="mt-3 pt-5 pb-5">
          <span className={`fw-bolder fs-5 ${Styles.font}`} href="#home">
            Opportunity Overview
          </span>
        </article>
        {/* body section 1 */}
        <article className='d-flex mt-2'>
          <article className='p-1'>
            <article className='card  border-0 rounded-4' style={{ width: '11rem' }}>
              <article className=' card-body d-flex flex-column pb-4'>
                <span className='fw-bold fs-6 pb-4'>Applied</span>
                <span className='fw-bold fs-5'>3,122</span>
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
                <span className='fw-bold fs-5'>183</span>
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
                <span className='fw-bold fs-5'>98</span>
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
      {/* section 2 */}
      <article className='col-lg-5 col-md-10 col-sm-10' >
        {/* head section 2 */}
        <article className="mt-3 pt-5 pb-5 d-flex gap-2">
          <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant="white" className='fw-bolder rounded-5' id="dropdown-basic">
              {selectedItem} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
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
            <Dropdown.Toggle variant="white" className='fw-bolder bg-white rounded-5' id="dropdown-basic">
              <span className='p-1'><Unicons.UilCalendarAlt size='15px' /></span>&nbsp;01 Jan 2023 - 31 July 2023 &nbsp; &nbsp; &nbsp; &nbsp;
            </Dropdown.Toggle>
          </Dropdown>
        </article>
        {/* body section 2 */}
        <article className='mx-0 w-100 pb-5'>
          <article className='card border-0 rounded-4 m-2'>
            <article className='p-3 d-flex flex-column'>
              <span className='fw-bold mb-4'>Total Candidate Flow</span>
              <span className='fw-bold fs-5'>4,567</span>
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
          {/* body section 2 */}
          <article className='d-flex pt-3 gap-5'>
            <article className='p-2'>
              <article className='card  border-0 rounded-4' style={{ width: '15rem' }}>
                <article className='card-body d-flex flex-column pb-4'>
                  <article className='d-flex'>
                    <span className='fw-bold fs-6 pb-4'>Recommended</span>
                    <span className='fw-bold ms-auto fs-6 pb-4'>2,164</span>
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
              <article className='card  border-0 rounded-4' style={{ width: '16rem' }}>
                <article className='card-body d-flex flex-column pb-4'>
                  <article className='d-flex'>
                    <span className='fw-bold fs-6 pb-4'>Interview</span>
                    <span className='fw-bold ms-auto fs-6 pb-4'>443</span>
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

      {/* body section 3  */}
      <article className='col-lg-10 pt-5 pb-5'>
        <article className='d-flex flex-column'>
          <article className="mb-3">
            <article className='d-flex flex-column p-3'>
              <span className='fw-bolder fs-5'>
                Detailed Opportunity Overview
              </span>
            </article>
          </article>
        </article>
        <article className='d-flex'>
          <input
            className="form-control form-control-lg border-0 w-50"
            type="text"
            placeholder="🔍 Search by employer name"
          />
          <article className='d-flex ms-auto gap-5'>
            <Dropdown>
              <Dropdown.Toggle variant="white" className='fw-bolder bg-white' id="dropdown-basic">
                <span className='p-5'>Sort by</span>
                <Unicons.UilSortAmountUp size='20px' />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Applied</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Recommended</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Interview</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Offer</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Hired</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Rejected</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button className='text-primary fw-bold bg-white border-0'>Export All As CSV</Button>
          </article>
        </article>
        {/* card */}
        <article className='pt-5'>
          <article className='card border-0 rounded-4 pb-5'>
            <article className='d-flex p-4'>
              <span className='fw-bold'>Google</span>
              <article className='d-flex ms-auto gap-5'>
                {/* page ProgramOverview */}
                <span><Link to='/ProgramOverview'><Unicons.UilChartPie /></Link></span>
                <span><Unicons.UilFileDownload /></span>
              </article>
            </article>
            {/* cards */}
            <article className='d-flex justify-content-center p-5 gap-5'>
              <article className='card p-5 text-center shadow border-0 rounded-4 flex-column'>
                <span className='mb-2'>Applied</span>
                <span className='fw-bold'>95</span>
              </article>
              <article className='card p-5 text-center shadow border-0 rounded-4'>
                <span className='mb-2'>Recommended</span>
                <span className='fw-bold'>57</span>
              </article>
              <article className='card p-5 text-center shadow border-0 rounded-4'>
                <span className='mb-2'>Interview</span>
                <span className='fw-bold'>39</span>
              </article>
              <article className='card p-5 text-center shadow border-0 rounded-4'>
                <span className='mb-2'>Hired</span>
                <span className='fw-bold'>33</span>
              </article>
              <article className='card text-center p-5 shadow border-0 rounded-4'>
                <span className='mb-2'>Total Rejected</span>
                <span className='fw-bold'>60</span>
              </article>
            </article>
            {/* table 1 */}
            <article className='p-5'>
              <Table className='border-5' striped bordered hover>
                <thead>
                  <tr>
                    <th>Opportunity Name</th>
                    <th>Status</th>
                    <th>Applied</th>
                    <th>Recommended</th>
                    <th>Interview</th>
                    <th>Offer</th>
                    <th>Hired</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowSpan="3">UX Internship</td>
                    <td><span className={Styles.td1}>Active</span></td>
                    <td>20</td>
                    <td>17</td>
                    <td>4</td>
                    <td>3</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td><span className={Styles.td2}>Disqualified</span></td>
                    <td>7</td>
                    <td>4</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Sub - Total</td>
                    <td>27</td>
                    <td>21</td>
                    <td>5</td>
                    <td>4</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td rowSpan="3">Art Internship</td>
                    <td><span className={Styles.td1}>Active</span></td>
                    <td>44</td>
                    <td>32</td>
                    <td>21</td>
                    <td>19</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td><span className={Styles.td2}>Disqualified</span></td>
                    <td>24</td>
                    <td>4</td>
                    <td>7</td>
                    <td>8</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>Sub - Total</td>
                    <td>68</td>
                    <td>36</td>
                    <td>28</td>
                    <td>27</td>
                    <td>13</td>
                  </tr>
                </tbody>
              </Table>
            </article>
          </article>
        </article>
        {/* card 2 */}
        <article className='pt-5'>
          <article className='card border-0 rounded-4 pb-5'>
            <article className='d-flex p-4'>
              <span className='fw-bold'>Microsoft</span>
              <article className='d-flex ms-auto gap-5'>
                {/* page ProgramOverview */}
              <span><Link to='/ProgramOverview'><Unicons.UilChartPie /></Link></span>
                <span><Unicons.UilFileDownload /></span>
              </article>
            </article>
            {/* cards */}
            <article className='d-flex justify-content-center p-5 gap-5'>
              <article className='card p-5 text-center shadow border-0 rounded-4 flex-column'>
                <span className='mb-2'>Applied</span>
                <span className='fw-bold'>34</span>
              </article>
              <article className='card p-5 text-center shadow border-0 rounded-4'>
                <span className='mb-2'>Recommended</span>
                <span className='fw-bold'>42</span>
              </article>
              <article className='card p-5 text-center shadow border-0 rounded-4'>
                <span className='mb-2'>Interview</span>
                <span className='fw-bold'>22</span>
              </article>
              <article className='card p-5 text-center shadow border-0 rounded-4'>
                <span className='mb-2'>Hired</span>
                <span className='fw-bold'>4</span>
              </article>
              <article className='card text-center p-5 shadow border-0 rounded-4'>
                <span className='mb-2'>Total Rejected</span>
                <span className='fw-bold'>19</span>
              </article>
            </article>
            {/* table 1 */}
            <article className='p-5'>
              <Table className='border-5' striped bordered hover>
                <thead>
                  <tr>
                    <th>Opportunity Name</th>
                    <th>Status</th>
                    <th>Applied</th>
                    <th>Recommended</th>
                    <th>Interview</th>
                    <th>Offer</th>
                    <th>Hired</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowSpan="3">UX Internship</td> {/* This cell spans 3 rows */}
                    <td><span className={Styles.td1}>Active</span></td>
                    <td>20</td>
                    <td>17</td>
                    <td>4</td>
                    <td>3</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    {/* Empty cells for other columns */}
                    <td><span className={Styles.td2}>Disqualified</span></td>
                    <td>7</td>
                    <td>4</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    {/* Empty cells for other columns */}
                    <td>Sub - Total</td>
                    <td>27</td>
                    <td>21</td>
                    <td>5</td>
                    <td>4</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td rowSpan="3">Art Internship</td> {/* This cell spans 3 rows */}
                    <td><span className={Styles.td1}>Active</span></td>
                    <td>20</td>
                    <td>17</td>
                    <td>4</td>
                    <td>3</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    {/* Empty cells for other columns */}
                    <td><span className={Styles.td2}>Disqualified</span></td>
                    <td>24</td>
                    <td>4</td>
                    <td>7</td>
                    <td>8</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    {/* Empty cells for other columns */}
                    <td>Sub - Total</td>
                    <td>27</td>
                    <td>21</td>
                    <td>11</td>
                    <td>6</td>
                    <td>2</td>
                  </tr>
                </tbody>
              </Table>
            </article>
          </article>
        </article>
      </article>
    </article>
  );
}
