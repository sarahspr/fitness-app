import React from "react";

function Home() {
	return (
		<section className="homepage d-flex flex-column align-center">
			<div className="welcome-container d-flex justify-center mt-3">
				<h1 className="h3 pt-5 text-center">Welcome to Fit App</h1>
				{/* <div className="hero-animation"></div> */}
			</div>
			<form className="login-form mt-3">
				<h2 className="h6 text-center mt-1 mb-2">Log in to Get Started</h2>
				<div class="login-inputs-container d-flex flex-column align-center">
					<label className="label">Username</label>
					<input type="text" className="mt-1 mb-2"></input>
					<label className="label">Password</label>
					<input type="password" className="mt-1"></input>
					<div className="btn-container d-flex justify-center mt-3">
						<button class="btn btn-primary mb-2 mr-1">Log In</button>
						<button class="btn btn-secondary mb-2">Sign Up</button>
					</div>
				</div>
			</form>
		</section>
	);
}

export default Home;
