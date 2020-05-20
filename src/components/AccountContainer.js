import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
const ENDPOINT = "http://localhost:6001/transactions"
const header = {
  "Accept": "application/json",
  "Content-type": "application/json"
}

class AccountContainer extends Component {
  /* changed the amount to null so it increments now but it updates the category as well but when you delete the number
  from the category and add your input it works fine, figuring out why it's updating the category now*/
  state = {
    transactions: [],
    sort: "", 
    description: "",
    amount: null,
    category: "",
    date: ""
  }

  componentDidMount(){
    fetch(ENDPOINT)
    .then(response => response.json())
    .then(transaction => this.setState({transactions: transaction}))
  }

  searchTransactions = (event) => {
    this.setState({sort: event.target.value})
  }



  updateInput = (event) => {
    if(event.target.name === "date"){
      this.setState({date: event.target.value})
    }
    else if(event.target.name === "description"){
      this.setState({description: event.target.value})
    }
    else if(event.target.name === "category"){
      this.setState({category: event.target.value})
    }
    else if(event.target.name === "amount"){
      this.setState({category: event.target.value})
    }
  }

  submitHandler = (event) => {
    event.preventDefault()
    let newTransaction = {date: this.state.date, description: this.state.description, category: this.state.category, amount: this.state.amount }
    fetch(ENDPOINT, {
      method: "POST",
      headers: header,
      body: JSON.stringify(newTransaction)
    })
    .then(response => response.json())
    .then(submitedData => this.setState({description: "", amount: 0, date: "", category: "", transactions: [...this.state.transactions, submitedData]}))
  }

  // this deleted my whole DB so that's why i have it commented out, going back and trying to fix the amount input before i try and fix this
  // deleteTransaction = (id) => {
  //   this.setState({transactions: this.state.transactions.filter(transaction => transaction.id !== id)})
  //   fetch(`${ENDPOINT}/${id}`, {method: "DELETE"})
  // }

  render() {
    console.log(this.state)
    const {description, category, amount, date} = this.state;
    let transaction = this.state.transactions.filter(transaction => transaction.description.toLowerCase().includes(this.state.sort.toLowerCase()))
    return (
      <div>
        <Search searchTransactions={this.searchTransactions}/>
        <AddTransactionForm 
        description={description}
        category={category}
        amount={amount}
        updateInput={this.updateInput}
        submitHandler={this.submitHandler}
        />
        <TransactionsList 
        transactions={transaction} 
        deleteTransaction={this.deleteTransaction}/>
      </div>
    );
  }
}

export default AccountContainer;
