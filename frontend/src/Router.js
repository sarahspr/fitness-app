import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";
import axios from "axios";

import AuthContext from "./context/AuthContext";
import Navbar from "./components/layout/Navbar";
// import Welcome from "./components/Welcome";
import Home from "./components/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/Dashboard";
import BmiCalculator from "./components/BmiCalculator";
import BmrCalculator from "./components/BmrCalculator";
import TdeeCalculator from "./components/TdeeCalculator";

axios.defaults.withCredentials = true;

function Router() {
	const location = useLocation();
	const { loggedIn } = useContext(AuthContext);
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home}></Route>
				{!loggedIn === true && (
					<>
						<Route exact path="/register" component={Register}></Route>
						<Route exact path="/login" component={Login}></Route>
					</>
				)}
				{loggedIn === true && (
					<>
						<Route exact path="/dashboard">
							<Dashboard />
						</Route>
						<Route exact path="/bmi-calculator">
							<BmiCalculator title="BMI Calculator" />
						</Route>
						<Route exact path="/bmr-calculator">
							<BmrCalculator title="BMI Calculator" />
						</Route>
						<Route exact path="/tdee-calculator">
							<TdeeCalculator title="TDEE Calculator" />
						</Route>
						<Route exact path="/recipe">
							<div>Recipes</div>
						</Route>
					</>
				)}
			</Switch>
		</BrowserRouter>
	);
}

export default Router;
