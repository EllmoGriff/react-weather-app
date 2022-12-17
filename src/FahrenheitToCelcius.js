import React from "react";
import "./FahrenheitToCelcius.css"

export default function FahrenheitToCelcius() {
    return (
        <div className="celsius-and-fahrenheit">
            <button className="tempC" >
                °C
            </button>
            <span className="f">
                /
                <button className="tempF">
                    °F
                </button>
            </span>
        </div>)
}

// function degreeC() {
//     let C = celsiusTemp;
//     let temp = document.querySelector("#current-temp");
//     let feelC = document.querySelector("#degree");
//     document.querySelector("#current-temp").innerHTML = `${C}°`;
//     document.querySelector("#degree").innerHTML = `${feelsLikeFahren}°`;
//     if (C === null) {
//         temp.innerHTML = `0°`;
//         feelC.innerHTML = `°`;
//     }
// }

// function degreeF() {
//     let fahrenTemp = Math.round((celsiusTemp * 9) / 5 + 32);
//     let feelLikeF = Math.round((feelsLikeFahren * 9) / 5 + 32);
//     let F = document.querySelector("#current-temp");
//     let feelF = document.querySelector("#degree");
//     feelF.innerHTML = `${feelLikeF}°`;
//     F.innerHTML = `${fahrenTemp}°`;
//     if (feelsLikeFahren === null) {
//         feelF.innerHTML = `°`;
//         F.innerHTML = `0°`;
//     }
// }

// let tempC = document.querySelector(".tempC");
// tempC.addEventListener("click", degreeC);
// let tempF = document.querySelector(".tempF");
// tempF.addEventListener("click", degreeF);

// let celsiusTemp = null;
// let feelsLikeFahren = null;