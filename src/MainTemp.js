import React, { useState } from "react";
import TimeAndDate from "./TimeAndDate";
import FahrenheitToCelsius from "./FahrenheitToCelsius";
import WeatherIcon from "./WeatherIcon"
import Forecast from "./Forecast";
import axios from "axios";
import "./MainTemp.css";


export default function MainTemp() {
	let [loaded, setLoaded] = useState(false);
	let [weatherData, setWeatherData] = useState("");
	let [city, setCity] = useState("");
	let [unit, setUnit] = useState(`celsius`);


	function displayTemp(temp, hideUnit) {
		if (unit === `fahrenheit`) {
			temp = Math.round((temp * 9 / 5) + 32);
			return hideUnit ? `${temp}` : `${temp}°F`
		} else {
			temp = Math.round(temp);
			return hideUnit ? `${temp}` : `${temp}°C`
		}
	}


	let details = (<div className="MainTempDetails">
		<h1 id="city">{weatherData.city}</h1>
		<header>
			<h2>
				<TimeAndDate date={weatherData.date} />
			</h2>
		</header>
		<div className="weather-icon">
			<div className="icon">
				<WeatherIcon code={weatherData.icon} size={70} />
			</div>
		</div>
		<FahrenheitToCelsius celsius={weatherData.temperature} unit={unit} onUnitChange={setUnit} displayTemp={displayTemp} />
		<div className="mood" id="description">
			{weatherData.description}
		</div>
		<div className="container text-center deets">
			<div className="row">
				<div className="col-sm-4">
					<span className="feel"> Real feel </span>
					<span id="degree">{displayTemp(weatherData.realFeel)}</span>
				</div>
				<div className="col-sm-4">
					<span className="wind">Wind </span>
					<span id="mph">{weatherData.wind} mph</span>
				</div>
				<div className="col-sm-4">
					<span className="humid">Humidity </span>
					<span id="percent">{weatherData.humidity}%</span>
				</div>
			</div>
		</div>
		<Forecast coordinates={weatherData.coord} displayTemp={displayTemp} />
	</div >);

	function showTemperature(response) {
		setWeatherData({
			coord: response.data.coord,
			temperature: Math.round(response.data.main.temp),
			icon: response.data.weather[0].icon,
			wind: Math.round(response.data.wind.speed),
			humidity: response.data.main.humidity,
			realFeel: Math.round(response.data.main.feels_like),
			description: response.data.weather[0].description,
			date: new Date(response.data.dt * 1000),
			city: response.data.name,
		})
	}

	function onSearch(event) {
		event.preventDefault();
		if (city.length > 0) {
			let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6d68aadfacdd4f5163bc273049a0cf2d&units=Metric`;
			axios.get(url).then(showTemperature);
			setLoaded(true);
		}
	}

	function updateCity(event) {
		setCity(event.target.value);
	}

	let citySearch = (<form id="search-city">
		<input
			className="form-control form-control-sm"
			id="city-input"
			type="text"
			onChange={updateCity}
			placeholder="Enter city"
			autoComplete="off"
		/>

		<div className="buttons">
			<button
				type="submit"
				id="searchButton"
				onClick={onSearch}
				className="btn1 btn-light"
			>
				<i className="fa-solid fa-magnifying-glass"></i>
			</button>
		</div>
	</form>);

	if (loaded) {
		return (
			<section>
				<div className="citySearch">
					{details}
					{citySearch}
				</div>
			</section>
		);
	} else {
		return (
			<section>
				<div className="citySearch">
					<h1>Where to?</h1>
					{citySearch}
				</div>
			</section>
		)
	}
}

