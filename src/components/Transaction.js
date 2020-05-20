import React from "react";

const Transaction = (props) => {
  // console.log("Transaction Props => ", props)
  const { handleDelete, id, date, description, category, amount } = props
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td><button onClick={() => handleDelete(id)} className="ui button">Delete</button></td>
    </tr>
  );
};

export default Transaction;
