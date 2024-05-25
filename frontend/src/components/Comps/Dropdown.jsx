import React from "react";
import "../GlobalStyles/GlobalStyles.css";

function Dropdown(props) {
  return (
    <div>
      <select
        class="form-control form-control-sm w-auto "
        id="sortingselect"
        onChange={(e)=>props.onOptionSelect(e)}
      >
        {props.options.map((option, key) => (
          <option key={key}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
