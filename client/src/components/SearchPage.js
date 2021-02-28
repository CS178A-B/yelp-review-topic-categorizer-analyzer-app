import React from 'react';

const SearchBar = () => (
    <div style={{
        backgroundImage: '../../public/restaurantinside.png'
    }}>
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
    </div>
);


export default SearchBar