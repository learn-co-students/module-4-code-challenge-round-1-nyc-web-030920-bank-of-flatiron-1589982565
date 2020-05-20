import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import Sort from "./Sort";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    searched: '',
    sorted: false,
    sortType: ''
  }

  getTransactions = () => {
    fetch('http://localhost:6001/transactions')
    .then(resp => resp.json())
    .then(transactions => this.setState({ transactions }))
  }

  componentDidMount() {
    this.getTransactions()
  }

  handleSearch = (event) => {
    this.setState({ searched: event.target.value})
  }

  addNewTrans = (trans) => {
    this.setState({transactions: [...this.state.transactions, trans]})
  }

  removeTrans = (transid) => {
    this.setState({ transactions: this.state.transactions.filter(trans => trans.id !== transid)})
  }

  changeSort = (event) => {
    this.setState({ sorted: true, sortType: event.target.value})
  }

  render() {
    // console.clear()
    console.log('Acct Cont State :>> ', this.state);
    const { transactions, searched, sortType } = this.state
    const {addNewTrans, handleSearch, removeTrans, changeSort} = this
    let filteredTransactions = transactions.filter(transaction => 
      transaction.description.toLowerCase().includes(searched.toLowerCase()))
    return (
      <div>
        <Search searched={searched} handleSearch={handleSearch}/>
        <AddTransactionForm addNewTrans={addNewTrans} />
        <Sort sortType={sortType} changeSort={changeSort}/>
        <TransactionsList removeTrans={removeTrans} transactions={filteredTransactions}/>
      </div>
    );
  }
}

export default AccountContainer;
