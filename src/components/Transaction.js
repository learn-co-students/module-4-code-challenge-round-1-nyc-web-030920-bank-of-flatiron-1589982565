import React from "react";



const Transaction = (props) => {
  // console.log('transaction props :>> ', props);
  const {date, description, category, amount, id, removeTrans} = props

  const remove = () => {
    fetch(`http://localhost:6001/transactions/${id}`, {
      method: 'DELETE',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json'
      }})
      .then(response => response.json())
      .then(removeTrans(id))
  }

  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td><button onClick={() => remove()}>X</button></td>
    </tr>
  );
};

export default Transaction;
