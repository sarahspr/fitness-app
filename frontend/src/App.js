import { React, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./resources/js/components/Header";
import Home from "./resources/js/components/Home";
import Welcome from "./resources/js/components/Welcome";
import BmiCalculator from "./resources/js/components/BmiCalculator";
import BmrCalculator from "./resources/js/components/BmrCalculator";
import TdeeCalculator from "./resources/js/components/TdeeCalculator";

import "./App.scss";

function App() {
	return (
		<Router>
			<div className="main-content">
				<Switch>
					<Route exact path="/" component={Home}></Route>
					<Fragment>
						<Header />
						<Route exact path="/bmi-calculator">
							<BmiCalculator title="BMI Calculator" />
						</Route>
						<Route exact path="/bmr-calculator">
							<BmrCalculator title="BMR Calculator" />
						</Route>
						<Route exact path="/tdee-calculator">
							<TdeeCalculator title="TDEE Calculator" />
						</Route>
					</Fragment>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
