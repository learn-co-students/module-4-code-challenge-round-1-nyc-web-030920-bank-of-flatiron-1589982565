import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
const transactionsUrl = 'http://localhost:6001/transactions'

class AccountContainer extends Component {

  state = {
    transactions: [],
    search: '',
    newTransaction: {
      date: '',
      description: '',
      category: '',
      amount: ''
    }
  }

  componentDidMount() {
    fetch(transactionsUrl)
      .then(res => res.json())
      .then(transactions => this.setState({transactions}))
  }

  changeInput = (event) => {
    this.setState({
      newTransaction: {
        ...this.state.newTransaction,
        [event.target.name]: event.target.value
      }
    })
  }
  
  //1. make a post to database with user input data
  //2. remember to parseInt the amount
  //3. add the new data to this.state.transactions
  //4. clear the this.state.newTransaction
  submitTransaction = (event) => {
    event.preventDefault()
    let newTransaction = {...this.state.newTransaction, amount: parseInt(this.state.newTransaction.amount)}
    fetch(transactionsUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(newTransaction)
    })
    .then(res => res.json())
    .then(res => this.setState({
      transactions: [...this.state.transactions, res],
      newTransaction: {
        date: '',
        description: '',
        category: '',
        amount: ''
      }
    }))
  }
  render() {
    console.log("🔫🔫🔫🔫🔫AccountContainer:", this.state)
    return (
      <div>
        <Search />
        <AddTransactionForm 
        state={this.state.newTransaction} 
        handleChange={this.changeInput} 
        handleSubmit={this.submitTransaction}/>
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
