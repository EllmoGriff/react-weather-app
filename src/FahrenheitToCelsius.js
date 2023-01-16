import React from "react";
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
                    {props.displayTemp(props.celsius, true)}<span className="cels">°C</span>
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
        return (
            < div className="weatherTemp" >
                <div className="temp" id="current-temp">
                    {props.displayTemp(props.celsius, true)}<span className="faren">°F</span>
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





