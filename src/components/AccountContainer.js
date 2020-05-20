import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  render() {
    console.log('HEYYYYY', this.props.transactions)

    return (
      <div>
        {/* {this.props.transactions.map(transaction) => <Transaction key={transaction.id} {...transaction}}} */}

        <Search />
        <AddTransactionForm />
        <TransactionsList transcations={this.props.transcations}/>
      </div>
    );
  }
}

export default AccountContainer;
