import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";
let URL = 'http://localhost:6001/transactions'
class App extends Component {
  state = {
    transaction: [],
    date: "",
    description: "",
    category: "",
    amount: "",
    search: ""
  }

  componentDidMount() {
    fetch(URL)
      .then(resp => resp.json())
      .then(transaction => { this.setState({ transaction }) })
      .catch(error => console.log(error))
  }

  fillForm = (event) => {
    if (event.target.name === "date") {
      this.setState({ date: event.target.value });
    } else if (event.target.name === "description") {
      this.setState({ description: event.target.value })
    } else if (event.target.name === "category") {
      this.setState({ category: event.target.value })
    } else if (event.target.name === "amount") {
      this.setState({ amount: Number(event.target.value)}) // ONLY WORKS FOR POSTIVE NUMBERS
    }
  }

  toggleSubmit = (event) => {
    event.preventDefault()
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        "date": this.state.date,
        "description": this.state.description,
        "category": this.state.category,
        "amount": this.state.amount
      })
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState({ transaction: [...this.state.transaction,data] })
    })
  }
  handleSearch=(event)=>{
    this.setState({ search: event.target.value  });
  }

  render() {
    let filter = this.state.transaction.filter(transaction =>{
      return transaction.description.includes(this.state.search)
    })

    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer
          transaction={this.state.search===""? this.state.transaction: filter}
          date={this.state.date}
          description={this.state.description}
          category={this.state.category}
          amount={this.state.amount}
          search={this.state.search}
          fillForm={this.fillForm}
          toggleSubmit={this.toggleSubmit}
          handleSearch={this.handleSearch}
        />
      </div>
    );
  }
}

export default App;
