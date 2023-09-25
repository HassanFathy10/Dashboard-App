import React from 'react'
import * as Unicons from '@iconscout/react-unicons';
import Styles from './style.module.css';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

export default function SideBar() {
    return (
        <Navbar expand="lg">
            <Nav>
                <article className='row'>
                    <article className='d-flex col-lg-2 col-md-2 col-sm-2  min-vh-100'>
                        <article className=' p-4 shadow list-group'>
                            <Nav.Link className='p-3  mb-5'><Unicons.UilUser /></Nav.Link>
                            <article className='list-group'>
                                <Nav.Link className={`p-3 mb-2 ${Styles.link}`}><Link to='/'><Unicons.UilUsersAlt /></Link></Nav.Link>
                                <Nav.Link className={`p-3 mb-2 ${Styles.link}`}><Unicons.UilCalendarAlt /></Nav.Link>
                                <Nav.Link className={`p-3 mb-2 ${Styles.link}`}><Unicons.UilShareAlt /></Nav.Link>
                                <Nav.Link className={`p-3 mb-2 ${Styles.link}`}><Link to='/'><Unicons.UilFileAlt color='fffff' /></Link></Nav.Link>
                                <Nav.Link className={`p-3 mb-2 ${Styles.link}`}><Unicons.UilDiaryAlt /></Nav.Link>
                                <Nav.Link className={`p-3 mb-2 ${Styles.link}`}><Unicons.UilHeart /></Nav.Link>
                                <Nav.Link className={`p-3 mb-2 ${Styles.link}`}><Unicons.UilAngleLeft /></Nav.Link>
                            </article>
                            <article className='mt-auto list-group'>
                                <Nav.Link className={`p-3 mb-2 ${Styles.link}`}><Unicons.UilSetting /></Nav.Link>
                                <Nav.Link className='p-3 mb-4'><Unicons.UilUser /></Nav.Link>
                            </article>
                        </article>
                    </article>
                </article>
            </Nav>
        </Navbar>
    );
};
