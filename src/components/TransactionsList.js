import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {
  let transaction=props.transaction
  .filter((transaction)=> {return transaction.description.toLocaleLowerCase().indexOf(props.search.toLocaleLowerCase())!==-1})
  if(props.abcCategorty){
    transaction=transaction.sort((a,b)=>a.category.localeCompare(b.category))
  }
  if(props.abcCategorty){
    transaction=transaction.sort((a,b)=>a.description.localeCompare(b.description))
  }
  return (
    <>
        <label>Category</label>
        <input type="checkbox" name="abcCategorty" checked={props.abcCategorty} onChange={props.handleChange}/>
        <label>Description</label>
        <input type="checkbox" name="abcDescription" checked={props.abcDescription} onChange={props.handleChange}/><br/>
    
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
        {transaction.map(transaction=>{
         return <Transaction key={transaction.id} transaction={transaction} deleteTransaction={props.deleteTransaction}/>
        })}
      </tbody>
    </table>
    </>
  );
};

export default TransactionsList;
