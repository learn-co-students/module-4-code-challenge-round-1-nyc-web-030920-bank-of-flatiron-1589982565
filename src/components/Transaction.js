import React from "react";

const Transaction = (props) => {
  const {id, date, description, category, amount} = props
  return (
    <tr>
      <td>{date}</td>
      <td>{description}<button onClick={() => props.handleDelete(id)}>Delete</button></td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
      

  );
};

export default Transaction;
