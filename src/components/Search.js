import React from "react";

const Search = (props) => {
  const {searched, handleSearch} = props
  console.log('search props :>> ', props);
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        value={searched}
        placeholder={"Search your Recent Transactions"}
        onChange={handleSearch}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
