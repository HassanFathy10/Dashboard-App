import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
const items: MenuProps['items'] = [
    {
        label: 'Profile',
        key: '1',
    },
    {
        label: 'Evaluation',
        key: '2',
    },
    {
        label: 'Placement',
        key: '3',
    },
    {
        label: 'Compliance',
        key: '4',
    },
    {
        label: 'Notes',
        key: '5',
    },
];
export default function NavBar() {
    const [current, setCurrent] = useState('mail');
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <>
            <Menu className='gap-5 fw-bold' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        </>
    );
}
