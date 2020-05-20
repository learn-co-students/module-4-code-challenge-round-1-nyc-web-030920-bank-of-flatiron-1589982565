import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const API = 'http://localhost:6001/transactions'

class AccountContainer extends Component {

  state = {
    transactions: [],
    newTransaction: {
      id: "", // for consistent formatting in database
      date: "",
      description: "",
      category: "",
      amount: ""
    },
    search: ""
  }

  fetchTransactions = () => {
    fetch(API)
    .then(resp => resp.json())
    .then(data => this.setState({
      transactions: data
    }))
  }

  componentDidMount() {
    this.fetchTransactions()
  }

  handleChange = event => {
    this.setState({
      newTransaction: {
        ...this.state.newTransaction, [event.target.name]: event.target.value
      }
    })
  }

  postNewTransaction = () => {
    fetch(`${API}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(this.state.newTransaction)
    })
    .then(resp => resp.json())
    .then(this.setState({
      transactions: [...this.state.transactions, this.state.newTransaction]
    }))
  }

  handleSubmit = event => {
    event.preventDefault()
    this.postNewTransaction()
  }

  handleSearch = event => {
    this.setState({
      search: event.target.value
    })
  }

  deleteTransaction = id => {
    
    let transaction = this.state.transactions.find(transaction => transaction.id === id)

    fetch(`${API}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(transaction)
    })
    .then(resp => resp.json())
    .then(this.setState({
      transactions: [...this.state.transactions.filter(transaction => transaction.id !== id)]
    }))
  }

  render() {
    return (
      <div>
        <Search search={this.state.search} handleSearch={this.handleSearch}/>
        <AddTransactionForm newTransaction={this.state.newTransaction} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <TransactionsList transactions={this.state.transactions} search={this.state.search} deleteTransaction={this.deleteTransaction}/>
      </div>
    );
  }
}

export default AccountContainer;
