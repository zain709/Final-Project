import React from "react";

function BasicDropdown({ options, onChange, selected }) {
  return (
    <div className="col-md-2 m-2">
      <select
        class="form-control form-control-sm "
        id="sortingselect"
        onChange={onChange}
        value={selected}
      >
        {options.map((opt, key) => {
          return (
            <option key={key} value={key}>
              {opt}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default BasicDropdown;
