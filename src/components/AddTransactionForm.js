import React, { Component } from "react";

class AddTransactionForm extends Component {
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.props.submitTransaction} className="ui form">
          <div className="inline fields">
            <input name="date" value={this.props.submitTransactionFormInputHandler} type="date" name="date" />
            <input name="description" value={this.props.submitTransactionFormInputHandler} type="text" name="description" placeholder="Description" />
            <input name="date" value={this.props.submitTransactionFormInputHandler} type="text" name="category" placeholder="Category" />
            <input
              type="number"
              name="amount"
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
