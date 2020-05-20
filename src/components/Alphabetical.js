import React from "react";

const Alphabetical =(props)=>{
return(
    <div>
    alphabetically by:   
    Category
    <input
      type="radio"
      name="category"
      value="option1"
      checked=""
    />
   Description
    <input
      type="radio"
      name="description"
      value="option2"
      checked= ""
    />
    </div>

    );
};

export default Alphabetical