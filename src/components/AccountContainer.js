import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    searched: '',
    newTransaction: {
      "date": '',
      "description": '',
      "category": '',
      "amount": ''
    }
  }

  getTransactions = () => {
    fetch('http://localhost:6001/transactions')
    .then(resp => resp.json())
    .then(transactions => this.setState({ transactions }))
  }

  componentDidMount() {
    this.getTransactions()
  }

  handleSearch = (event) => {
    this.setState({ searched: event.target.value})
  }

  handleC

  render() {
    console.clear()
    console.log('Acct Cont State :>> ', this.state);
    const { transactions, searched } = this.state
    let filteredTransactions = transactions.filter(transaction => transaction.description.toLowerCase().includes(searched.toLowerCase()))
    return (
      <div>
        <Search searched={searched} handleSearch={this.handleSearch}/>
        <AddTransactionForm />
        <TransactionsList transactions={filteredTransactions}/>
      </div>
    );
  }
}

export default AccountContainer;
