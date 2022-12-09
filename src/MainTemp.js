import React from "react";
import "./MainTemp.css";

export default function MainTemp() {
  return (
    <div className="MainTemp">
      <div className="moon">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/59/Empty.png?20091205084734"
          alt="where to?"
          id="icon"
        />
      </div>
      <div className="temp" id="current-temp">
        0°
      </div>
      <div className="celsius-and-fahrenheit">
        <a className="tempC" href="#">
          °C
        </a>
        <span className="f">
          /
          <a className="tempF" href="#">
            °F
          </a>
        </span>
      </div>
    </div>
  );
}
