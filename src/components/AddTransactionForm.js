import React, { Component } from "react";

class AddTransactionForm extends Component {

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.props.handleSubmit}>
          <div className="inline fields">
            <input type="date" name="date" value={this.props.state.date} onChange={this.props.handleChange}/>
            <input type="text" name="description" placeholder="Description" value={this.props.state.description} onChange={this.props.handleChange}/>
            <input type="text" name="category" placeholder="Category" value={this.props.state.category} onChange={this.props.handleChange}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.props.state.amount}
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
