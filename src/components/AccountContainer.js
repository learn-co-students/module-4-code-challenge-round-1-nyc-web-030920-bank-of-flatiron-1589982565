import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    search: ''
  }

  componentDidMount(){
    fetch('http://localhost:6001/transactions')
    .then(response => response.json())
    .then(data => this.setState({transactions: data}))
  }

  addPurchase = (newPurchase) => {
    this.setState({transactions: [...this.state.transactions, newPurchase]})
  }

  handleSearch = (event) => {
    this.setState({search: event.target.value})
  }

  render() {
    const filteredTransactions = this.state.transactions.filter(transaction => transaction.description.toLowerCase().includes(this.state.search.toLowerCase()))
    return (
      <div>
        <Search search={this.handleSearch}/>
        <AddTransactionForm addPurchase={this.addPurchase}/>
        <TransactionsList transactions={filteredTransactions} />
      </div>
    );
  }
}

export default AccountContainer;
