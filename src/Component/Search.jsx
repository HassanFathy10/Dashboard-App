import React, { useState } from 'react';

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
            <input
                className="form-control form-control-lg border-0"
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="🔍 Search by name, edu, exp, or #tag"
            />
        </article>
    );
};

export default Search;
