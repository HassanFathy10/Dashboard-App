import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Styles from './style.module.css';
import { AppstoreOutlined, MailOutlined, SettingOutlined, TagOutlined, UserDeleteOutlined, UserAddOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import Search from '../Component/Search';
import Candidates from '../Component/Candidates';


// Ant Design
type MenuItem = Required<MenuProps>['items'][number];
function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
    ): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
};
const items: MenuItem[] = [
    getItem('Personal Information', 'sub1', <MailOutlined className='fs-5' />, [
        getItem('Option 1', '1'),
        getItem('Option 2', '2'),
        getItem('Option 3', '3'),
        getItem('Option 4', '4'),
    ]),
    getItem('Education', 'sub2', <AppstoreOutlined className='fs-5' />, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),
    getItem('Work Experience', 'sub4', <SettingOutlined className='fs-5' />, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Option 11', '11'),
        getItem('Option 12', '12'),
    ]),
    getItem('Activity Filter', 'sub5', <SettingOutlined className='fs-5' />, [
        getItem('Option 13', '13'),
        getItem('Option 14', '14'),
        getItem('Option 15', '15'),
        getItem('Option 16', '16'),
    ]),
    getItem('Advanced Filter', 'sub6', <SettingOutlined className='fs-5' />, [
        getItem('Option 17', '17'),
        getItem('Option 18', '18'),
        getItem('Option 19', '19'),
        getItem('Option 20', '20'),
    ]),
];

export default function Option1() {
    const [candidates, setCandidates] = useState([
        {
            id: 1,
            user: 'AS',
            name: 'Aaliyah Sanderson',
            email: 'AaliyahSanderson@gmail.com',
            location: 'Riyadh, Saudi Arabia',
            edu: 'Bachelor - Cambridge University (2023 - 2023)',
            tag: '#top_candidate #top_candidate',
            phone: '+00954649849365',
            gender: 'Female',
            nationality: 'KSA',
            nationalId: '7987963466',
            dateofbirth: '8-4-1991',
        },
        {
            id: 2,
            user: 'JD',
            name: 'John Doe',
            email: 'JohnDoe@gmail.com',
            location: 'Bostom, USA',
            edu: 'Bachelor - MIT (2023 - 2023)',
            tag: '#top_candidate #top_candidate',
            phone: '+6464811665',
            gender: 'Male',
            nationality: 'USA',
            nationalId: '65464654',
            dateofbirth: '21-8-1994'
        },
        {
            id: 3,
            user: 'TM',
            name: 'Thomas Matt',
            email: 'ThomasMatt@gmail.com',
            location: 'Edinburgh, UK',
            edu: 'Bachelor - Harvard University (2023 - 2023)',
            tag: '#top_candidate',
            phone: '+0095362165',
            gender: 'Male',
            nationality: 'UK',
            nationalId: '46879613545',
            dateofbirth: '11-6-1982'
        },
        {
            id: 4,
            user: 'JS',
            name: 'Kamilia Smith',
            email: 'KamiliaSmith@gmail.com',
            location: 'London, UK',
            edu: 'Bachelor - Boston University (2023 - 2023)',
            tag: '#top_candidate #top_candidate',
            phone: '+9075362165',
            gender: 'Male',
            nationality: 'UK',
            nationalId: '489841613',
            dateofbirth: '30-3-1984'
        },
        {
            id: 5,
            user: 'RJ',
            name: 'Roy Jade',
            email: 'RoyJade@gmail.com',
            location: 'Cambridge, UK',
            edu: 'Bachelor - Yale (2023 - 2023)',
            tag: '#top_candidate #top_candidate',
            phone: '+5075362165',
            gender: 'Male',
            nationality: 'USA',
            nationalId: '9567613136',
            dateofbirth: '30-7-1986'
        },
        {
            id: 6,
            user: 'AS',
            name: 'Ahmed Salman',
            email: 'AhmedSalman@gmail.com',
            location: 'New York, USA',
            edu: 'Bachelor - Cambridge University (2023 - 2023)',
            tag: '#top_candidate #top_candidate',
            phone: '+7075362165',
            gender: 'Male',
            nationality: 'KSA',
            nationalId: '798165465',
            dateofbirth: '25-2-1994'
        },
        {
            id: 7,
            user: 'JP',
            name: 'Jerry S. Pollock',
            email: 'JerryS.Pollock@gmail.com',
            location: 'Saudi Arabia',
            edu: 'Bachelor in Marketing (2023 - 2023)',
            tag: '#top_candidate #top_candidate',
            phone: '+4075362165',
            gender: 'Male',
            nationality: 'UK',
            nationalId: '8313456453',
            dateofbirth: '1-3-1992'
        },
        {
            id: 8,
            user: 'MD',
            name: 'Michael D. McKee',
            email: 'MichaelD.McKee@gmail.com',
            location: 'Saudi Arabia',
            edu: 'Bachelor in Marketing (2023 - 2023)',
            tag: '#top_candidate #top_candidate',
            phone: '+9075362165',
            gender: 'Male',
            nationality: 'USA',
            nationalId: '65464654',
            dateofbirth: '21-8-1996'
        }
    ]);
    
    const [filteredCandidates, setFilteredCandidates] = useState(candidates);
    const [selectedItem, setSelectedItem] = useState('Opportunity Browsing');
    const handleSelect = (eventKey: string | null) => {
        setSelectedItem(eventKey || 'Default Item');
    };
    console.log(setCandidates)

    const handleSearch = (searchTerm: string) => {
        console.log('Search Term:', searchTerm);
        // Perform filtering logic based on the search term
        const filteredResults = candidates.filter(candidate =>
            candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            candidate.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
            candidate.edu.toLowerCase().includes(searchTerm.toLowerCase()) ||
            candidate.tag.toLowerCase().includes(searchTerm.toLowerCase())
        );
        console.log('Filtered Results:', filteredResults);
        // Update the state with filtered results
        setFilteredCandidates(filteredResults);
    };

    return (
        <article className='d-flex flex-wrap mx-5 position-absolute'>
            {/* Section1 */}
            <article className='col-lg-4 col-md-10 col-sm-10 pb-4'>
                {/* head section 1 */}
                <article className="pt-5 mb-5">
                    <article className='d-flex flex-column p-3'>
                        <span className={`fw-bolder fs-5 ${Styles.font}`}>
                            London Internship Program
                        </span>
                        <span className='fw-light'>Londan</span>
                    </article>
                </article>
                {/* body section 1 */}
                <article className='pt-3'>
                    <Search onSearch={handleSearch} />
                    <ListGroup className='mt-2 p-1'>
                        <ListGroup.Item action className='border-0 border-bottom'>
                            <article className='d-flex list-unstyled p-2'>
                                <li className='me-auto fs-5 fw-medium'>Filters</li>
                                <li className='bg-info p-1 rounded-5 fw-medium'>8 Selected</li>
                            </article>
                        </ListGroup.Item>
                        <Menu className='w-100 fw-medium fs-5' mode="inline" items={items} />
                    </ListGroup>
                </article>
            </article>

            {/* Section2 */}
            <article>
                {/* head section 2 */}
                <article className='d-flex gap-3 mt-5 pt-4 pb-4 flex-wrap'>
                    {/* Handle selected value in drop down */}
                    <Dropdown onSelect={handleSelect}>
                        <Dropdown.Toggle variant="white" className={`fw-bolder bg-white rounded-5 ${Styles.font}`} id="dropdown-basic">
                            {selectedItem} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="Applied" className={`d-flex p-3 fw-bolder ${selectedItem === 'Applied' ? Styles.itemdrop : ''}`} href="#/action-1">
                                Applied
                                <article className='ms-auto'>
                                    <span className={`fw-meduim ${Styles.number}`}>1745</span>
                                </article>
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="Shortlisted" className={`d-flex p-3 fw-bolder ${selectedItem === 'Shortlisted' ? Styles.itemdrop : ''}`} href="#/action-2">
                                Shortlisted
                                <article className='ms-auto'>
                                    <span className={`fw-meduim ${Styles.number}`}>453</span>
                                </article>
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="Technical Interview" className={`d-flex p-3 fw-bolder ${selectedItem === 'Technical Interview' ? Styles.itemdrop : ''}`} href="#/action-3">
                                Technical Interview
                                <article className='ms-auto'>
                                    <span className={`fw-meduim ${Styles.number}`}>123</span>
                                </article>
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="Opportunity Browsing" className={`d-flex p-3 fw-bolder ${selectedItem === 'Opportunity Browsing' ? Styles.itemdrop : ''}`} href="#/action-3">
                                Opportunity Browsing &nbsp; &nbsp;
                                <article className='ms-auto'>
                                    <span className={`fw-meduim ${Styles.number}`}>243</span>
                                </article>
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="Video Interview I" className={`d-flex p-3 fw-bolder ${selectedItem === 'Video Interview I' ? Styles.itemdrop : ''}`} href="#/action-3">
                                Video Interview I
                                <article className='ms-auto'>
                                    <span className={`fw-meduim ${Styles.number}`}>25</span>
                                </article>
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="Video Interview II" className={`d-flex p-3 fw-bolder ${selectedItem === 'Video Interview II' ? Styles.itemdrop : ''}`} href="#/action-3">
                                Video Interview II
                                <article className='ms-auto'>
                                    <span className={`fw-meduim ${Styles.number}`}>25</span>
                                </article>
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="Video Interview III" className={`d-flex p-3 fw-bolder ${selectedItem === 'Video Interview III' ? Styles.itemdrop : ''}`} href="#/action-3">
                                Video Interview III
                                <article className='ms-auto'>
                                    <span className={`fw-meduim ${Styles.number}`}>25</span>
                                </article>
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="Offer" className={`d-flex p-3 fw-bolder ${selectedItem === 'Offer' ? Styles.itemdrop : ''}`} href="#/action-3">
                                Offer
                                <article className='ms-auto'>
                                    <span className={`fw-meduim ${Styles.number}`}>25</span>
                                </article>
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="Withdrawn" className={`d-flex p-3 fw-bolder ${selectedItem === 'Withdrawn' ? Styles.itemdrop : ''}`} href="#/action-3">
                                Withdrawn
                                <article className='ms-auto'>
                                    <span className={`fw-meduim ${Styles.number}`}>25</span>
                                </article>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <article className='d-flex flex-wrap'>
                        <Nav className='gap-1'>
                            <Nav.Link className={`p-2 ${Styles.link}`} href="#link"><TagOutlined className='fs-4' /> </Nav.Link>
                            <Nav.Link className={`p-2 ${Styles.link}`} href="#link"><UserDeleteOutlined className='fs-4' /> </Nav.Link>
                            <Nav.Link className={`p-2 ${Styles.link}`} href="#link"><UserAddOutlined className='fs-4' /> </Nav.Link>
                            <Nav.Link className={`p-2 ${Styles.link}`} href="#link"><UserOutlined className='fs-4' /> </Nav.Link>
                        </Nav>
                    </article>
                    <Dropdown as={ButtonGroup}>
                        <Button variant="primary" className='mx-1'>Move To Video Interview I</Button>
                        <Dropdown.Toggle variant="primary" id="dropdown-split-basic" />
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </article>
                {/* body section 2 */}
                <article className='col-sm-12 p-3 mt-5'>
                    <article className='card shadow rounded-5 border-0'>
                        <article className={`d-flex p-3 gap-0 ${Styles.line}`}>
                            <Candidates data={candidates} candidates={filteredCandidates} />
                        </article>
                    </article>
                </article>
            </article>
        </article>
    );
};
