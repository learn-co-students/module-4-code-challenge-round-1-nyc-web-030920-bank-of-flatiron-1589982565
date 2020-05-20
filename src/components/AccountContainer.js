import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: []
  }
  componentDidMount(){
    fetch(`http://localhost:6001/transactions`, )
      .then(response => response.json())
      .then(transactions => this.setState({transactions: transactions}))
  }
  render() {
    // console.log("AccountContainer State =>", this.state)
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList transactions={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
