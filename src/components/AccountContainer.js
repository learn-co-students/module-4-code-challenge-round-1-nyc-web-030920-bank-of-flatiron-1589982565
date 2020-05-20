import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state = {
    transactions: [],
    searchTerm: ''
  }

  componentDidMount(){
    fetch('http://localhost:6001/transactions')
    .then(resp => resp.json())
    .then(transactions => {
      this.setState({transactions})
    })
  }


  handleChange = event=>{
    this.setState ({
      searchTerm: event.target.value
    })
  }
  render() {
    console.log(this.state.searchTerm)
    return (
      <div>
        <Search searchTerm = {this.state.searchTerm} handleChange={this.handleChange} />
        <AddTransactionForm />
        <TransactionsList transactions = {this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
