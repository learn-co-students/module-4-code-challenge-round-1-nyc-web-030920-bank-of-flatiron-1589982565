import React, {Component} from "react";

class Search extends Component {

  state={
    currentQuery: ''
  }
  handleSearch = (event) => {
    this.setState({currentQuery: event.target.value})
    this.props.searchFunc(this.state.currentQuery)
    console.log(this.state)
    
  }


  render() {
  return (
    <div className="ui large fluid icon input">
      <input
        value={this.state.currentQuery}
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={this.handleSearch}
      />
      <i className="circular search link icon"></i>
    </div>
  );
      }
};

export default Search;
