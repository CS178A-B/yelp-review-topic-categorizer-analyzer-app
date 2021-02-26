import React from 'react';

const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search restaurants"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
);


export default SearchBar