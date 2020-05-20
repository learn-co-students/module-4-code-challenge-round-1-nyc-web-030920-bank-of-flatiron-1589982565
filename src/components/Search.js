import React from "react";

const Search = (props) => {
  return (
    <div className="ui large fluid icon input">
      <input
        name="search"
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={
          props.handleChanges
        }
      />
      <i className="circular search link icon"></i>

    </div>
  );
};

export default Search;
