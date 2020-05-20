import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: []
  }

  componentDidMount(){
    fetch('http://localhost:6001/transactions')
    .then(response => response.json())
    .then(data => this.setState({transactions: data}))
  }

  addPurchase = (newPurchase) => {
    this.setState({transactions: [...this.state.transactions, newPurchase]})
  }

  render() {
    console.log(this.state.transactions)
    return (
      <div>
        <Search />
        <AddTransactionForm addPurchase={this.addPurchase}/>
        <TransactionsList transactions={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
