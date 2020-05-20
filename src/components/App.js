import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";
let URL = 'http://localhost:6001/transactions'
class App extends Component {
  state={
    transaction:[]
  }

  componentDidMount() {
    fetch(URL)
    .then(resp => resp.json())
    .then(transaction => {this.setState({ transaction })})
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer transaction={this.state.transaction}/>
      </div>
    );
  }
}

export default App;
