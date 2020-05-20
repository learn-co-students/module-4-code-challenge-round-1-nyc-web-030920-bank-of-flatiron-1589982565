import React from "react";

const Transaction = (props) => {

  return (
    <div>
    <tr>
      <td>{props.transaction.date}</td>
      <td>{props.transaction.description}</td>
      <td>{props.transaction.category}</td>
      <td>{props.transaction.amount}</td>
    </tr>
     <button onClick={props.destroy}>DESTROY MY HEAD</button>
     </div>
  );
};

export default Transaction;
