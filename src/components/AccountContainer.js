import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const transactionUrl = 'http://localhost:6001/transactions'
const newHeaders = {"Content-type": "application/json; charset=UTF-8"}

class AccountContainer extends Component {

  state = {
    transactions: [],
    addTransaction: {},
  }

  componentDidMount() {
    fetch(transactionUrl)
      .then(response => response.json())
      .then(transactions => this.setState({ transactions }))
  }

  newTransaction = (addTransaction) => {
    // this.setState({ addTransaction })
    fetch(transactionUrl, {
      method: 'POST',
      body: JSON.stringify(addTransaction),
      headers: newHeaders  })
        .then(response => response.json())
        // - do i reload db or do i just update the table - 
        // i realize this could probably all be done at once without
        // calling another function, just want to get it to work first
        .then(addNewTransaction => this.updateTransactions(addTransaction) )

  }

  updateTransactions = (transaction) => {
    this.setState({ transactions: [...this.state.transactions, transaction]})
  }

  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm newTransaction={this.newTransaction}/>
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
