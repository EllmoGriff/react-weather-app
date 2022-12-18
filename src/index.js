import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainTemp from "./MainTemp";
import GithubLink from "./GithubLink";





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainTemp />
    <GithubLink />
  </React.StrictMode>
);
