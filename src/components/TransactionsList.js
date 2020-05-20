import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {
  props.transactions.filter((t) => {return t.description.toLowerCase().indexOf(props.search.toLowerCase()) !== -1 }) 
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
        {props.transactions.map(t => <Transaction transaction={t} key={t.id} />)}
      </tbody>
    </table>
  );
};

export default TransactionsList;
