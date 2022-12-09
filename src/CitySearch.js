import React from "react";
import "./CitySearch.css";

export default function CitySearch() {
  return (
    <section>
      <div className="citySearch">
        <form id="search-city">
          <input
            className="form-control form-control-sm"
            id="city-input"
            type="text"
            placeholder="Enter city"
            autocomplete="off"
          />
          <div className="buttons">
            <button type="submit" className="btn1 btn-light">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <button type="submit" className="btn2 btn-light">
              <i className="fa-solid fa-location-dot"></i>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
