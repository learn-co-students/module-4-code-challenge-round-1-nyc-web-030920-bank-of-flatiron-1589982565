import React, { Component } from "react";

class AddTransactionForm extends Component {
  state = { 
    description: "",
    category: "", 
    amount: 0.00, 
    // date: Date() // unsure what the default data here should be. Googled a bunch and I would need a lot more time to figure it out.  
  }

  // componentDidMount() { // These two functions were my attempt to set the time and while successful, wouldn't react to any changes on the app itself.
  //   this.setDate()
  // }

  // setDate = () => {
  //   let date = new Date();
  //   this.setState({ date: date});
  // }
    
  submitTransactionFormInputHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    console.log(this.props)
    return (
      <div className="ui segment">
        <form onSubmit={this.props.submitTransaction} className="ui form">
          <div className="inline fields">
            <input value={this.state.date} onChange={this.submitTransactionFormInputHandler} type="date" name="date" />
            <input value={this.state.description} onChange={this.submitTransactionFormInputHandler} type="text" name="description" placeholder="Description" />
            <input value={this.state.category} onChange={this.submitTransactionFormInputHandler} type="text" name="category" placeholder="Category" />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.state.amount}
              onChange={this.submitTransactionFormInputHandler}
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
