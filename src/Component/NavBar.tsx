import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

const onChange = (key: string) => {
    console.log(key);
};

const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'Profile',
        children: 'Content of Tab Pane 1',
    },
    {
        key: '2',
        label: 'Video',
        children: 'Content of Tab Pane 2',
    },
    {
        key: '3',
        label: 'Evaluation',
        children: 'Content of Tab Pane 3',
    },
    {
        key: '4',
        label: 'Placement',
        children: 'Content of Tab Pane 4',
    },
    {
        key: '5',
        label: 'Compliance',
        children: 'Content of Tab Pane 5',
    },
];
export default function NavBar() {
    return (
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    );
};

