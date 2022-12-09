import React, { useState } from "react";
import "./CitySearch.css";
import axios from "axios";

export default function CitySearch() {
	let [city, setCity] = useState("");
	let [message, setMessage] = useState("");
	let [temperature, setTemperature] = useState("");
	let [description, setDescription] = useState("");
	let [humidity, setHumidity] = useState("");
	let [wind, setWind] = useState("");
	let [icon, setIcon] = useState("");
	let [realFeel, setRealFeel] = useState("");

	function showTemperature(response) {
		setTemperature(response.data.main.temp);
		setDescription(response.data.weather[0].description);
		setHumidity(response.data.main.humidity);
		setWind(response.data.wind.speed);
		setIcon(response.data.weather[0].icon);
		// setRealFeel(response.data.)

		console.log(response.data);
	}

	function onSearch(event) {
		event.preventDefault();
		if (city.length > 0) {
			let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6d68aadfacdd4f5163bc273049a0cf2d&units=Metric`;
			axios.get(url).then(showTemperature);
			//   setMessage{
			//     <div className="MainTempDetails">
			//   <div className="mood" id="description">
			//     {description}
			//   </div>
			//   <div className="container text-center deets">
			//     <div className="row">
			//       <div className="col-sm-4">
			//         <span className="feel">{Real feel} </span>
			//         <span id="degree">{temperature}°</span>
			//       </div>
			//       <div className="col-sm-4">
			//         <span className="wind">Wind </span>
			//         <span id="mph">{wind} mph</span>
			//       </div>
			//       <div className="col-sm-4">
			//         <span className="humid">Humidity </span>
			//         <span id="percent">{humidity}%</span>
			//       </div>
			//     </div>
			//   </div>
			// </div>
			//   }
			//   setMessage(
			//     <ul className="showTemperature">
			//       <li>{city}</li>
			//       <li>Temperature: {Math.round(temperature)}°C</li>
			//       <li>Description: {description}</li>
			//       <li>Humidity:{humidity}%</li>
			//       <li>Wind:{Math.round(wind)}km/h </li>
			//       <li>
			//         {" "}
			//         <img
			//           src={`http://openweathermap.org/img/w/${icon}.png`}
			//           alt="Weather icons"
			//         />
			//       </li>
			//     </ul>
			//   );
			// } else {
			//   setMessage(`Please Enter a City`);
			// }
		}
		function onGeoLoation() {}
		function updateCity(event) {
			setCity(event.target.value);
		}
		return (
			<div className="searchEngine">
				<form onSubmit={handleSubmit}>
					{" "}
					<input
						type="search"
						onChange={updateCity}
						placeholder="Where to?"
					/>
					<input type="submit" value="search" id="searchButton" />
				</form>
				<h2>{message}</h2>
			</div>
		);
	}
	return (
		<section>
			<div className="citySearch">
				<form id="search-city">
					<input
						className="form-control form-control-sm"
						id="city-input"
						type="text"
						onChange={updateCity}
						placeholder="Enter city"
						autocomplete="off"
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
							onClick={onGeolocation}
						>
							<i className="fa-solid fa-location-dot"></i>
						</button>
					</div>
				</form>
			</div>
		</section>
	);
}
