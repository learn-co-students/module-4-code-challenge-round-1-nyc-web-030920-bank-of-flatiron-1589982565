import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
      newTransaction: {
        date: "",
        description: "",
        category: "",
        amount: ""
      }
  }


  componentDidMount(){
    fetch(`http://localhost:6001/transactions`, )
      .then(response => response.json())
      .then(transactions => this.setState({transactions: transactions}))
  }

  handleChange = (e) => {
    this.setState({newTransaction: {...this.state.newTransaction, [e.target.name] : e.target.value}})
  }

  handleSubmit= (e) => {
    e.preventDefault();
    let newTrans = this.state.newTransaction
    console.log(newTrans)
    fetch(`http://localhost:6001/transactions`, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(newTrans)
      })
      .then(response => response.json())
      .then(addedTrans => this.setState({
                                        transactions: [...this.state.transactions, addedTrans],
                                        newTransaction: {
                                          date: "",
                                          description: "",
                                          category: "",
                                          amount: ""}
                                      }))
      
    console.log("Inside the handle Submit")
  }

  render() {
    // console.log("AccountContainer State =>", this.state)
    return (
      <div>
        <Search />
        <AddTransactionForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} newTransaction={this.state.newTransaction} />
        <TransactionsList transactions={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
