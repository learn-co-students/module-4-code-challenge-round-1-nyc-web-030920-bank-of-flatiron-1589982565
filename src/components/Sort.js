import React, { Component } from 'react';

class Sort extends Component {
    render() {

        return (
            <div>
                 <form>
                <select onChange={this.props.changeSort}>
                    <option value="none">None</option>
                    <option value="date">Date</option>
                    <option value="category">Category</option>
                    <option value="amount">amount</option>
                </select>
                </form>
            </div>
        );
    }
}

export default Sort;
