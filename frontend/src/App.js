import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import BmiCalculator from "./BmiCalculator";
import BmrCalculator from "./BmrCalculator";
import TdeeCalculator from "./TdeeCalculator";

import './App.scss';

function App() {
  return (
    <Router>
      <div className="main-content">
        <ul className="main-nav d-flex mx-auto justify-between">
          <li className="nav-item">
            <Link to ="/bmi-calculator" className="calculator-card d-block">BMI Calculator</Link>
          </li>
          <li className="nav-item">
            <Link to ="/bmr-calculator" className="calculator-card d-block">BMR Calculator</Link>
          </li>
          <li className="nav-item">
            <Link to="tdee-calculator" className="calculator-card d-block">TDEE Calculator</Link>
          </li>
        </ul>
          
      <Switch>
        <Route path="/bmi-calculator">
          <BmiCalculator />
        </Route>
        <Route path="/bmr-calculator">
          <BmrCalculator />
        </Route>
        <Route path="/tdee-calculator">
          <TdeeCalculator />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;