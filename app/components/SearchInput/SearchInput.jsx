import React from 'react';

const SearchInput = ({ search, onSearchHandler, placeHolder }) => {
    return (
        <input value={search} onChange={onSearchHandler} placeholder={placeHolder} className="searchInput"/>
    );
}

export default SearchInput;