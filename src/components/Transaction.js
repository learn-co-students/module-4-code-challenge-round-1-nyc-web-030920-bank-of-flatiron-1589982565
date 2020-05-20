import React from "react";

const Transaction = (props) => {
  const {transaction,toggleDelete} = props
  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
      <button onClick={()=>toggleDelete(transaction.id)}>delete</button>
    </tr>
  );
};

export default Transaction;
