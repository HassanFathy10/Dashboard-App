import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import Profile from './Profile';
import { Empty } from 'antd';

const onChange = (key: string) => {
    console.log(key);
};

const items: TabsProps['items'] = [
    {
        key: '1',
        label: <span className='fs-6 fw-medium'>Profile</span>,
        children: <Profile />,
    },
    {
        key: '2',
        label: <span className='fs-6 fw-medium'>Video</span>,
        children: <video src='' className="object-fit-contain" controls />,
    },
    {
        key: '3',
        label: <span className='fs-6 fw-medium'>Evaluation</span>,
        children:
        <article className='card p-5 shadow rounded-5 border-0 m-5'>
            <h4 className='text-decoration-underline text-success pb-3'>Evaluation:</h4>
            <p className='text-black-50'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </article>,
    },
    {
        key: '4',
        label: <span className='fs-6 fw-medium'>Placement</span>,
        children:
            <article className='card shadow rounded-5 border-0 m-5'>
                <Empty className='p-5 fw-medium text-black-50' />
            </article>,
    },
    {
        key: '5',
        label: <span className='fs-6 fw-medium'>Compliance</span>,
        children:
            <article className='card shadow rounded-5 border-0 m-5'>
                <Empty className='p-5 fw-medium text-black-50' />
            </article>,
    },
    {
        key: '6',
        label: <span className='fs-6 fw-medium'>Notes</span>,
        children:
            <article className='card p-5 shadow rounded-5 border-0 m-5'>
                <h4 className='text-decoration-underline text-warning pb-3'>Notes:</h4>
                <p className='text-black-50'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </article>,
    },
    {
        key: '7',
        label: <span className='fs-6 fw-medium'>Activity Log</span>,
        children:
            <article className='card shadow rounded-5 border-0 m-5'>
                <Empty className='p-5 fw-medium text-black-50' />
            </article>,
    },
];
export default function NavBar() {
    return (
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    );
};

