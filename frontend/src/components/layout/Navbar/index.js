import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div className="header d-flex justify-center mx-auto">
			<nav className="main-nav d-flex justify-center">
				<ul className="nav-links d-flex justify-between">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/register">Register</Link>
					</li>
					<li>
						<Link to="/login">Login</Link>
					</li>
					<li>
						<Link to="/recipe">Recipes</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Navbar;
