import React from "react";

export default function TimeAndDate(props) {
  console.log(props)

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

  let month = months[props.date.getMonth()];
  let day = days[props.date.getDay()];
  let date = props.date.getUTCDate();

  let hours = props.date.getHours();
  if (hours < 10) hours = `0${hours}`;

  let minutes = props.date.getMinutes();
  if (minutes < 10) minutes = `0${minutes}`;

  let ampm = hours >= 12 ? "pm" : "am";

  return (
    <div>
      {day} {date} {month} {hours}:{minutes}{ampm}
    </div>
  )

}

