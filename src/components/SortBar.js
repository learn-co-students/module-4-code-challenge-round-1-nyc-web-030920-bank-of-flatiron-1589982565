import React from "react";
import { render } from "react-dom";

const SortBar = (props) => {
    return (
        <div className="sort-bar">
            Sort Transactions By:
            <span className="radio-span">
                <input 
                    id="default_sort"
                    type="radio" 
                    group="sort" 
                    value="default" 
                    onChange={props.updateSort}
                    checked={props.sortBy === "default"}
                />
                <label htmlFor="default_sort">Default</label>
            </span>

            <span className="radio-span">
                <input 
                    id="description_sort"
                    type="radio" 
                    group="sort" 
                    value="description" 
                    onChange={props.updateSort}
                    checked={props.sortBy === "description"}
                />
                <label htmlFor="description_sort">Description</label>
            </span>

            <span className="radio-span">
                <input 
                    id="category_sort"
                    type="radio" 
                    group="sort" 
                    value="category" 
                    onChange={props.updateSort}
                    checked={props.sortBy === "category"}
                />
                <label htmlFor="category_sort">Category</label>
            </span>
        </div>
    );
}

export default SortBar;