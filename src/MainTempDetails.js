import React from "react";
import "./MainTempDetails.css";

export default function MainTempDetails() {
	return (
		<div className="MainTempDetails">
			<div className="mood" id="description">
				Partly Cloudy
			</div>
			<div className="container text-center deets">
				<div className="row">
					<div className="col-sm-4">
						<span className="feel">Real feel </span>
						<span id="degree">°</span>
					</div>
					<div className="col-sm-4">
						<span className="wind">Wind </span>
						<span id="mph"> mph</span>
					</div>
					<div className="col-sm-4">
						<span className="humid">Humidity </span>
						<span id="percent">%</span>
					</div>
				</div>
			</div>
		</div>
	);
}
