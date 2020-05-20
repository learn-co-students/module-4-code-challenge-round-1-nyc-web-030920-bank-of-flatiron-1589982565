import React from "react";

const Alphabetical = (props) => {
    return (
        <div>
            alphabetically by:
            Category
            <input
                type="radio"
                name="category"
                value="option1"
                checked={props.option1}
                onChange={props.handleRadio}
            />
   Description
            <input
                type="radio"
                name="description"
                value="option2"
                checked={props.option2}
                onChange={props.handleRadio}
            />
        </div>

    );
};

export default Alphabetical