import React from "react";
import Schedule from "./Schedule";
import "./Home.css";
import Filter from "./Filter";

function home(props) {
  return (
    <div className="">
      <div className="present_time"></div>
      <div className="home_function row">
        <div className="filter col-2">
          <Filter />
        </div>
        <div className="schedule col-10">
          <p>Schedule</p>
          <Schedule />
        </div>
      </div>
    </div>
  );
}

export default home;
