import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {

    function maxTemp() {
        return props.displayTemp(props.data.temp.max);
    }

    function minTemp() {
        return props.displayTemp(props.data.temp.min);
    }

    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days = [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
        ];
        return days[day];
    }


    return (
        <div className="forecast">
            <div className="row details-grid">
                <div className="col day">{day()}</div>
                <div className="col small-icon">
                    <WeatherIcon code={props.data.weather[0].icon} size={28} />
                </div>
                <div className="col sTemp">
                    {maxTemp(true)}/<span className="minTemp">{minTemp()}</span>
                </div>
            </div>
        </div>)
}