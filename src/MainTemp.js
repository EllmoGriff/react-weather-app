import React from "react";
import "./MainTemp.css";

export default function MainTemp() {
// let [temperature, setTemperature] = useState("");

// function showTemperature(response){
//   setTemperature(response.data.main.temp);
// }
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
        <button className="tempC" >
          °C
        </button>
        <span className="f">
          /
          <button className="tempF">
            °F
          </button>
        </span>
      </div>
    </div>
  );
}
