import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {

    function maxTemp() {
        return displayTemp(props.data.temp.max);
    }

    function minTemp() {
        return displayTemp(props.data.temp.min);
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

    function displayTemp(temp) {

        if (props.unit === `fahrenheit`) {
            temp = Math.round((temp * 9 / 5) + 32);
            return `${temp}°F`
        } else {
            temp = Math.round(temp);
            return `${temp}°C`
        }
    }

    return (
        <div className="forecast">
            <div className="row">
                <div className="col-sm-4 day">{day()}</div>
                <div className="col-sm-4 small-icon">
                    <WeatherIcon code={props.data.weather[0].icon} size={28} />
                </div>
                <div className="col-sm-4 sTemp">
                    {maxTemp()} / <span className="minTemp">{minTemp()}</span>
                </div>
            </div>
        </div>)
}