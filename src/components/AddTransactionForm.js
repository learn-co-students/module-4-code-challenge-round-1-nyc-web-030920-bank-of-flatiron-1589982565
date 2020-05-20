import React, { Component } from "react";

class AddTransactionForm extends Component {

  state = {
    date: "",
    description: "",
    category: "",
    amount: 0
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log("submit", event.target);

    const newTransaction = {
      date: event.target.date.value,
      description: event.target.description.value,
      category: event.target.category.value,
      amount: event.target.amount.value
    };

    this.props.submitTransaction(newTransaction);
    this.setState({
      date: "",
      description: "",
      category: "",
      amount: 0
    });
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onSubmit}>
          <div className="inline fields">
            <input 
              type="date" 
              name="date" 
              value={this.state.date}
              onChange={this.onChange}
            />
            <input 
              type="text" 
              name="description" 
              placeholder="Description" 
              value={this.state.description}
              onChange={this.onChange}
            />
            <input 
              type="text" 
              name="category" 
              placeholder="Category" 
              value={this.state.category}
              onChange={this.onChange}
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.state.amount}
              onChange={this.onChange}
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
