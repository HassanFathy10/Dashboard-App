import React from 'react';
import Header1 from '../Component/Header1';
import ListGroup from 'react-bootstrap/ListGroup';
import * as Unicons from '@iconscout/react-unicons';
import Styles from './style.module.css';

export default function Option1() {
    return (
        <article className={`min-vh-100 ${Styles.cover}`}>
            <Header1 />
            <article className='d-flex'>
                <article className='col-lg-4'>
                    <input
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="🔍 Search by name, edu, exp, or #tag"
                    />
                    <ListGroup className='mt-4'>
                        <ListGroup.Item action>
                            <article className='d-flex list-unstyled p-2'>
                                <li className='me-auto fs-5 fw-medium'>Filters</li>
                                <li className=''>0 Selected</li>
                            </article>
                        </ListGroup.Item>
                        <ListGroup.Item action>
                            <article className='d-flex list-unstyled p-2'>
                                <li className='me-auto fs-5 fw-medium'><Unicons.UilFileAlt />
                                    <span className='mx-2 pt-4' >Personal Information</span>
                                </li>
                                <li className=''><Unicons.UilAngleDown /></li>
                            </article>
                        </ListGroup.Item>
                        <ListGroup.Item action>
                            <article className='d-flex list-unstyled p-2'>
                                <li className='me-auto fs-5 fw-medium'><Unicons.UilFileAlt />
                                    <span className='mx-2 pt-4' >Education</span>
                                </li>
                                <li className=''><Unicons.UilAngleDown /></li>
                            </article>
                        </ListGroup.Item>
                        <ListGroup.Item action>
                            <article className='d-flex list-unstyled p-2'>
                                <li className='me-auto fs-5 fw-medium'><Unicons.UilFileAlt />
                                    <span className='mx-2 pt-4' >Work Experience</span>
                                </li>
                                <li className=''><Unicons.UilAngleDown /></li>
                            </article>
                        </ListGroup.Item>
                        <ListGroup.Item action>
                            <article className='d-flex list-unstyled p-2'>
                                <li className='me-auto fs-5 fw-medium'><Unicons.UilFileAlt />
                                    <span className='mx-2 pt-4' >Activity Filter</span>
                                </li>
                                <li className=''><Unicons.UilAngleDown /></li>
                            </article>
                        </ListGroup.Item>
                        <ListGroup.Item action>
                            <article className='d-flex list-unstyled p-2'>
                                <li className='me-auto fs-5 fw-medium'><Unicons.UilFileAlt />
                                    <span className='mx-2 pt-4' >Advanced Filter</span>
                                </li>
                                <li className=''><Unicons.UilAngleDown /></li>
                            </article>
                        </ListGroup.Item>
                    </ListGroup>
                </article>
            </article>
            <article className='col-6'>
                <article className='row' >
                    
                </article>
            </article>
        </article>
    );
}
