import React from "react";
import { render } from "react-dom";

const SortBar = (props) => {
    return (
        <div className="sort-bar">
            Sort Transactions By:
            <RadioSpan 
                id="default_sort" value="default" label="Default" 
                sortBy={props.sortBy} 
                updateSort={props.updateSort}
            />

            <RadioSpan 
                id="description_sort" value="description" label="Description" 
                sortBy={props.sortBy} 
                updateSort={props.updateSort}
            />

            <RadioSpan 
                id="category_sort" value="category" label="Category" 
                sortBy={props.sortBy} 
                updateSort={props.updateSort}
            />
        </div>
    );
}

export default SortBar;

// just messing around
const RadioSpan = (props) => {
    return (
        <span className="radio-span">
            <input 
                id={props.id}
                type="radio" 
                group="sort" 
                value={props.value}
                onChange={props.updateSort}
                checked={props.sortBy === props.value}
            />
            <label htmlFor={props.id}>{props.label}</label>
        </span>
    )
}

/*
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
*/