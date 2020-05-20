import React, { Component } from "react";

class AddTransactionForm extends Component {
  render() {
    const {date, description,category,amount,fillForm,toggleSubmit} =this.props
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields">
            <input type="date" name="date" value={date} onChange={fillForm}/>
            <input type="text" name="description" placeholder="Description" value={description} onChange={fillForm}/>
            <input type="text" name="category" placeholder="Category" value={category} onChange={fillForm}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={amount}
              onChange={fillForm}
            />
          </div>
          <button className="ui button" type="submit" onClick={toggleSubmit}>
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
