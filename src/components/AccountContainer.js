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
      date: null,
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
  render() {
    console.log("Trans:", this.state)
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
