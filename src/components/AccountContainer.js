import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state = {
    transactions: [],
    // id: null,
    date: '',
    description: '',
    category: '',
    amount: '',
    search: ''
  }

  componentDidMount(){
    fetch('http://localhost:6001/transactions')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        transactions: data
      })
    })
  }

  handleChange = (event) => {
    //updates state with form values
    console.log('handling change')
    console.log('event: ', event)
    console.log('event.target: ', event.target)
    console.log('event.target.value: ', event.target.value)
    console.log('event.target.name: ', event.target.name)

    this.setState({ [event.target.name]: event.target.value })
    console.log('state: ', this.state)
  }

  handleSubmit = (event) => {
    //takes what is in state and adds as a new transaction in the db
    event.preventDefault()
    console.log('you hit the submit button')

    let { date, description, category, amount } = this.state //pull out stuff from state
    fetch('http://localhost:6001/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        date,
        description,
        category,
        amount
      })
    })
  }

  handleSearch = (event) => {
    console.log('searching')
    console.log('event: ', event)
    console.log('event.target: ', event.target)
    console.log('event.target.value: ', event.target.value)

    let {name, value} = event.target
    this.setState({[name]: value})
  }

  render() {
    console.log(this.state)
    let { transactions, date, description, category, amount, search } = this.state
    return (
      <div>
        <Search handleSearch={this.handleSearch} />
        <AddTransactionForm handleChange={this.handleChange} date={date} description={description} category={category} amount={amount} handleSubmit={this.handleSubmit}/>
        <TransactionsList transactions={transactions} search={search}/>
      </div>
    );
  }
}

export default AccountContainer;
