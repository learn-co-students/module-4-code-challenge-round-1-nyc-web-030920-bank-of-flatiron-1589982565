import React, { Component } from "react";

class AddTransactionForm extends Component {
state = {
    date: '',
    description: '',
    category: '',
    amount: ''
}

blankSlate = {date: '',
description: '',
category: '',
amount: ''}

handleChange = (event) => {
  this.setState({ [event.target.name]: event.target.value})
}

handleSubmit = (event) => {
  event.preventDefault()
  let newTrans = {...this.state}
  fetch(`http://localhost:6001/transactions`, {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json'
    },
    body: JSON.stringify(newTrans)
    })
    .then(response => response.json())
    .then(newTrans => this.props.addNewTrans(newTrans))
    .then(this.setState({
      date: '',
      description: '',
      category: '',
      amount: ''
    }))
}

  render() {
    const {date, description, category, amount} = this.state
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <input value={date} onChange={this.handleChange} type="date" name="date" />
            <input value={description} onChange={this.handleChange}  type="text" name="description" placeholder="Description" />
            <input value={category} onChange={this.handleChange} type="text" name="category" placeholder="Category" />
            <input
              type="number"
              name="amount"
              value={amount}
              onChange={this.handleChange} 
              placeholder="Amount"
              step="0.01"
            />
          </div>
          <button className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
