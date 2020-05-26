import React, { Component } from "react";


const API = "http://localhost:6001/transactions"

class AddTransactionForm extends Component {
  state = {
    date: '',
    description: '',
    category: '',
    amount: ''
  }

  handleChange = (event) => {
    this.setState({[event.target.name]:event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch (API, {
      method: 'POST',
      body: JSON.stringify({
        date: this.state.date,
        description: this.state.description,
        category: this.state.category,
        amount: this.state.amount
      }),
      headers: {'content-type':'application/json'}
    })
    .then(response => response.json())
    .then(transaction => {let newState = this.props.transactions;
    newState.push(transaction) 
    this.props.updateState(newState)
    })
  }
  render() {
    // console.log(this.props.transactions)
    // console.log(this.state)
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields">
            <input onChange = {this.handleChange} type="date" name="date" />
            <input onChange = {this.handleChange}type="text" name="description" placeholder="Description" />
            <input onChange = {this.handleChange}type="text" name="category" placeholder="Category" />
            <input onChange = {this.handleChange}
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
            />
          </div>
          <button onClick = {this.handleSubmit} className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
