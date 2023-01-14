import React, { useState } from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function Forecast(props) {
	console.log("forecast props", props)
	let [forecastData, setForecastData] = useState("");
	let [loaded, setLoaded] = useState(false);
	if (props.coordinates === undefined) {
		return null;
	}
	function handleResponse(response) {
		console.log("api response", response)
		setForecastData(response.data.daily)
		setLoaded(true);
	}

	if (loaded) {
		let min = Math.round(forecastData[0].temp.min);
		let max = Math.round(forecastData[0].temp.max);
		let temp = `${min}°C  / ${max}°C`
		return (
			<section className="forecast">
				<div className="row">
					<div className="col-sm-4 day">Friday</div>
					<div className="col-sm-4 small-icon">
						<WeatherIcon code="01d" size={28} />
					</div>
					<div className="col-sm-4 sTemp">
						{temp}
					</div>
				</div>
			</section>)

	} else {
		let apiKey = `6d68aadfacdd4f5163bc273049a0cf2d`
		let unit = "metric";
		let apiUrl = ` https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=${unit}`

		axios.get(apiUrl).then(handleResponse)
		return null;

	}
}


