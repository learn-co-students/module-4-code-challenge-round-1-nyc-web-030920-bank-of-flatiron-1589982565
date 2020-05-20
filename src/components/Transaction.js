import React from "react";

const Transaction = (props) => {
  const {id, amount, category, date, description} = props;
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
