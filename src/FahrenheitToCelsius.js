import React, { useState } from "react";
import "./FahrenheitToCelsius.css"

export default function FahrenheitToCelcius(props) {

    function convertToCelsius(event) {
        event.preventDefault();
        props.onUnitChange(`celsius`);
    }

    function convertToFahrenheit(event) {
        event.preventDefault();
        props.onUnitChange(`fahrenheit`);
    }

    if (props.unit === `celsius`) {
        return (
            <div className="weatherTemp">
                <div className="temp" id="current-temp">
                    {Math.round(props.celsius)}<span className="cels">°C</span>
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
                    {Math.round(fahrenheit)}<span className="faren">°F</span>
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





