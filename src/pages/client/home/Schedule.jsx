import React from "react";
import Timeline from "./Timeline";
import "./Schedule.css";

function schedule(props) {
  const hours = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23,
  ];
  return (
    <div className="schedule row">
      <table>
        <tr>
          <td></td>
          <td>
            <p>Timeline</p>
            <div className="week">
              <p>day1-day7</p>
            </div>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <div className="day_name">
              <div className="day">
                <p>monday</p>
              </div>
              <div className="day">
                <p>monday</p>
              </div>
              <div className="day">
                <p>monday</p>
              </div>
              <div className="day">
                <p>monday</p>
              </div>
              <div className="day">
                <p>monday</p>
              </div>
              <div className="day">
                <p>monday</p>
              </div>
              <div className="day">
                <p>monday</p>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="hour_per_day">
              <div>
                {hours.map((hour) => {
                  return <p>{hour}:00</p>;
                })}
              </div>
            </div>
          </td>
          <td className="work_per_day">
            <div className="day">
              <Timeline />
            </div>
            <div className="day">
              <Timeline />
            </div>
            <div className="day">
              <Timeline />
            </div>
            <div className="day">
              <Timeline />
            </div>
            <div className="day">
              <Timeline />
            </div>
            <div className="day">
              <Timeline />
            </div>
            <div className="day">
              <Timeline />
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default schedule;
