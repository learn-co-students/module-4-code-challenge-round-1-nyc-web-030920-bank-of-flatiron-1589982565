import React from "react";

const Transaction = (props) => {
  // console.log('transaction props :>> ', props);
  const {date, description, category, amount} = props
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
