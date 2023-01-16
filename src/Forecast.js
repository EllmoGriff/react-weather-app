import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay"


export default function Forecast(props) {
	let [forecastData, setForecastData] = useState(null);
	let [loaded, setLoaded] = useState(false);


	useEffect(() => {
		setLoaded(false);
	}, [props.coordinates]);



	if (props.coordinates === undefined) {
		return null;
	}
	function handleResponse(response) {
		setForecastData(response.data.daily)
		setLoaded(true);
	}

	if (loaded) {
		return (
			<div>
				{forecastData.map(function (dailyForecast, index) {
					if (index > 0 && index < 7) {
						return (
							< section className="forecast" key={index}>
								<WeatherForecastDay data={dailyForecast} displayTemp={props.displayTemp} />
							</section >
						);
					} else {
						return null;
					}
				})}

			</div>
		)
	}
	else {
		let apiKey = `6d68aadfacdd4f5163bc273049a0cf2d`
		let unit = "metric";
		let apiUrl = ` https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=${unit}`

		axios.get(apiUrl).then(handleResponse)
		return null;

	}
}
