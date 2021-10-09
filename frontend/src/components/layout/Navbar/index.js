import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";

import AuthContext from "../../../context/AuthContext";
import Logout from "../../auth/Logout";
import logo from "../../../resources/images/logo.png";

function Navbar() {
	const location = useLocation();
	const { loggedIn } = useContext(AuthContext);
	return (
		<div
			className={`navbar d-flex align-center justify-between ${
				location.pathname === "/login" ? "blue-nav" : ""
			}`}
		>
			<Link
				className={`logo-container p-2 d-flex flex-reverse align-center ${
					location.pathname === "/login" ? "w-50 justify-end" : ""
				}`}
				to={`${loggedIn === true ? "/dashboard" : "/"}`}
			>
				<span className="logo-name">Fit App</span>
				<img src={logo} alt="site-logo"></img>
			</Link>
			{loggedIn === false && location.pathname !== "/login" && (
				<div className="p-2">
					<Link to="/login" className="btn btn-primary">
						Log In
					</Link>
				</div>
			)}
			{loggedIn === true && (
				<>
					<Link to="/bmi-calculator">BMI Calculator</Link>
					<Link to="/recipe">Recipes</Link>
					<Logout />
				</>
			)}
		</div>
	);
}

export default Navbar;
