import React from "react";

const Transaction = (props) => {
  const {id, date, description, category, amount} = props
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td onClick={() => props.handleDelete(id)}><button>Delete Transaction</button></td>
    </tr>
      

  );
};

export default Transaction;
