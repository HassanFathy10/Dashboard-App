import React, { useState } from 'react';
import { Input, Tooltip } from 'antd';
import { InfoCircleOutlined, SearchOutlined } from '@ant-design/icons';


const Search = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        // Perform some logic with the search term
        const term = e.target.value;
        setSearchTerm(term);
        onSearch(term);
    };

    return (
        <article className='p-1'>
            <Input
                placeholder="Serach by name, edu, exp or #tag"
                prefix={<SearchOutlined className="site-form-item-icon me-3" />}
                suffix={
                    <Tooltip title="Extra information">
                        <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                    </Tooltip>
                }
                className='fs-5'
                value={searchTerm}
                onChange={handleSearch}
            />
        </article>
    );
};

export default Search;
