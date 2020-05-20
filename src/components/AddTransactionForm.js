import React, { Component } from "react";

class AddTransactionForm extends Component {

  state = {
    date: '',
    description: '',
    category: '',
    amount: ''
  }


  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  // i feel like i need to prevent default? but got caught up in passing everything to parent
  // will need to revisit

  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   newTransaction({
  //     date: this.state.date,
  //     description: this.state.description,
  //     category: this.state.category,
  //     amount: this.state.amount
  //   })
  // }

  render() {
    const { date, description, category, amount } = this.state
    return (
      <div className="ui segment">
        {/* <form className="ui form" onSubmit={this.handleSubmit}> */}
        <form className="ui form" onSubmit={() => this.props.newTransaction({ date, description, category, amount})}>
          <div className="inline fields">
            <input 
              type="date"
              name="date"
              value={date}
              onChange={this.handleChange}
            />
            <input 
              type="text"
              name="description"
              placeholder="Description"
              value={description} 
              onChange={this.handleChange}
            />
            <input 
              type="text"
              name="category"
              placeholder="Category"
              value={category}
              onChange={this.handleChange}
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={amount}
              onChange={this.handleChange}
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
