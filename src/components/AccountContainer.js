import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  render() {
    let {transaction, date, description,category,amount,fillForm,toggleSubmit,search,handleSearch,toggleDelete}= this.props
    return (
      <div>
        <Search 
        search={search}
        handleSearch={handleSearch}
        />
        <AddTransactionForm 
        date={date} 
        description={description} 
        category={category} 
        amount={amount} 
        fillForm={fillForm}
        toggleSubmit={toggleSubmit}
        />
        <TransactionsList 
        transaction={transaction}
        toggleDelete={toggleDelete}
        />
      </div>
    );
  }
}

export default AccountContainer;
