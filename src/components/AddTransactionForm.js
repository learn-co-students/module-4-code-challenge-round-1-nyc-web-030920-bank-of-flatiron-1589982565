import React, { Component } from "react";

class AddTransactionForm extends Component {
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.props.submitHandler}>
          <div className="inline fields">
            <input type="date" name="date" value={this.props.date} onChange={(event) => this.props.updateInput(event)}/>
            <input type="text" name="description" placeholder="Description" value={this.props.description} onChange={(event) => this.props.updateInput(event)}/>
            <input type="text" name="category" placeholder="Category" value={this.props.category} onChange={(event) => this.props.updateInput(event)}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.props.amount}
              onChange={(event) => this.props.updateInput(event)}
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
