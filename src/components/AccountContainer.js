import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: []
  }

  saveData = (data) => {
    this.setState({transactions: data})
  }

  addTransaction= (transactionObj) => {
    fetch('http://localhost:6001/transactions', {
      method: 'POST',
      headers: {
        "Accepts": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(transactionObj)
    })
    // this.fetchData()
    console.log(this.state)
  }

  fetchData() {
    fetch('http://localhost:6001/transactions')
    .then(resp => resp.json())
    .then(data => this.saveData(data))
  }
componentDidMount() {
  this.fetchData()
}

searchFunc = (query) => {
  const filtered = this.state.transactions.filter(transaction => transaction.description === query)
  this.setState({transactions: filtered})
  this.fetchData()
}

  render() {
    return (
      <div>
        <Search searchFunc={this.searchFunc} />
        <AddTransactionForm updateFunc={this.addTransaction} />
        <TransactionsList transactions={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
