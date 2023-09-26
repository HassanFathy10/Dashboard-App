import React from 'react'
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import * as Unicons from '@iconscout/react-unicons';
import Styles from './style.module.css';


export default function SideBar() {
    return (
        <Navbar className='bg-white shadow'>
            <Nav className='col-lg-2 col-md-2 col-sm-2 pt-4'>
                <article className='row'>
                    <article className='d-flex min-vh-100'>
                        <article className=' p-4 list-group'>
                            <span className='p-2  mb-5'><Unicons.UilUser /></span>
                            <article className='list-group'>
                                <span className={`p-2 mb-2 ${Styles.link}`}><Link to='/'><Unicons.UilUsersAlt /></Link></span>
                                <span className={`p-2 mb-2 ${Styles.link}`}><Unicons.UilCalendarAlt /></span>
                                <span className={`p-2 mb-2 ${Styles.link}`}><Unicons.UilShareAlt /></span>
                                <span className={`p-2 mb-2 ${Styles.link}`}><Link to='/Option2'><Unicons.UilFileAlt color='fffff' /></Link></span>
                                <span className={`p-2 mb-2 ${Styles.link}`}><Unicons.UilDiaryAlt /></span>
                                <span className={`p-2 mb-2 ${Styles.link}`}><Unicons.UilHeart /></span>
                                <span className={`p-2 mb-2 ${Styles.link}`}><Unicons.UilAngleLeft /></span>
                            </article>
                            <article className='mt-auto list-group my-4'>
                                <span className={`p-2 mb-2 ${Styles.link}`}><Unicons.UilSetting /></span>
                                <span className={`p-2 fw-bolder fs-5 ${Styles.user}`}>AS</span>
                            </article>
                        </article>
                    </article>
                </article>
            </Nav>
        </Navbar>
    );
};
