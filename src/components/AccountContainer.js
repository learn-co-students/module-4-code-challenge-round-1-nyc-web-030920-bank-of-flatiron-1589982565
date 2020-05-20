import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state = { 
    searchResult: ""
  }

  searchResult = (event) => { 
    this.setState({
      searchResult: event.target.searchBar.value
    })
  }

  render() {
    let allTransactionsCopy = [...this.props.allTransactions]
    allTransactionsCopy.filter(transaction => transaction.desc) //filter method here!! 
    return (
      <div>
        <Search />
        <AddTransactionForm submitTransaction={this.props.submitTransaction} />
        <TransactionsList allTransactions={this.props.allTransactions} /> // then i would have passed down the filtered list here!!
      </div>
    );
  }
}

export default AccountContainer;
