import React, { Component } from "react";

class AddTransactionForm extends Component {

  state = {
    date: '',
    description: '',
    category: '',
    amount: 0
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const {date, description, category, amount} = this.state
    fetch('http://localhost:6001/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        date: date,
        description: description,
        category: category,
        amount: amount
      })
    })
    .then(response => response.json())
    .then(newPurchase => this.props.addPurchase(newPurchase))
    this.setState({
      date: '',
      description: '',
      category:'',
      amount: 0
    })
  }

  render() {
    const {date, description, category, amount} = this.state
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <input type="date" name="date" 
            value={date} 
            onChange={this.handleChange}
            />
            <input type="text" name="description" 
            value={description} placeholder="Description" 
            onChange={this.handleChange} 
            />
            <input type="text" name="category" 
            value={category} placeholder="Category" 
            onChange={this.handleChange} 
            />
            <input
              type="number"
              name="amount"
              value={amount}
              onChange={this.handleChange}
              placeholder="Amount"
              step="0.01"
            />
          </div>
          <button className="ui button" type="submit" >
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
