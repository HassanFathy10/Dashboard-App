import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Styles from './style.module.css';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Checkbox } from 'antd';
import type { MenuProps } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';

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

const plainOptions = [''];
const defaultCheckedList = [''];
const CheckboxGroup = Checkbox.Group;


export default function Option1() {
    const [selectedItem, setSelectedItem] = useState('Opportunity Browsing');
    const handleSelect = (eventKey: string | null) => {
        setSelectedItem(eventKey || 'Default Item');
    };

    // Ant Design
    const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(defaultCheckedList);

    const checkAll = plainOptions.length === checkedList.length;
    const indeterminate = checkedList.length > 0 && checkedList.length < plainOptions.length;
    
    const onChange = (list: CheckboxValueType[]) => {
        setCheckedList(list);
    };

    const onCheckAllChange = (e: CheckboxChangeEvent) => {
        setCheckedList(e.target.checked ? plainOptions : []);
    };

    return (
        <article className='d-flex flex-wrap mx-4 position-absolute'>
            
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
                <article>
                    <article className='p-1'>
                        <input
                            className="form-control form-control-lg border-0"
                            type="text"
                            placeholder="🔍 Search by name, edu, exp, or #tag"
                        />
                    </article>
                    <ListGroup className='mt-2 p-1'>
                        <ListGroup.Item action className='border-0 border-bottom'>
                            <article className='d-flex list-unstyled p-2'>
                                <li className='me-auto fs-5 fw-medium'>Filters</li>
                                <li className=''>0 Selected</li>
                            </article>
                        </ListGroup.Item>
                        <Menu className='w-100 fw-medium fs-5' mode="inline" items={items} />
                    </ListGroup>
                </article>
            </article>

            {/* Section2 */}
            <article className='col-lg-6 col-md-10 col-sm-10 '>
                {/* head section 2 */}
                <article className='d-flex mt-5 pt-3 pb-3 flex-wrap'>
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
                    <article className='d-flex'>
                        <Nav>
                            <Nav.Link className={`p-2 ${Styles.link}`} href="#link"> </Nav.Link>
                            <Nav.Link className={`p-2 ${Styles.link}`} href="#link"> </Nav.Link>
                            <Nav.Link className={`p-2 ${Styles.link}`} href="#link"> </Nav.Link>
                            <Nav.Link className={`p-2 ${Styles.link}`} href="#link"> </Nav.Link>
                        </Nav>
                    </article>
                    <Dropdown as={ButtonGroup} className='mx-2'>
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
                <article className='p-3 mt-5'>
                    <article className='card border-0'>
                        <article className={`d-flex p-3 flex-wrap ${Styles.line}`}>
                            <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll} />
                            <span className='text-primary fw-bold m-2'>247 candidates</span>
                            <article className='ms-auto d-flex'>
                                <span className='fw-medium text-primary m-2'>Qualified</span>
                                <span className={Styles.span}></span>
                                <span className='text-black fw-medium m-2'>Task <span className={Styles.number}>25</span></span>
                                <span className={Styles.span}></span>
                                <span className='text-black fw-medium m-2'>Disqualified <span className={Styles.number}>78</span></span>
                            </article>
                        </article>
                        <article className={`d-flex p-3 gap-5 ${Styles.line}`}>
                            <article className='d-flex mt-5'>
                                <CheckboxGroup className='mb-5' options={plainOptions} value={checkedList} onChange={onChange} />
                                <article className='mt-4 mx-3'>
                                    <span className={`p-3 fw-bolder fs-5 ${Styles.user}`}>AS</span>
                                </article>
                            </article>
                            <ul className='list-unstyled lh-lg'>
                                <li className='fw-bold'>Aaliyah Sanderson</li>
                                <li className='fw-normal'>Riyadh, Saudi Arabia</li>
                                <li className='fw-light'>Bachelor - Cambridge University (2023 - 2023)</li>
                                <li className='fw-light text-primary'>#top_candidate &nbsp; &nbsp; &nbsp;  #top_candidate</li>
                                <li className='fw-medium text-info'>
                                    <span className={Styles.info}>New York</span> &nbsp;
                                    <span className={Styles.info}>Marketing</span> &nbsp;
                                    <span className={Styles.info}>Londan</span>
                                </li>
                            </ul>
                        </article>
                        <article className={`d-flex p-3 gap-5 ${Styles.line}`}>
                            <article className='d-flex mt-5'>
                                <CheckboxGroup className='mb-5' options={plainOptions} value={checkedList} onChange={onChange} />
                                <article className='mt-4 mx-3'>
                                    <span className={`p-3 fw-bolder fs-5 ${Styles.user}`}>AS</span>
                                </article>
                            </article>
                            <ul className='list-unstyled lh-lg'>
                                <li className='fw-bold'>John Doe</li>
                                <li className='fw-normal'>Bostom, USA</li>
                                <li className='fw-light'>Bachelor - MIT (2023 - 2023)</li>
                                <li className='fw-light text-primary'>#top_candidate &nbsp; &nbsp; &nbsp;  #top_candidate</li>
                                <li className='fw-medium text-info'>
                                    <span className={Styles.info}>New York</span> &nbsp;
                                    <span className={Styles.info}>Marketing</span> &nbsp;
                                    <span className={Styles.info}>Londan</span>
                                </li>
                            </ul>
                        </article>
                        <article className={`d-flex p-3 gap-5 ${Styles.line}`}>
                            <article className='d-flex mt-5'>
                                <CheckboxGroup className='mb-5' options={plainOptions} value={checkedList} onChange={onChange} />
                                <article className='mt-4 mx-3'>
                                    <span className={`p-3 fw-bolder fs-5 ${Styles.user}`}>AS</span>
                                </article>
                            </article>
                            <ul className='list-unstyled lh-lg'>
                                <li className='fw-bold'>Thomas Matt</li>
                                <li className='fw-normal'>Edinburgh, UK</li>
                                <li className='fw-light'>Bachelor - Harvard University (2023 - 2023)</li>
                                <li className='fw-light text-primary'>#top_candidate &nbsp; &nbsp; &nbsp;  #top_candidate</li>
                                <li className='fw-medium text-info'>
                                    <span className={Styles.info}>New York</span> &nbsp;
                                    <span className={Styles.info}>Marketing</span> &nbsp;
                                    <span className={Styles.info}>Londan</span>
                                </li>
                            </ul>
                        </article>
                        <article className={`d-flex p-3 gap-5 ${Styles.line}`}>
                            <article className='d-flex mt-5'>
                                <CheckboxGroup className='mb-5' options={plainOptions} value={checkedList} onChange={onChange} />
                                <article className='mt-4 mx-3'>
                                    <span className={`p-3 fw-bolder fs-5 ${Styles.user}`}>AS</span>
                                </article>
                            </article>
                            <ul className='list-unstyled lh-lg'>
                                <li className='fw-bold'>Kamilia Smith</li>
                                <li className='fw-normal'>London, UK</li>
                                <li className='fw-light'>Bachelor - Boston University (2023 - 2023)</li>
                                <li className='fw-light text-primary'>#top_candidate &nbsp; &nbsp; &nbsp;  #top_candidate</li>
                                <li className='fw-medium text-info'>
                                    <span className={Styles.info}>New York</span> &nbsp;
                                    <span className={Styles.info}>Marketing</span> &nbsp;
                                    <span className={Styles.info}>Londan</span>
                                </li>
                            </ul>
                        </article>
                        <article className={`d-flex p-3 gap-5 ${Styles.line}`}>
                            <article className='d-flex mt-5'>
                                <CheckboxGroup className='mb-5' options={plainOptions} value={checkedList} onChange={onChange} />
                                <article className='mt-4 mx-3'>
                                    <span className={`p-3 fw-bolder fs-5 ${Styles.user}`}>AS</span>
                                </article>
                            </article>
                            <ul className='list-unstyled lh-lg'>
                                <li className='fw-bold'>Roy Jade</li>
                                <li className='fw-normal'>Cambridge,  UK</li>
                                <li className='fw-light'>Bachelor - Yale (2023 - 2023)</li>
                                <li className='fw-light text-primary'>#top_candidate &nbsp; &nbsp; &nbsp;  #top_candidate</li>
                                <li className='fw-medium text-info'>
                                    <span className={Styles.info}>New York</span> &nbsp;
                                    <span className={Styles.info}>Marketing</span> &nbsp;
                                    <span className={Styles.info}>Londan</span>
                                </li>
                            </ul>
                        </article>
                        <article className={`d-flex p-3 gap-5 ${Styles.line}`}>
                            <article className='d-flex mt-5'>
                                <CheckboxGroup className='mb-5' options={plainOptions} value={checkedList} onChange={onChange} />
                                <article className='mt-4 mx-3'>
                                    <span className={`p-3 fw-bolder fs-5 ${Styles.user}`}>AS</span>
                                </article>
                            </article>
                            <ul className='list-unstyled lh-lg'>
                                <li className='fw-bold'>Ahmed Salman</li>
                                <li className='fw-normal'>New York, USA</li>
                                <li className='fw-light'>Bachelor - Cambridge University (2023 - 2023)</li>
                                <li className='fw-light text-primary'>#top_candidate &nbsp; &nbsp; &nbsp;  #top_candidate</li>
                                <li className='fw-medium text-info'>
                                    <span className={Styles.info}>New York</span> &nbsp;
                                    <span className={Styles.info}>Marketing</span> &nbsp;
                                    <span className={Styles.info}>Londan</span>
                                </li>
                            </ul>
                        </article>
                    </article>
                </article>
            </article>
        </article>
    );
};
