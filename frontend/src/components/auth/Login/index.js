import axios from "axios";
import React, { useState } from "react";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		const loginData = {
			email,
			password,
		};

		await axios
			.post("http://localhost:3000/auth/login", loginData)
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));
	};

	return (
		<section className="registration-page d-flex flex-column align-center">
			<div className="welcome-container d-flex justify-center mt-3">
				<h1 className="h3 pt-5 text-center">Welcome to Fit App</h1>
			</div>
			<form className="registration-form mt-3">
				<h2 className="h6 text-center mt-1 mb-2">Log in to Get Started</h2>
				<div class="login-inputs-container d-flex flex-column align-center">
					<input
						type="text"
						className="mt-1 mb-2"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					></input>
					<input
						type="password"
						className="mt-1"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					></input>
					<div className="btn-container d-flex justify-center mt-3">
						<button
							type="submit"
							class="btn btn-primary mb-2 mr-1"
							onClick={handleSubmit}
						>
							Log In
						</button>
					</div>
				</div>
			</form>
		</section>
	);
}

export default Login;
