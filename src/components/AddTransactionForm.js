import React, { Component } from "react";

class AddTransactionForm extends Component {
  render() {

    const {handleChange, handleSubmit} = this.props
    const {date, description, category, amount} = this.props.newTransaction

    return (
      <div className="ui segment">
        <form onSubmit={handleSubmit} className="ui form">
          <div className="inline fields">
            <input onChange={handleChange} value={date} type="date" name="date" /> 
            <input onChange={handleChange} value={description} type="text" name="description" placeholder="Description" />
            <input onChange={handleChange} value={category} type="text" name="category" placeholder="Category" />
            <input onChange={handleChange} value={amount}
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
