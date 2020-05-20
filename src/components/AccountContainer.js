import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const endpoint = 'http://localhost:6001/transactions'

class AccountContainer extends Component {

  state = {
    transactions: [],
    search: '',
    date: '',
    description: '',
    category: '',
    amount: 0
    // pass states down, then the states are set via onChange and then you just pass those into body of POST
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    fetch(endpoint)
    .then(r => r.json())
    .then( transactions => {
      this.setState({
        transactions
      })
    })
  }

  handleChange = (event) => {
      this.setState({
          [event.target.name]: event.target.value
      })
  }

  handleSubmit = (e) => {
      e.preventDefault()
    let { date, description, category, amount } = this.state
  
    let newTrans = { date, description, category, amount }

    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(newTrans)
    }
  
    // may need return for set state if it doesn't work but pretty confident it's fine. 
    fetch(endpoint, options)
        .then(r => r.json())
        .then( updatedTrans => {
          this.setState({
            transactions: [...this.state.transactions, updatedTrans], 
            date: '', description: '', category: '', amount: ''
          })
        })
  }
  
  handleSearch = (e) => {
    this.setState({ search: e.target.value })
  }


  render() {

    const {date, description, category, amount, transactions, search} = this.state

    let filteredTrans = [...transactions.sort((a, b) => a.category.localeCompare(b.category))]

    if(search.length > 0) {
      filteredTrans = filteredTrans.filter(trans => {
        if(trans.description.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
          return true 
        } else {
          return false
        }
      })
    }

    return (
      <div>
        <Search search={search} handleSearch={this.handleSearch} />
        <AddTransactionForm 
          date={date} 
          description={description} 
          category={category} 
          amount={amount} 
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit}
          />
        
        <TransactionsList transactions={filteredTrans} /> 
        {/* may need to change this to filteredTransactions for the search but u can still just call it transactions so nothing else should change. you would remove the this.state which i can do anyways cs of the const :p thanks for the reminder andrew of the past*/}
      </div>
    );
  }
}

export default AccountContainer;
