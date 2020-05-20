import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

import * as requests from "../requests";

class AccountContainer extends Component {

  state = {
    transactions: [],
    filter: ""
  }

  submitTransaction = (event) => {
    event.preventDefault();
    console.log("submit", event.target);

    const newTransaction = {
      date: event.target.date.value,
      description: event.target.description.value,
      category: event.target.category.value,
      amount: event.target.amount.value
    };

    console.log("new", newTransaction);

    requests.postNewTransaction(newTransaction)
    .then(data => {
      console.log("transaction successfully entered");
      this.getAllTransactions();
    });
  }

  updateFilter = (event) => {
    console.log("filter", event.target.value);
    this.setState({filter: event.target.value});
  }

  getAllTransactions = () => {
    console.log("get all transactions!");
    requests.getAllTransactions()
    .then(transactions => this.setState({transactions}))
  }

  deleteTransaction = (event) => {
    console.log("delete transaction", event.target.dataset.id);
    requests.deleteTransaction(event.target.dataset.id)
    .then(data => {
      this.getAllTransactions();
    })
  }

  componentDidMount() {
    this.getAllTransactions();
  }

  render() {

    const filteredTransactions = this.state.transactions.filter(transaction => {
      return transaction.description.toLowerCase().includes(this.state.filter);
    });

    return (
      <div>
        <Search updateFilter={this.updateFilter} filter={this.state.filter} />
        <AddTransactionForm submitTransaction={this.submitTransaction} />
        <TransactionsList transactions={filteredTransactions} deleteTransaction={this.deleteTransaction} />
      </div>
    );
  }
}

export default AccountContainer;
