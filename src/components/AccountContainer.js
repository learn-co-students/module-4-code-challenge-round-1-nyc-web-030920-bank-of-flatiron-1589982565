import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
      bankAccount: [],
      date: '',
      description:'',
      category: '',
      amount: '',
      search: ''
  }


  getInfo = () => {
    fetch("http://localhost:6001/transactions")
    .then(resp => resp.json())
    .then(data => this.setState({bankAccount: data}))
  }

  componentDidMount(){
    this.getInfo()
  }

  handleChange = (event) => {
      const {name,value} = event.target
      this.setState({[name]: value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const {date, description, category, amount} = this.state
    fetch("http://localhost:6001/transactions", {
      method: "POST",
      headers: {
        'Content-Type':'Application/json',
        'Accept': 'Application/json'
      },
      body: JSON.stringify({
        date,
        description,
        category,
        amount
      })
    })
    .then(this.getInfo)
  }

  handleSearch = (event) => {
      const{name, value}= event.target
      this.setState({[name]: value})
  }

  render() {
    return (
      <div>
        <Search {...this.state} handleSearch={this.handleSearch}/>
        <AddTransactionForm {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <TransactionsList {...this.state}/>
      </div>
    );
  }
}

export default AccountContainer;
