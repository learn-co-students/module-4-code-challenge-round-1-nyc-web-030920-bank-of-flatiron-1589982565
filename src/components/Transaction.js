import React from "react";

const Transaction = (props) => {
  return (
    <tr>
      <td>{props.date}</td>
      <td>{props.description}</td>
      <td>{props.category}</td>
      <td>{props.amount}</td>
      <td>
        <button data-id={props.id} onClick={props.deleteTransaction}>Delete</button>
      </td>
    </tr>
  );
};

export default Transaction;
