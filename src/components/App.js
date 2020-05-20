import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

// API URL
const transactionsUrl = 'http://localhost:3000/transactions'
const headers = { 
  "content-type": "application/json",
  "accept": "application/json"
}

class App extends Component {  
  state = { 
    allTransactions: [], 
    
  }

  componentDidMount() { 
    this.fetchAllTransactions()
  }

  fetchAllTransactions = () => { 
    fetch(transactionsUrl)
      .then(res => res.json())
    .then(allTransactions => this.setState({allTransactions: allTransactions}))
  }

  submitTransaction = (event) => {
    event.preventDefault();
    fetch(transactionsUrl, {
      method: "POST",
      headers,
      body: JSON.stringify({
        date: event.target.date.value,
        description: event.target.description.value,
        category: event.target.category.value,
        amount: event.target.amount.value
      })
    })
      .then(res => res.json())
      .then(newTransaction => {
        let allTransactionsCopy = [...this.state.allTransactions]
        this.setState = ({ 
          allTransactions: [...allTransactionsCopy, newTransaction]
        })
      })
  }

  

  render() {
    console.log(this.state.searchInput)
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer allTransactions={this.state.allTransactions} submitTransaction={this.submitTransaction} />
      </div>
    );
  }
}

export default App;
