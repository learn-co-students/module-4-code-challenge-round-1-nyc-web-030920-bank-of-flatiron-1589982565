import React from "react";

const Transaction = (props) => {
  const {id, amount, category, date, description} = props;
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <input type="button" value="Delete" onClick={() => props.deleteTransaction(id)}></input>
    </tr>
  );
};

export default Transaction;
