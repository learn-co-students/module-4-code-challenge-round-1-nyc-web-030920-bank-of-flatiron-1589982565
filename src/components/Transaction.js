import React from "react";

const Transaction = (props) => {
  let {date, description, category, amount} = props
  console.log(props.amount)
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
