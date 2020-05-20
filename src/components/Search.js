import React, { Component } from "react";

class Search extends Component {
 
  // state = {
  //   search: '',
  // }

  

  render() {

    return (
      <div className="ui large fluid icon input">
      <input
        type="text"
        name="search"
        value={this.props.search}
        placeholder={"Search your Recent Transactions"}
        onChange={(e) => { this.props.handleSearch(e) }}
          // onChange={}
          />
      <i className="circular search link icon"></i>
    </div>
  );
};
}

export default Search;
