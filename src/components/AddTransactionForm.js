import React, { Component } from "react";

class AddTransactionForm extends Component {
  
  render() {
    console.log(this.props)
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.props.AddTransactions}>
          <div className="inline fields">
            <input onChange={this.props.handleChange} name="date" value={this.props.date}type="date" name="date" />
            <input onChange={this.props.handleChange} name="description" value={this.props.description}type="text" name="description" placeholder="Description" />
            <input onChange={this.props.handleChange} name="category" value={this.props.category}type="text" name="category" placeholder="Category" />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.props.amount}
              onChange={this.props.handleChange}
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
