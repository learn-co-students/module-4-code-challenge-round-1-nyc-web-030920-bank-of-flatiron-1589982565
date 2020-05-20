import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import SortTransactions from './SortTransactions'
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
    },
    sortBy: ''
  }

  componentDidMount() {
    fetch(transactionsUrl)
      .then(res => res.json())
      .then(transactions => this.setState({transactions}))
  }

  addNewTransaction = (event) => {
    this.setState({
      newTransaction: {
        ...this.state.newTransaction,
        [event.target.name]: event.target.value
      }
    })
  }
  
  //1. make a post to database with user input data
  //2. remember to parse the amount
  //3. add the new data to this.state.transactions
  //4. clear the this.state.newTransaction
  submitTransaction = (event) => {
    event.preventDefault()
    let newTransaction = {...this.state.newTransaction, amount: parseFloat(this.state.newTransaction.amount)}
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

  searchInput = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  sortOption = (event) => {
    this.setState({
      sortBy: event.target.value
    })
  }

  filterTransaction = (type) => {
    let sorted = []
    if (type === 'all') {
      sorted = [...this.state.transactions]
    } else if (type === 'description') {
      sorted = [...this.state.transactions].sort((a, b) => a.description > b.description ? 1 : -1)
    } else if (type === 'category') {
      sorted = [...this.state.transactions].sort((a, b) => a.category > b.category ? 1 : -1)
    }
    return sorted
  }

  deleteTransaction = (id) => {
    fetch(`${transactionsUrl}/${id}`, {method: 'DELETE'})
    this.setState({
      transactions: [...this.state.transactions].filter(transaction => transaction.id !== id)
    })
  }

  render() {
    console.log("🔫🔫🔫🔫🔫AccountContainer:", this.state)
    let filtered = [...this.state.transactions].filter(transaction => transaction.description.toLowerCase().includes(this.state.search.toLowerCase()))
    let sorted = this.filterTransaction(this.state.sortBy)
    return (
      <div>
        <Search search={this.state.search} handleChange={this.searchInput}/>
        <AddTransactionForm 
        state={this.state.newTransaction} 
        handleChange={this.addNewTransaction} 
        handleSubmit={this.submitTransaction}/>

        <SortTransactions type={this.state.sortBy} handleChange={this.sortOption}/>
        {this.state.sortBy
        ? <TransactionsList transactions={sorted} handleDelete={this.deleteTransaction}/>
        : <TransactionsList transactions={filtered} handleDelete={this.deleteTransaction}/>
        }

        
      </div>
    );
  }
}

export default AccountContainer;
