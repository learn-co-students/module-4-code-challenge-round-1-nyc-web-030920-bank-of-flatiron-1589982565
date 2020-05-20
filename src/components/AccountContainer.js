import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";


class AccountContainer extends Component {
state={
  search: ''
}

handleSearh(){


}
  render() {
    // console.log('accountContainer props:', this.props.transactions)
    
    return (
      <div>
        <Search transactions={this.props.transactions} handleSearch={this.handleSearch}/>
        <AddTransactionForm />
        <TransactionsList transactions={this.props.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
