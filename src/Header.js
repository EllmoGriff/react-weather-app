import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="App-header">
      <h1 id="city">Where to?</h1>
      <h2>
        <span className="date" id="current-date">
          Thursday 1st Sep
        </span>
        <span className="time" id="current-time">
          20:08PM
        </span>
      </h2>
    </header>
  );
}
