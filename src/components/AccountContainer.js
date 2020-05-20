import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
const API = "http://localhost:6001/transactions"
const headers = { 'Content-Type': 'application/json',
'Accept': 'application/json'}
class AccountContainer extends Component {
  state = {
    transactions: [],
    date: "",
    description: "",
    category: "",
    amount: null,
    query: ""
  }

  componentDidMount(){
    fetch(API).then(resp => resp.json()).then(data => this.setState({transactions: data}))
  }

  // submitHandler = (event, id) => {
  //   event.preventDefault()
  //   fetch(API+"/"+id, {
  //     method: "PATCH",
  //     headers: headers,
  //     body: {
  //       date: this.state.date,
  //       description: this.state.description,
  //       category: this.state.category,
  //       amount: this.state.amount
  //     }
  //   }).then(resp => resp.json()).then(data => this.setState({ transactions: this.state.transactions.filter(transaction => transaction.id === id ? data : transaction)}))
  // }

  submitHandler = (event) => {
    event.preventDefault();
    fetch(API, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        date: this.state.date,
        description: this.state.description,
        category: this.state.category,
        amount: this.state.amount
      })}).then(resp => resp.json()).then(data => this.setState({transactions: this.state.transactions.concat(data)})
    ).then(this.resetForm())
  }

  resetForm = () => {
    this.setState({ date: "", description: "", category: "", amount: null})
  }

  formHandler = (event) => {
    this.setState({[event.target.name] : event.target.value})
  }

  searchHandler = (event) => {
    this.setState({query: event.target.value})
  }

  render() {
    let allTransactions = this.state.transactions.filter(transaction => transaction.description.toLowerCase().includes(this.state.query.toLowerCase()))
    console.log(this.state.query)
    return (
      <div>
        <Search 
        query={this.state.query}
        searchHandler={this.searchHandler}/>
        <AddTransactionForm 
        formHandler={this.formHandler} 
        submitHandler={this.submitHandler}/>
        <TransactionsList transactions={allTransactions}/>
      </div>
    );
  } 
}

export default AccountContainer;
