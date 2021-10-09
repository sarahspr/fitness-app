import React from "react";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div className="home d-flex justify-center">
			<div className="left d-flex flex-column justify-center pt-1 pr-1 pb-1 pl-4">
				<h1 className="h2 mb-2">Track Your Healthy Lifestyle</h1>
				<p className="mb-2">
					Sick of using different apps to track different parts of your life?
					Use Fit App to track nutrition, training, cardio, and more all in one
					app.
				</p>
				<Link className="btn btn-primary" to="/register">
					Get Started
				</Link>
			</div>
			<div className="right pt-1 pr-4 pb-1 pl-1">
				<div className="hero-image" />
			</div>
		</div>
	);
}

export default Home;
