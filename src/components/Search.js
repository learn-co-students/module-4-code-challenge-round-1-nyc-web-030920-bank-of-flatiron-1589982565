import React from "react";

const Search = (props) => {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        value={props.query}
        placeholder={"Search your Recent Transactions by Description or Category"}
        onChange={(event) => {
          props.searchHandler(event)
        }}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
 