import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  render() {
    return (
      <div>
        <Search search={this.props.search} handleSearch={this.props.handleSearch} />
        <AddTransactionForm change={this.props.change} submit={this.props.submit}/>
        <TransactionsList transactions={this.props.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
