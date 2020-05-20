import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList allTransactions={this.props.allTransactions}/>
      </div>
    );
  }
}

export default AccountContainer;
