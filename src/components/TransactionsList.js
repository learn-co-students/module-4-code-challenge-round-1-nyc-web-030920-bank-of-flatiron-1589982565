import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {
  // console.log(props.account)

let account=props.account.filter((a)=>{return a.description.toLocaleLowerCase().indexOf(props.search.toLocaleLowerCase())!==-1})


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
        {account.map((a)=>{return <Transaction   key={a.id} {...a}/>})}
      </tbody>
    </table>
  );
};

export default TransactionsList;
