import React from "react";

const Transaction = (props) => {
  const { date, description, category, amount } = props;
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      {/* <button onClick={}>Delete transaction</button> */}
    </tr>
  );
};

export default Transaction;
 