import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
const API = "http://localhost:6001/transactions";
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

class AccountContainer extends Component {
  state = {
    transactions: [],
    date: "",
    description: "",
    category: "",
    amount: null,
    query: "",
    sortBy: "none",
  };

  componentDidMount() {
    fetch(API)
      .then((resp) => resp.json())
      .then((data) => this.setState({ transactions: data }));
  }

  // in case we want to add an edit form later.
  // submitHandler = (event, id) => {
  //   event.preventDefault()
  //   fetch(API+"/"+id, {
  //     method: "PATCH",
  //     headers: headers,
  //     body: {
  //       date: this.state.date,
  //       description: this.state.description,
  //       category: this.state.category,
  //       amount: this.state.amount
  //     }
  //   }).then(resp => resp.json()).then(data => this.setState({ transactions: this.state.transactions.filter(transaction => transaction.id === id ? data : transaction)}))
  // }

  submitHandler = (event) => {
    event.preventDefault();
    fetch(API, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        date: this.state.date,
        description: this.state.description,
        category: this.state.category,
        amount: this.state.amount,
      }),
    })
      .then((resp) => resp.json())
      .then((data) =>
        this.setState({ transactions: this.state.transactions.concat(data) })
      )
  this.resetForm()
  };

  deleteHandler = (id) => {
    fetch(API + "/" + id, {
      method: "DELETE",
      headers: headers,
    })
      .then(
        this.setState({
          transactions: this.state.transactions.filter((transaction) =>
            transaction.id === id ? null : transaction
          ),
        })
      )
      .catch((err) => console.log(err));
  };

  resetForm = () => {
    this.setState({ date: "", description: "", category: "", amount: null });
  };

  formHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  searchHandler = (event) => {
    this.setState({ query: event.target.value });
  };

  dropDownHandler = (event) => {
    this.setState({ sortBy: event.target.value });
  };

  render() {
    const { transactions, query, sortBy } = this.state;
    //only account for case sensitivity. Not account for spaces, etc. Search by description or category.
    let allTransactions = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(query.toLowerCase()) || transaction.category.toLowerCase().includes(query.toLowerCase())
    );
    let sortedTransactions =
      sortBy !== "none"
        ? sortBy === "category"
          ? allTransactions.sort((a, b) => (a.category < b.category ? -1 : 1))
          : allTransactions.sort((a, b) =>
              a.description < b.description ? -1 : 1
            )
        : allTransactions;
    // can search & sort.
    console.log(this.state.sortBy);
    return (
      <div>
        <Search query={query} searchHandler={this.searchHandler} />
        <AddTransactionForm
          formHandler={this.formHandler}
          submitHandler={this.submitHandler}
          date={this.state.date}
          description={this.state.description}
          category={this.state.category}
        />
        <label htmlFor="sort">Sort Alphabetically by:</label>
        <select onChange={this.dropDownHandler} id="sort">
          <option value="none">None</option>
          <option value="category">Category</option>
          <option value="description">Description</option>
        </select>

        <TransactionsList
          transactions={sortedTransactions}
          deleteHandler={this.deleteHandler}
        />
      </div>
    );
  }
}

export default AccountContainer;
