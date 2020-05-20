import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";
const API = 'http://localhost:6001/transactions'

class App extends Component {
  state= {
    transactions: [],
    date: "",
    description: "",
    category: "",
    amount: ""
  }
  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(transactions => this.setState({transactions: transactions}))
  }
  handleChange = (event) => {
  this.setState({[event.target.name]: event.target.value})
  }
  handleSubmit = (event) => {
    event.preventDefault()
    fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        date: this.state.date,
        description: this.state.description,
        category: this.state.category,
        amount: this.state.amount
      })
    })
    .then(resp => resp.JSON())
    .then(transaction => {let newState = this.state.transactions;
    newState.push(transaction)
    this.setState({transactions: newState})})
  }
  render() {
    console.log(this.state)
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer transactions={this.state.transactions} change={this.handleChange} submit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
