import React, { Component } from "react";

class AddTransactionForm extends Component {



  render() {

    const {handleChange, handleSubmit, date, description, category, amount} = this.props

    return (
      <div className="ui segment">
        <form className="ui form"  onSubmit={handleSubmit} >
          <div className="inline fields">
            <input onChange={handleChange} type="date" name="date" value={date}  />
            <input onChange={handleChange} type="text" name="description" value={description}  placeholder="Description" />
            <input onChange={handleChange} type="text" name="category" value={category} placeholder="Category" />
            <input
              onChange={handleChange} type="number"
              name="amount"
              value={amount}
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
