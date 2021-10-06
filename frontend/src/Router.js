import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";

import Navbar from "./components/layout/Navbar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
// import Recipe from "./components/Recipe";

axios.defaults.withCredentials = true;

function Router() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<div>Home</div>
				</Route>
				<Route exact path="/register" component={Register}></Route>
				<Route exact path="/login" component={Login}></Route>
				<Route exact path="/recipe">
					<div>Recipes</div>
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default Router;
