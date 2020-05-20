import React from "react";

const Search = (props) => {

  const {search, handleSearch} = props
  return (
    <div className="ui large fluid icon input">
      <input
        value={search}
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={handleSearch}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
