import React from "react";
import Timeline from "./Timeline";
import "./Schedule.css";

function schedule(props) {
  return (
    <div className="row">
      <div className="hour_per_day col-1">
        <p>Hours</p>
      </div>
      <div className="timeline col-11">
        <p>Timeline</p>
        <div className="week">
          <p>day1-day7</p>
        </div>
        <div className="work_per_day">
          <div className="day">
            <p>monday</p>
            <Timeline />
          </div>
          <div className="day">
            <p>monday</p>
            <Timeline />
          </div>
          <div className="day">
            <p>monday</p>
            <Timeline />
          </div>
          <div className="day">
            <p>monday</p>
            <Timeline />
          </div>
          <div className="day">
            <p>monday</p>
            <Timeline />
          </div>
          <div className="day">
            <p>monday</p>
            <Timeline />
          </div>
          <div className="day">
            <p>monday</p>
            <Timeline />
          </div>
        </div>
      </div>
    </div>
  );
}

export default schedule;
