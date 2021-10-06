import { React, Fragment } from "react";
import Router from "./Router";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Login from "./components/auth/Login";
import Welcome from "./components/Welcome";
import Register from "./components/auth/Register";

//Calculators
import BmiCalculator from "./components/BmiCalculator";
import BmrCalculator from "./components/BmrCalculator";
import TdeeCalculator from "./components/TdeeCalculator";

import "./App.scss";

function App() {
	return (
		<Router />
		// <Router>
		// 	<div className="main-content">
		// 		<Switch>
		// 			<Route exact path="/" component={Register}></Route>
		// 			<Fragment>
		// 				<Navbar />
		// 				<Route exact path="/bmi-calculator">
		// 					<BmiCalculator title="BMI Calculator" />
		// 				</Route>
		// 				<Route exact path="/bmr-calculator">
		// 					<BmrCalculator title="BMR Calculator" />
		// 				</Route>
		// 				<Route exact path="/tdee-calculator">
		// 					<TdeeCalculator title="TDEE Calculator" />
		// 				</Route>
		// 			</Fragment>
		// 		</Switch>
		// 	</div>
		// </Router>
	);
}

export default App;
