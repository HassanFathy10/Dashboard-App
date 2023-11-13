import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        // Perform some logic with the search term
        onSearch(searchTerm);
    };

    return (
        <article className='p-1'>
            <input
                className="form-control form-control-lg border-0"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="🔍 Search by name, edu, exp, or #tag"
            />
            <button onClick={handleSearch}>Search</button>
        </article>
    );
};

export default Search;
