import React from "react";
import Transaction from "./Transaction";


const TransactionsList = (props) => {
  console.log(props)
    let bankAccount = props.bankAccount
    // .filter((bankAccount) => {return bankAccount.description.toLocaleLowerCase().indexOf(props.search.toLocaleLowerCase())!==-1})
    .filter((bankAccount) => {return bankAccount.description.indexOf(props.search)!==-1})
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
        {bankAccount.map((transaction)=> {return <Transaction key={transaction.id} {...transaction} />})}
      </tbody>
    </table>
  );
};

export default TransactionsList;
