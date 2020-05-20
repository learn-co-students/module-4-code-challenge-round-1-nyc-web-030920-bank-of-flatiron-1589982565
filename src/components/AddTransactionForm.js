import React, { Component } from "react";

class AddTransactionForm extends Component {

  state={
    date: '',
    category: '',
    description: '',
    amount: ''
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }


  //I got tripped up on this handleSubmit

  handleSubmit=event=>{
    event.preventDefault()
    // console.log(this.state)
    // const {date, category, description, amount} = this.state
    //amount needs to be changed to integer
   
    fetch(`http://localhost:6001/transactions`, {
      method: 'POST',
      header: 
      {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(
        this.state
      )
    })

  }

  

  render() {
    // console.log('form state:', this.state)
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit} >
          <div className="inline fields">
            <input value={this.state.name} type="date" name="date" onChange={this.handleChange} />
            <input  value={this.state.description} type="text" name="description" placeholder="Description" onChange={this.handleChange} />
            <input  value={this.state.category} type="text" name="category" placeholder="Category" onChange={this.handleChange} />
            <input
            value={this.state.amount}
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
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
