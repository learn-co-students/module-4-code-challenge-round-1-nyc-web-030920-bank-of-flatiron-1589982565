import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import Alphabetical from "./Alphabetical"
const BASE_URL = "http://localhost:6001/transactions"
class AccountContainer extends Component {
  state = {
    transactions: [],
    date: "",
    description: "",
    amount: "",
    category: "",
    search: "",
    option1: false,
    option2: false
  }
  destroy = (e) => {
    console.log("MUAHAHAHAHA FOOLISH MORTALS!")
    // fetch(`${BASE_URL}${e.target}`,{
    //   method: 'DELETE'
    // }).then(resp=>resp.json()).then()
  }
  handleChanges = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  fetchTransactions = () => {
    fetch(BASE_URL).then(resp => resp.json()).then(transactions => this.setState({ transactions }))
  }
  componentDidMount() {
    this.fetchTransactions()
  }
  addTransaction = (e) => {

    e.preventDefault()
    fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ date: this.state.date, description: this.state.description, category: this.state.category, amount: this.state.amount })
    }).then(resp => resp.json())
      .then(data => this.addToTransactionList(data))
  }
  filterTransactions = () => {
    return this.state.transactions.filter(trans => {
      return trans.description.includes(this.state.search)
    })
  }
  addToTransactionList = (data) => {
    this.setState({ transactions: [...this.state.transactions, data] })
  }

  handleRadio = (e) => {
    e.target.value === "option1" ? this.setState({ option1: true, option2: false }) : this.setState({ option1: false, option2: true })
  }

  alphabetizeTransactions = (transactions) => {
    if (this.state.option1) {
      transactions = transactions.sort((a, b) => a.category > b.category ? 1 : -1)
    } else if (this.state.option2) {
      transactions = transactions.sort((a, b) => a.description > b.description ? 1 : -1)
    }
    return transactions
  }
  alphabetSort = (array, param) => {
    return array.sort(function (a, b) {

    })
  }
  render() {
    let list = this.filterTransactions()
    list = this.alphabetizeTransactions(list)
    return (
      <div>
        <Search handleChanges={this.handleChanges} />
        <Alphabetical handleRadio={this.handleRadio} option1={this.state.option1} option2={this.state.option2} />
        <AddTransactionForm handleChange={this.handleChanges} addTransaction={this.addTransaction} />
        <TransactionsList destroy={this.destroy} transactions={list} />
      </div>
    );
  }
}

export default AccountContainer;
