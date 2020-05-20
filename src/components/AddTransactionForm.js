import React, { Component } from "react";

class AddTransactionForm extends Component {
  render() {
    // console.log("Trans form props =>", this.props.newTransaction)
    const {amount, date, category, description} = this.props.newTransaction
    const { handleSort, handleChange, handleSubmit} = this.props
    return (
      <div className="ui segment">
        <form onSubmit={handleSubmit} className="ui form">
          <div className="inline fields">
            <input onChange={handleChange} value={date} type="date" name="date" />
            <input onChange={handleChange} value={description} type="text" name="description" placeholder="Description" />
            <input onChange={handleChange} value={category} type="text" name="category" placeholder="Category" />
            <input 
              onChange={handleChange}
              value={amount}
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
        <br/>
        <button onClick={handleSort} name="description" className="ui button">Description</button>
        <button onClick={handleSort} name="category" className="ui button">Category</button>
        <button onClick={handleSort} name="amount" className="ui button">Amount</button>
      </div>
    );
  }
}

export default AddTransactionForm;
