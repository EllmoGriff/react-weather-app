import React, { useState } from "react";
import TimeAndDate from "./TimeAndDate";
import FahrenheitToCelsius from "./FahrenheitToCelsius";
import WeatherIcon from "./WeatherIcon"
import axios from "axios";
import "./MainTemp.css";


export default function MainTemp(props) {
	let [loaded, setLoaded] = useState(false);
	let [weatherData, setWeatherData] = useState("");
	let [city, setCity] = useState("");

	let details = (<div className="MainTempDetails">
		<h1 id="city">{weatherData.city}</h1>
		<header>
			<h2>
				<span className="date" id="current-date">
					<TimeAndDate date={weatherData.date} />
				</span>
				<span className="time" id="current-time">
				</span>
			</h2>
		</header>

		<div className="weather-icon">
			<div className="icon">
				<WeatherIcon code={weatherData.icon} />
			</div>
		</div>
		<FahrenheitToCelsius celsius={weatherData.temperature} />
		<div className="mood" id="description">
			{weatherData.description}
		</div>
		<div className="container text-center deets">
			<div className="row">
				<div className="col-sm-4">
					<span className="feel"> Real feel </span>
					<span id="degree">{weatherData.realFeel}°</span>
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
	</div>);

	function showTemperature(response) {
		setWeatherData({
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

	function onGeoLocation(event) {
		event.preventDefault();
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
			<button
				type="submit"
				className="btn2 btn-light"
				onClick={onGeoLocation}
			>
				<i className="fa-solid fa-location-dot"></i>
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

