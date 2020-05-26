import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state = {
    search: ''
  }
 
  handleSearch = (event) => {
  this.setState({search: event.target.value})
  }
  
  render() {
    let filteredTransaction = this.props.transactions.filter(transaction => {
      if(transaction.description.toLowerCase().includes(this.state.search.toLowerCase()))
        {return true}
      else {return false}
    })
    return (
      <div>
        <Search search = {this.state.search} handleSearch = {this.handleSearch}/>
        <AddTransactionForm transactions = {this.props.transactions} updateState = {this.props.updateState} />
        <TransactionsList transactions = {filteredTransaction} />
      </div>
    );
  }
}

export default AccountContainer;
