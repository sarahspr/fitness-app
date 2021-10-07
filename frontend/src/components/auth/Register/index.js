import React, { useContext, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

import AuthContext from "../../../context/AuthContext";

function Register() {
	const { getLoggedIn } = useContext(AuthContext);
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [verifyPassword, setVerifyPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		const registerData = {
			email,
			password,
			verifyPassword,
		};

		await axios
			.post("http://localhost:3000/auth/create", registerData, {
				withCredentials: true, //allows axios to set cookies
			})
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));
		await getLoggedIn();
		history.push("/");
	};

	return (
		<section className="homepage d-flex flex-column align-center">
			<div className="welcome-container d-flex justify-center mt-3">
				<h1 className="h3 pt-5 text-center">Welcome to Fit App</h1>
			</div>
			<form className="login-form mt-3">
				<h2 className="h6 text-center mt-1 mb-2">
					Create an Account to Get Started
				</h2>
				<div className="login-inputs-container d-flex flex-column align-center">
					<input
						type="text"
						className="mt-1"
						placeholder="Email"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					></input>
					<input
						type="password"
						className="mt-1"
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					></input>
					<input
						type="password"
						className="mt-1"
						placeholder="Verify Password"
						onChange={(e) => setVerifyPassword(e.target.value)}
						value={verifyPassword}
					></input>
					<div className="btn-container d-flex justify-center mt-2">
						<button
							type="submit"
							className="btn btn-primary mb-2"
							onClick={handleSubmit}
						>
							Sign Up
						</button>
					</div>
				</div>
			</form>
		</section>
	);
}

export default Register;
