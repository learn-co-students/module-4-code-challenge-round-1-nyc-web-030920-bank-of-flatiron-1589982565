import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const transactionUrl = 'http://localhost:6001/transactions'
const newHeaders = {"Content-type": "application/json; charset=UTF-8"}

class AccountContainer extends Component {

  state = {
    transactions: [],
    searchTransactions: [],
    addTransaction: {},
    search: ''

  }

  componentDidMount() {
    fetch(transactionUrl)
      .then(response => response.json())
      .then(transactions => this.setState({ transactions }))
  }

  newTransaction = (addTransaction) => {
    // this.setState({ addTransaction })
    fetch(transactionUrl, {
      method: 'POST',
      body: JSON.stringify(addTransaction),
      headers: newHeaders  })
        .then(response => response.json())
        // - do i reload db or do i just update the table - 
        // i realize this could probably all be done at once without
        // calling another function, just want to get it to work first
        .then(addNewTransaction => this.updateTransactions(addTransaction) )
  }

  updateTransactions = (transaction) => {
    this.setState({ transactions: [...this.state.transactions, transaction]})
  }

  handleSearch = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  filterTransactions = () => {
    const { search } = this.state.search
    const { transactions } = this.state.transactions
    // ignore user's typing case
    const searchTerm = search.toLowerCase()
    const filteredTransactions = transactions.filter(p => 
        p.description.toLowerCase().includes(searchTerm)
    )
    this.setState({ searchTransactions: filteredTransactions })
  }

  render() {
    

    return (
      <div>
        <Search search={this.state.search} handleSearch={this.handleSearch}/>
        <AddTransactionForm newTransaction={this.newTransaction}/>
        {this.state.searchTransactions.length === 0 ? 
          <TransactionsList transactions={this.state.transactions}/> : <TransactionsList transactions={this.state.searchTransactions}/>}
       
         
      
        {console.log('search', this.state.search.length)}
      </div>
    );
  }
}

export default AccountContainer;

