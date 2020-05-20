import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";
const API = 'http://localhost:6001/transactions'

class App extends Component {
  state = {
    transactions: [],
    date: "",
    description: "",
    category: "",
    amount: "",
    search: ""
  }

  handleSearch = (event) => {
    this.setState({search: event.target.value})
  }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(transactions => this.setState({ transactions: transactions }))
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    fetch(API, {
      method: 'POST',
      body: JSON.stringify({
        date: this.state.date,
        description: this.state.description,
        category: this.state.category,
        amount: this.state.amount
      }),
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(transaction => {
        let newState = this.state.transactions;
        newState.push(transaction)
        this.setState({ transactions: newState })
      })
  }

  render() {
    console.log(this.state)
    let filteredTransactions = this.state.transactions.filter(transaction => {
      if (transaction.description.toLowerCase().includes(this.state.search.toLocaleLowerCase()))
      {return true}
      else {return false}
    })
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer transactions={filteredTransactions} change={this.handleChange} submit={this.handleSubmit} search={this.state.search} handleSearch={this.handleSearch} />
      </div>
    );
  }
}

export default App;
