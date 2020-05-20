import React from "react";

const Transaction = (props) => {
  return (
    <tr>
      <td>{props.transaction.date}</td>
      <td>{props.transaction.description}</td>
      <td>{props.transaction.category}</td>
      <td>{props.transaction.amount}</td>
    </tr>
  );
};

export default Transaction;
// import React, { Component } from 'react';
// export default class Transaction extends Component {
//   state = {
//     clicked: false
//   }
//   toggleClicked = () => this.setState({ clicked: true })
//   render() {
//     const transDetail = (
//       <tr>
//         <td>{this.props.transaction.date}</td>
//         <td>{this.props.transaction.description}</td>
//         <td>{this.props.transaction.category}</td>
//         <td>{this.props.transaction.amount}</td>
//         <button>Delete</button>
//       </tr>)
//       const tx = (
//         {!this.state.clicked && transDetail}
//       )
//       return tx
// }
// }