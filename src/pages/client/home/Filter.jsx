import React from "react";
import "./Filter.css";

function Filter(props) {
  return (
    <div>
      <form>
        <h1>Filter</h1>
        <div className="filter_option">
          <p> AAA </p>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round" />
          </label>
        </div>
      </form>
    </div>
  );
}

export default Filter;
