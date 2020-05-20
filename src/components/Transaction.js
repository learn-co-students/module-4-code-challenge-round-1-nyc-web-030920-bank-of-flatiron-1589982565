import React from "react";

const Transaction = (props) => {

  const {date, description, category, amount} = props

  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td><button>Delete</button></td>
    </tr>
  );
};

export default Transaction;
