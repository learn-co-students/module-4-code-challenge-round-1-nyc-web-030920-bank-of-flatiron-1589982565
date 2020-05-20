import React from "react";
import Transaction from "./Transaction";

const TransactionsList = props => {
  
  // render transactions based on search, sorting, default listing
  const renderTransactions = () => {

    const {search,transactions, sortBy, clearSortBy} = props

    if (sortBy === 'category') {
      clearSortBy()
      return (
        transactions.sort((a,b) => a.category > b.category ? 1 : -1).map(transaction => <Transaction key={transaction.id} transaction={transaction} deleteTransaction={props.deleteTransaction}/>)
      )
    } else if (sortBy === 'description') {
      clearSortBy()
      return (
        transactions.sort((a,b) => a.description > b.description ? 1 : -1).map(transaction => <Transaction key={transaction.id} transaction={transaction} deleteTransaction={props.deleteTransaction}/>)
      )
    } else if (search) {
      return (
            transactions.filter(transaction => transaction.description.toLowerCase().includes(search)).map(transaction => <Transaction key={transaction.id} transaction={transaction} deleteTransaction={props.deleteTransaction}/>)
          )
    } else if (!search || sortBy === 'default') {
      return (
            transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction} deleteTransaction={props.deleteTransaction}/>)
          )
    }

    // code without sorting (only searching)

    // if (!search) { // if empty string for search (falsey), make truthy
    //   return (
    //     transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction} deleteTransaction={props.deleteTransaction}/>)
    //   )
    // } else {
    //   return (
    //     transactions.filter(transaction => transaction.description.toLowerCase().includes(search)).map(transaction => <Transaction key={transaction.id} transaction={transaction} deleteTransaction={props.deleteTransaction}/>)
    //   )
    // }
  }

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Remove Transaction</h3>
          </th>
        </tr>
        {renderTransactions()}
      </tbody>
    </table>
  );
};

export default TransactionsList;
