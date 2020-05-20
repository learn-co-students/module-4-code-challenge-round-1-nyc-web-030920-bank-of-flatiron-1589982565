import React, {Component} from "react";

class Transaction extends Component {
  render() {
  return (
    <tr>
      <td>{this.props.obj.date}</td>
      <td>{this.props.obj.description}</td>
      <td>{this.props.obj.category}</td>
      <td>{this.props.obj.amount}</td>
    </tr>
  );
  }
};

export default Transaction;
