import React, { Component } from "react";

class AddTransactionForm extends Component {
state = {
  date: '',
  description: '',
  category: '',
  amount: ''
}

handleDateChange = (event) => {
  this.setState({date: event.target.value})
}
handleDescriptionChange = (event) => {
  this.setState({description: event.target.value})
}
handleCategoryChange = (event) => {
  this.setState({category: event.target.value})
}
handleAmountChange = (event) => {
  this.setState({amount: event.target.value})
}



  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields">
            <input type="date" name="date" value={this.state.date} onChange={this.handleDateChange} />
            <input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.handleDescriptionChange}/>
            <input type="text" name="category" placeholder="Category" value={this.state.category} onChange={this.handleCategoryChange}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.state.amount} onChange={this.handleAmountChange}
            />
          </div>
          <button onClick={() => {this.props.updateFunc(this.state)}} className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
