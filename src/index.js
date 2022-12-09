import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Header";
import MainTemp from "./MainTemp";
import MainTempDetails from "./MainTempDetails";
import CitySearch from "./CitySearch";
import GithubLink from "./GithubLink";
// import axios from "axios;";

let [city, setCity] = useState("");
let [message, setMessage] = useState("");
let [temperature, setTemperature] = useState("");
let [description, setDescription] = useState("");
let [humidity, setHumidity] = useState("");
let [wind, setWind] = useState("");
let [icon, setIcon] = useState("");

function showTemperature(response) {
  setTemperature(response.data.main.temp);
  setDescription(response.data.weather[0].description);
  setHumidity(response.data.main.humidity);
  setWind(response.data.wind.speed);
  setIcon(response.data.weather[0].icon);
  // console.log(response.data);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <MainTemp />
    <MainTempDetails />
    <CitySearch />
    <GithubLink />
  </React.StrictMode>
);
