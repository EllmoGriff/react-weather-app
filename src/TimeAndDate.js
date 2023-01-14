import React from "react";

let days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

let months = [
	"Jan",
	"Feb",
	"March",
	"April",
	"May",
	"June",
	"July",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

export default function TimeAndDate(props) {
	if (props.date === undefined) {
		return <div> </div>
	}

	return formatTimeAndDate(props.date)
}


function formatTimeAndDate(date) {
	let month = months[date.getMonth()];
	let day = days[date.getDay()];
	let currentDate = date.getUTCDate();

	let hours = date.getHours();
	if (hours < 10) hours = `0${hours}`;

	let minutes = date.getMinutes();
	if (minutes < 10) minutes = `0${minutes}`;

	let ampm = hours >= 12 ? "pm" : "am";

	return (<div>{day} {currentDate} {month} {hours}: {minutes} {ampm}</div>)
}
