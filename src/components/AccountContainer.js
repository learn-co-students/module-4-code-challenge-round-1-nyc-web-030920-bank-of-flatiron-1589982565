import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import Alphabetical from "./Alphabetical"
const BASE_URL= "http://localhost:6001/transactions"
class AccountContainer extends Component {
  state={
    transactions:[],
    date :"",
    description:"",
    amount:"",
    category:"",
    search:"",
    option1: false,
    option2: false
  }
  handleChanges= (e)=>{
    this.setState({[e.target.name]: e.target.value})
  }
  
  fetchTransactions=()=>{
  fetch(BASE_URL).then(resp=>resp.json()).then(transactions=> this.setState({transactions}))
  }
  componentDidMount(){
    this.fetchTransactions()
  }
  addTransaction=(e)=>{
   
    e.preventDefault()
    console.log(this.state)
    fetch(BASE_URL, {
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({date: this.state.date, description: this.state.description, category: this.state.category, amount: this.state.amount})
    }).then(resp=>resp.json())
    .then(data=> this.addToTransactionList(data))
  }
  filterTransactions=()=>{
    return this.state.transactions.filter(trans=>{
      return trans.description.includes(this.state.search)
    })
  }
  addToTransactionList =(data) => {
    this.setState({transactions: [...this.state.transactions, data]})
  }
  render() {
    let list= this.filterTransactions()
    return (
      <div>
        <Search handleChanges={this.handleChanges}/>
        <Alphabetical option1={this.state.option1} option2={this.state.option2}/>
        <AddTransactionForm handleChange= {this.handleChanges}addTransaction={this.addTransaction} />
        <TransactionsList transactions={list} />
      </div>
    );
  }
}

export default AccountContainer;
