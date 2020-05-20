import React from 'react'

export default class SortTransactions extends React.Component {
    render() {
        return (
            <div>
                <label>Sort Transaction</label>
                <select name="sortBy" value={this.props.type} onChange={this.props.handleChange}>
                    <option value="all">All</option>
                    <option value="description">Description</option>
                    <option value="category">Category</option>
                </select>
            </div>
        )
    }
}