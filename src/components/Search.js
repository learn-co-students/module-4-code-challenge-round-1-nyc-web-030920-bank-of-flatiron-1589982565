import React from "react";

const Search = (props) => {

  console.log(props)
  return (
    <div className="ui large fluid icon input">
      <input
        name="search"
        type="text"
        placeholder={"Search your Recent Transactions"}
        value={props.search}
        onChange={props.filterSearch}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
