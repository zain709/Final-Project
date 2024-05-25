import React from "react";
import "../GlobalStyles/GlobalStyles.css";
import Dropdown from "./Dropdown";

function Filterbar(props) {
  return (
    <div className="tabletoolsfeedback d-flex justify-content-between mt-3 mb-2 px-3 ">
      <Dropdown onClick={props.onOptionSelect} options={props.options} />
      <div class="">
        <label class="sr-only" for="inlineFormInputGroupUsername">
          Username
        </label>
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text">Search</div>
          </div>
          <input
            type="date"
            class="searchtable form-control"
            id="inlineFormInputGroupUsername"
            onChange={props.onSearch}
            placeholder="Enter Date"
          />
        </div>
      </div>
    </div>
  );
}

export default Filterbar;
