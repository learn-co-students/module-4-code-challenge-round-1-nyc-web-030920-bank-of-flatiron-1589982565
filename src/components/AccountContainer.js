import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  render() {
    let {transaction}= this.props
    console.log(transaction)
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList transaction={transaction}/>
      </div>
    );
  }
}

export default AccountContainer;
