import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state={
    account:[],
    search:'',
    description:'',
    category:'',
    amount:'',
    date:'',
    sort:'none'
  }
//===========FETCH DATA======================================
getAccount=()=>{
  fetch('http://localhost:6001/transactions')
  .then((resp)=>resp.json())
  .then((data)=>{
    this.setState({account:data})
  })
}

componentDidMount(){
  this.getAccount()
}
//========FORM=INPUT===============================================
handleChange=(e)=>{
const{name,value}=e.target
this.setState({[name]:value})
}
//=========Submit New Post=======================================================
handleSubmit=(e)=>{
  e.preventDefault()
const{date,description,category,amount}=this.state 



fetch('http://localhost:6001/transactions',{
  method:'POST',
  headers:{
    'Content-Type':'application/json',
    'Accept':'application/json'
  },
  body:JSON.stringify({
    date,
    description,
    category,
    amount
  })
})
.then(this.getAccount)

this.setState({
 description:'',
category:'',
amount:'',
date:''})

}
//=========Filter SEARCH=================================================================
filterSearch=(e)=>{
  const {name,value}=e.target
  this.setState({[name]:value})
}

//==================Delete Transaction=========================================================
handleDelete=(id)=>{
  fetch(`http://localhost:6001/transactions/${id}`,{
    method:'DELETE'
  })
  .then(this.getAccount)
}

//==============================================================================================

  render() {
    return (
      <div>
        <Search {...this.state} filterSearch={this.filterSearch}/>
        <AddTransactionForm {...this.state} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        <TransactionsList {...this.state} handleDelete={this.handleDelete}/>
      </div>
    );
  }
}

export default AccountContainer;
