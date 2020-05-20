import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    search: "",
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
  }

  handleSearch = (e) => {
    this.setState({search: e.target.value})
    // console.log("Search Target Value => ", e.target.value)
  }

  handleDelete = (id) => {
    fetch(`http://localhost:6001/transactions/${id}`, {
      method: 'DELETE',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json'
      },
      })
      .then(response => response.json())
      this.setState({transactions: this.state.transactions.filter(trans => trans.id === id ? null : trans)})
  }

  render() {
    // console.log("AccountContainer State =>", this.state)
    let filteredTransactions = this.state.transactions.filter(transaction => transaction.description.toLowerCase().includes(this.state.search.toLowerCase()))
    return (
      <div>
        <Search handleSearch={this.handleSearch} search={this.state.search} />
        <AddTransactionForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} newTransaction={this.state.newTransaction} />
        <TransactionsList handleDelete={this.handleDelete} transactions={filteredTransactions} />
      </div>
    );
  }
}

export default AccountContainer;
