import React from "react";

class Search extends React.Component {
  state = { 
    searchInput: ""
  }

  setSearchInput = (event) => { 
    this.setState({
      searchInput: event.target.value
    })
  }

  render() {
    return (
      <div className="ui large fluid icon input">
        <input
          type="text"
          name="searchBar"
          placeholder={"Search your Recent Transactions"}
          value={this.state.searchInput}
          onChange={() => this.setSearchInput}
        />
        <i onClick={this.props.submitSearch} className="circular search link icon"></i>
      </div>
    )
  }
};

export default Search;
