import React from "react";
import Transaction from "./Transaction";

const TransactionsList = props => {
  
  const renderTransactions = () => {

    const {search,transactions} = props 

    if (!search) { // if empty string for search (falsey), make truthy
      return (
        transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction} />)
      )
    } else {
      return (
        transactions.filter(transaction => transaction.description.includes(search)).map(transaction => <Transaction key={transaction.id} transaction={transaction} />)
      )
    }
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
        </tr>
        {renderTransactions()}
      </tbody>
    </table>
  );
};

export default TransactionsList;
