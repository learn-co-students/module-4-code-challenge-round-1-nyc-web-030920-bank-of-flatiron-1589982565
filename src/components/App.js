import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

class App extends Component {
  render() {
    console.log('Hey Coaches! 👋 Do you read our consoles? 🤔 Didnt get to finish the filter function unfortunately. P.S. how can i add a delete transaction function to my real bank account?? 😂')
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer />
      </div>
    );
  }
}

export default App;
