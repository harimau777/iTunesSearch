import React from 'react';

const Search = ({handleSearch, handleQueryUpdate}) => (
  <div className="search">
    <label>Artist Name:</label>
    <input type="text" id="searchText" onChange={handleQueryUpdate}></input>
    <button onClick={handleSearch}>Search</button>
  </div>
);

export default Search;
