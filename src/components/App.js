import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

class App extends Component {
  state = {
    transactions: []
  }

  componentDidMount(){
    fetch("http://localhost:6001/transactions")
    .then(response => response.json())
    .then(data => this.setState({transactions: data}))
  }
 
  updateState = (array) => {
    this.setState({transactions: array })
  }

  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer transactions = {this.state.transactions} updateState = {this.updateState} />
      </div>
    );
  }
}

export default App;
