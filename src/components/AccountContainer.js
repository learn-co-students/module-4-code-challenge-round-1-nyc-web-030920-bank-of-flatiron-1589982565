import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  render() {
    let {transaction, date, description,category,amount,fillForm,toggleSubmit}= this.props
    return (
      <div>
        <Search />
        <AddTransactionForm 
        date={date} 
        description={description} 
        category={category} 
        amount={amount} 
        fillForm={fillForm}
        toggleSubmit={toggleSubmit}
        />
        <TransactionsList transaction={transaction}/>
      </div>
    );
  }
}

export default AccountContainer;
