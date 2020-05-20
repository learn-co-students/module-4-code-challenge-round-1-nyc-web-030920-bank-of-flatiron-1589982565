import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

// API URL
const transactionsUrl = 'http://localhost:3000/transactions'

class App extends Component {  
  state = { 
    allTransactions: []
  }
  
  componentDidMount() { 
    this.fetchAllTransactions()
  }

  fetchAllTransactions = () => { 
    fetch(transactionsUrl)
      .then(res => res.json())
    .then(allTransactions => this.setState({allTransactions: allTransactions}))
  }

  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer allTransactions={this.state.allTransactions} />
      </div>
    );
  }
}

export default App;
