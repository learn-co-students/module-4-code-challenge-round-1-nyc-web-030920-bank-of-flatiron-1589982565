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
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        transactions: data
      })
    })
  }

  handleChange = () => {
    console.log('handling change')
  }


  render() {
    console.log(this.state)
    return (
      <div>
        <Search />
        <AddTransactionForm handleChange={this.handleChange}/>
        <TransactionsList transactions={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
