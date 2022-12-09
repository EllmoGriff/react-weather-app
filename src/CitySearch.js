import React, { useState } from "react";
import "./CitySearch.css";
import axios from "axios";

export default function CitySearch() {
	let [city, setCity] = useState("");
	let [temperature, setTemperature] = useState("");
	let [description, setDescription] = useState("");
	let [humidity, setHumidity] = useState("");
	let [wind, setWind] = useState("");
	let [realFeel, setRealFeel] = useState("");
	let [loaded, setLoaded] = useState(false);

let details =(<div className="MainTempDetails">
			  <div className="mood" id="description">
			    {description}
			  </div>
			  <div className="container text-center deets">
			    <div className="row">
			      <div className="col-sm-4">
			        <span className="feel"> Real feel </span>
			        <span id="degree">{realFeel}°</span>
			      </div>
			      <div className="col-sm-4">
			        <span className="wind">Wind </span>
			        <span id="mph">{wind} mph</span>
			      </div>
			      <div className="col-sm-4">
			        <span className="humid">Humidity </span>
			        <span id="percent">{humidity}%</span>
			      </div>
			    </div>
			  </div>
			</div>);
			
	function showTemperature(response) {
		setTemperature(response.data.main.temp);
		setDescription(response.data.weather[0].description);
		setHumidity(response.data.main.humidity);
		setWind(Math.round(response.data.wind.speed));
		setRealFeel(Math.round(response.data.main.feels_like));
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

if (loaded){
	return (
		<section>
			<div className="citySearch"> 
			{details}
			{citySearch}
			</div>
		</section>
	);}else{
		return(
			<section>
			<div className="citySearch">
			{citySearch}
			</div>
		</section>
		)
	}
}
