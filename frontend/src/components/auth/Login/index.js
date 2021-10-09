import axios from "axios";
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import AuthContext from "../../../context/AuthContext";

function Login() {
	const { getLoggedIn } = useContext(AuthContext);
	const history = useHistory();
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
		await getLoggedIn();
		history.push("/dashboard");
	};

	return (
		<div className="login-page d-flex flex-reverse">
			<div className="left w-50 pt-1 pr-1 pb-1 pl-1">
				<div className="login-image-container"></div>
			</div>
			<div className="right d-flex flex-column justify-center align-center w-50 pt-1 pr-4 pb-1 pl-1">
				<h1 className="h5">Log In</h1>
				<form className="auth-form d-flex flex-column align-center mt-3">
					<div className="input-container d-flex flex-column align-center w-100">
						<label for="email">Email</label>
						<input
							name="email"
							type="text"
							className="mt-1 mb-2"
							onChange={(e) => setEmail(e.target.value)}
							value={email}
							required={true}
						></input>
					</div>
					<div className="input-container d-flex flex-column align-center w-100">
						<label for="password">Password</label>
						<input
							type="password"
							name="password"
							className="mt-1"
							onChange={(e) => setPassword(e.target.value)}
							value={password}
							required={true}
						></input>
					</div>
					<div className="btn-container d-flex justify-center mt-3">
						<button
							type="submit"
							className="btn btn-primary login-btn mb-2 mr-1"
							onClick={handleSubmit}
						>
							Log In
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Login;
