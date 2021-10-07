import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
	return (
		<div className="welcome-container d-flex flex-column align-center justify-center">
			<div className="welcome-text-container mb-4">
				<h1 className="welcome-screen-title text-center mb-1">Welcome!</h1>
				<h6 className="text-center sub-heading">
					Choose a Calculator to Get Started
				</h6>
			</div>
			<div className="calculator-cards-container d-flex justify-between">
				<Link
					className="calculator-card d-flex flex-column"
					to="/bmi-calculator"
				>
					<span className="card-title mb-1 text-center">BMI Calculator</span>
					<span className="description text-center">
						Uses your height and weight to work out if your weight is healthy
					</span>
				</Link>
				<Link
					className="calculator-card d-flex flex-column"
					to="/bmr-calculator"
				>
					<span className="card-title mb-1 text-center">BMR Calculator</span>
					<span className="description text-center">
						Estimates the amount of energy expended while at rest in a neutrally
						temperate environment
					</span>
				</Link>
				<Link
					className="calculator-card d-flex flex-column"
					to="/tdee-calculator"
				>
					<span className="card-title mb-1 text-center">TDEE Calculator</span>
					<span className="description text-center">
						Calculates the total energy that a person uses in a day based on BMR
						and activity level
					</span>
				</Link>
			</div>
		</div>
	);
}

export default Welcome;
