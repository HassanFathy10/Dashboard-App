import React from 'react'
import { Link } from 'react-router-dom';
import * as Unicons from '@iconscout/react-unicons';
import Styles from './style.module.css';


export default function SideBar() {
    return (
        <article className='bg-white shadow'>
            <article className='col-lg-2 col-md-2 col-sm-2 pt-4'>
                <article className='row'>
                    <article className='d-flex min-vh-100'>
                        <article className=' p-4 list-group'>
                            <span className={`p-2 mb-5 ${Styles.link}`}><Unicons.UilUser color='#161BD2' /></span>
                            <ul className='list-group list-unstyled nav-tabs'>
                                <li className={`p-2 mb-2 ${Styles.link}`}><Link to='/'><Unicons.UilUsersAlt color='#161BD2' /></Link></li>
                                <li className={`p-2 mb-2 ${Styles.link}`}><Unicons.UilCalendarAlt color='#161BD2' /></li>
                                <li className={`p-2 mb-2 ${Styles.link}`}><Link to='/Candidate/1'><Unicons.UilShareAlt color='#161BD2' /></Link></li>
                                <li className={`p-2 mb-2 ${Styles.link}`}><Link to='/Option2'><Unicons.UilFileAlt color='#161BD2' /></Link></li>
                                <li className={`p-2 mb-2 ${Styles.link}`}><Unicons.UilDiaryAlt color='#161BD2' /></li>
                                <li className={`p-2 mb-2 ${Styles.link}`}><Unicons.UilHeart color='#161BD2' /></li>
                                <li className={`p-2 mb-2 ${Styles.link}`}><Unicons.UilAngleLeft color='#161BD2' /></li>
                            </ul>
                            <article className='mt-auto list-group my-5'>
                                <span className={`p-2 mb-2 ${Styles.link}`}><Unicons.UilSetting color='#161BD2' /></span>
                                <span className={`p-2 fw-bolder fs-5 ${Styles.user}`}>AS</span>
                            </article>
                        </article>
                    </article>
                </article>
            </article>
        </article>
    );
};
