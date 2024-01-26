import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Table from 'react-bootstrap/Table';
import Styles from './style.module.css';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { DatePicker, Space } from 'antd';
import { HiArrowTrendingUp } from "react-icons/hi2";
import { FaFileDownload, FaChartPie } from "react-icons/fa";
import LineChart from '../Component/LineChart';

dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';

export default function Option2() {
  const [selectedItem, setSelectedItem] = useState('London Internship Program'); // Here i Initialize with the default text i want
  const handleSelect = (eventKey) => {
      setSelectedItem(eventKey);
  }

  return (
    <article className='mt-5'>
      <article className='d-flex flex-wrap gap-3 p-1 flex-wrap'>
        {/* section 1 */}
        <article className='col-lg-5 pb-5'>
          {/* head section 1 */}
          <article className="mt-3 pt-5 pb-5">
            <span className={`fw-bolder fs-5 ${Styles.font}`} href="#home">
              Opportunity Overview
            </span>
          </article>
          {/* body section 1 */}
          <article className='d-flex flex-wrap gap-3 mt-3'>
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
                {/* Chart */}
                <LineChart />
              </article>
            </article>
          </article>
        </article>
        {/* section 2 */}
        <article className='col-lg-5'>
          {/* head section 2 */}
          <article className="mt-3 pt-5 pb-5 d-flex gap-2">
            <Dropdown onSelect={handleSelect}>
              <Dropdown.Toggle variant="white" className='fw-bolder rounded-5' id="dropdown-basic">
                {selectedItem} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="London Internship Program" href="#/action-1">
                  London Internship Program
                </Dropdown.Item>
                <Dropdown.Item eventKey="Opportunity Overview" href="#/action-2">
                  Opportunity Overview
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Space direction="vertical" size={12}>
              <RangePicker
                defaultValue={[dayjs('2015/01/01', dateFormat), dayjs('2015/01/01', dateFormat)]}
                format={dateFormat}
                className='p-2 rounded-5'
              />
            </Space>
          </article>
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
      {/* body section 3  */}
      <article className='col-lg-10'>
        <article className='d-flex flex-column'>
          <article className="mb-3">
            <article className='d-flex flex-column p-3'>
              <span className='fw-bolder fs-5'>
                Detailed Opportunity Overview
              </span>
            </article>
          </article>
        </article>
        {/* card 1 */}
        <article className='pt-5'>
          <article className='card p-5 bg-primary-subtle shadow border-0 rounded-5'>
            <article className='card-body d-flex p-4'>
              <span className='fw-bold fs-5'>Google</span>
              <article className='d-flex ms-auto gap-5'>
                {/* page ProgramOverview */}
                <span><Link to='/ProgramOverview'><FaChartPie /></Link></span>
                <span><FaFileDownload /></span>
              </article>
            </article>
            {/* cards */}
            <article className='d-flex flex-wrap justify-content-center gap-3 mt-3 mb-3'>
              <article className='card shadow border-0 rounded-4' style={{ width: '10rem' }}>
                <article className='card-body d-flex flex-column pb-4'>
                  <span className='fw-bold fs-6 pb-4'>Applied</span>
                  <span className='fw-bold'>95</span>
                </article>
              </article>
              <article className='card shadow border-0 rounded-4' style={{ width: '10rem' }}>
                <article className='card-body d-flex flex-column pb-4'>
                  <span className='fw-bold fs-6 pb-4'>Recommended</span>
                  <span className='fw-bold'>57</span>
                </article>
              </article>
              <article className='card shadow border-0 rounded-4' style={{ width: '10rem' }}>
                <article className='card-body d-flex flex-column pb-4'>
                  <span className='fw-bold fs-6 pb-4'>Interview</span>
                  <span className='fw-bold'>39</span>
                </article>
              </article>
              <article className='card shadow border-0 rounded-4' style={{ width: '10rem' }}>
                <article className='card-body d-flex flex-column pb-4'>
                  <span className='fw-bold fs-6 pb-4'>Hired</span>
                  <span className='fw-bold'>33</span>
                </article>
              </article>
              <article className='card shadow border-0 rounded-4' style={{ width: '10rem' }}>
                <article className='card-body d-flex flex-column pb-4'>
                  <span className='fw-bold fs-6 pb-4'>Total Rejected</span>
                  <span className='fw-bold'>60</span>
                </article>
              </article>
            </article>
            {/* table 1 */}
            <article className='p-5 card shadow rounded-5 border-0'>
              <Table className='border-5 shadow' striped bordered hover responsive>
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
        <article className='pt-5 '>
          <article className='card p-5 bg-primary-subtle shadow border-0 rounded-5 pb-5'>
            <article className='d-flex p-4'>
              <span className='fw-bold'>Microsoft</span>
              <article className='d-flex ms-auto gap-5'>
                {/* page ProgramOverview */}
                <span><Link to='/ProgramOverview'><FaChartPie /></Link></span>
                <span><FaFileDownload /></span>
              </article>
            </article>
            {/* cards */}
            <article className='d-flex flex-wrap justify-content-center gap-3 mt-3 mb-3'>
              <article className='card shadow border-0 rounded-4' style={{ width: '10rem' }}>
                <article className='card-body d-flex flex-column pb-4'>
                  <span className='fw-bold fs-6 pb-4'>Applied</span>
                  <span className='fw-bold'>34</span>
                </article>
              </article>
              <article className='card shadow border-0 rounded-4' style={{ width: '10rem' }}>
                <article className='card-body d-flex flex-column pb-4'>
                  <span className='fw-bold fs-6 pb-4'>Recommended</span>
                  <span className='fw-bold'>42</span>
                </article>
              </article>
              <article className='card shadow border-0 rounded-4' style={{ width: '10rem' }}>
                <article className='card-body d-flex flex-column pb-4'>
                  <span className='fw-bold fs-6 pb-4'>Interview</span>
                  <span className='fw-bold'>22</span>
                </article>
              </article>
              <article className='card shadow border-0 rounded-4' style={{ width: '10rem' }}>
                <article className='card-body d-flex flex-column pb-4'>
                  <span className='fw-bold fs-6 pb-4'>Hired</span>
                  <span className='fw-bold'>4</span>
                </article>
              </article>
              <article className='card shadow border-0 rounded-4' style={{ width: '10rem' }}>
                <article className='card-body d-flex flex-column pb-4'>
                  <span className='fw-bold fs-6 pb-4'>Total Rejected</span>
                  <span className='fw-bold'>19</span>
                </article>
              </article>
            </article>
            {/* table 1 */}
            <article className='p-5 card rounded-5 border-0 shadow'>
              <Table className='border-5 shadow' striped bordered hover responsive>
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
                    <td>20</td>
                    <td>17</td>
                    <td>4</td>
                    <td>3</td>
                    <td>1</td>
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
