import React from "react";

const Search = props => {

  const {handleSearch, search, handleSortBy} = props

  return (
    <div className="ui large fluid icon input">
      <select onChange={handleSortBy}>
        <option value="default">Sort By</option>
        <option value="category">Category</option>
        <option value="description">Description</option>
      </select>

      <input onChange={handleSearch} value={search}
        type="text"
        placeholder={"Search your Recent Transactions"}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
