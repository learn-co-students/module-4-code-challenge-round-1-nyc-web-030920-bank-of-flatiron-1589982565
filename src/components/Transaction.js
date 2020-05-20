import React from "react";

const Transaction = (props) => {
  const { amount, category, date, description } = props.transaction
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
};

export default Transaction;
