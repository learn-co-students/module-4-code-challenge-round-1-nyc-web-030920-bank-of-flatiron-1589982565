import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
	state = {
		transactions: [],
		search: "",
		newTransaction: {
			date: "",
			description: "",
			category: "",
			amount: "",
		},
	};

	componentDidMount() {
		fetch(`http://localhost:6001/transactions`)
			.then((response) => response.json())
			.then((transactions) =>
				this.setState({ transactions: transactions })
			);
	}

	handleChange = (e) => {
		this.setState({
			newTransaction: {
				...this.state.newTransaction,
				[e.target.name]: e.target.value,
			},
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		let newTrans = this.state.newTransaction;
		console.log(newTrans);
		fetch(`http://localhost:6001/transactions`, {
			method: "POST",
			headers: {
				accept: "application/json",
				"content-type": "application/json",
			},
			body: JSON.stringify(newTrans),
		})
			.then((response) => response.json())
			.then((addedTrans) =>
				this.setState({
					transactions: [...this.state.transactions, addedTrans],
					newTransaction: {
						date: "",
						description: "",
						category: "",
						amount: "",
					},
				})
			);
	};

	handleSearch = (e) => {
		this.setState({ search: e.target.value });
	};

	handleDelete = (id) => {
		fetch(`http://localhost:6001/transactions/${id}`, {
			method: "DELETE",
			headers: {
				accept: "application/json",
				"content-type": "application/json",
			},
		}).then((response) => response.json());
		this.setState({
			transactions: this.state.transactions.filter((trans) =>
				trans.id === id ? null : trans
			),
		});
	};

	handleSort = (e) => {
		let sortTerm = e.target.name;
		if (sortTerm === "description") {
			this.setState({
				transactions: this.state.transactions.sort((a, b) =>
					a.description.localeCompare(b.description)
				),
			});
		} else if (sortTerm === "category") {
			this.setState({
				transactions: this.state.transactions.sort((a, b) =>
					a.category.localeCompare(b.category)
				),
			});
		} else if (sortTerm === "amount") {
			this.setState({
				transactions: this.state.transactions.sort((a, b) =>
					a.amount <= b.amount ? -1 : 1
				),
			});
		}
		// console.log("I heard the click")
	};

	render() {
		const { transactions, newTransaction, search } = this.state;
		let filteredTransactions = transactions.filter((transaction) =>
			transaction.description.toLowerCase().includes(search.toLowerCase())
		);
		return (
			<div>
				<Search handleSearch={this.handleSearch} search={search} />
				<AddTransactionForm
					handleSort={this.handleSort}
					handleSubmit={this.handleSubmit}
					handleChange={this.handleChange}
					newTransaction={newTransaction}
				/>
				<TransactionsList
					handleDelete={this.handleDelete}
					transactions={filteredTransactions}
				/>
			</div>
		);
	}
}

export default AccountContainer;
