import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Header";
import MainTemp from "./MainTemp";

import CitySearch from "./CitySearch";
import GithubLink from "./GithubLink";
// import axios from "axios;";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <MainTemp />
    <CitySearch />
    <GithubLink />
  </React.StrictMode>
);
