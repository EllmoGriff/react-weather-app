import React, { useState } from "react";
import "./FahrenheitToCelsius.css"

export default function FahrenheitToCelcius(props) {
    const [unit, setUnit] = useState(`celsius`);
    console.log(props.celsius)
    function convertToCelsius(event) {
        event.preventDefault();
        setUnit("celsius")
    }
    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }
    if (unit === "celsius") {
        return (
            <div className="weatherTemp">
                <div className="temp" id="current-temp">
                    {Math.round(props.celsius)}°
                </div>
                <div className="celsius-and-fahrenheit">
                    <button className="tempC" >
                        °C
                    </button>
                    <span className="f">
                        {" "} |
                        <button className="tempF" onClick={convertToFahrenheit}>
                            °F
                        </button>
                    </span>
                </div>
            </div>
        )
    } else {
        let fahrenheit = (props.celsius * 9 / 5) + 32
        return (
            < div className="weatherTemp" >
                <div className="temp" id="current-temp">
                    {Math.round(fahrenheit)}°
                </div>
                <div className="celsius-and-fahrenheit">
                    <button className="tempC" onClick={convertToCelsius} >
                        °C
                    </button>
                    <span className="f">
                        {" "} |
                        <button className="tempF">
                            °F
                        </button>
                    </span>
                </div>
            </div >
        )
    }
}





