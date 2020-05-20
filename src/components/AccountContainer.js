import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state={
    transaction:[],
    date:'',
    description:'',
    category:'',
    amount:'',
    search:''

  }
  getTransactions=()=>{
    fetch(`http://localhost:6001/transactions`)
    .then(resp=>resp.json())
    .then((data)=>{
      this.setState({transaction:data})
    })
  }
  AddTransactions=(event)=>{
    event.preventDefault()
    const{date,description,category,amount}=this.state
    fetch(`http://localhost:6001/transactions`,{
      method:"POST",
      headers:{
        'Content-Type':"application/json",
        'Accept':'application/json'
      },
      body:JSON.stringify({
        date,
        description,
        category,
        amount
      })
    })
    .then(this.setState({
      date:'',
      description:'',
      category:'',
      amount:''
    }))
    .then(this.getTransactions)
  }
  componentDidMount(){
    this.getTransactions()
  }
  handleSearch=(event)=>{
    const{name,value}=event.target
    this.setState({[name]:value})
  }
  handleChange=(event)=>{
    const{name,value}=event.target
    this.setState({[name]:value})
  }
  render() {
    return (
      <div>
        <Search handleSearch={this.handleSearch}{...this.setState}/>
        <AddTransactionForm handleChange={this.handleChange}{...this.state} AddTransactions={this.AddTransactions}/>
        <TransactionsList {...this.state} />
      </div>
    );
  }
}

export default AccountContainer;
