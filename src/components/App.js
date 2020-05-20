import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

const api_backend = `http://localhost:6001/transactions`

class App extends Component {

  state= {
    transactions: []
  }

  componentDidMount(){
    fetch(api_backend)
    .then(r=>r.json())
    .then(transactions => this.setState({transactions}))
  }





  render() {

    console.log('app state:', this.state)
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer transactions={this.state.transactions} />
      </div>
    );
  }
}

export default App;
