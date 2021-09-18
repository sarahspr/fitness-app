import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Welcome from "./resources/js/components/Welcome";
import BmiCalculator from "./resources/js/components/BmiCalculator";
import BmrCalculator from "./resources/js/components/BmrCalculator";
import TdeeCalculator from "./resources/js/components/TdeeCalculator";

import './App.scss';

function App() {
  return (
    <Welcome />
    // <Router>
    //   <div className="main-content">
    //     <ul className="main-nav d-flex mx-auto justify-between">
    //       <li className="nav-item">
    //         <Link to ="/bmi-calculator" className="calculator-card d-block">BMI Calculator</Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link to ="/bmr-calculator" className="calculator-card d-block">BMR Calculator</Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link to="tdee-calculator" className="calculator-card d-block">TDEE Calculator</Link>
    //       </li>
    //     </ul>
        
    //   <Switch>
    //     <Route path="/bmi-calculator">
    //       <BmiCalculator title={"BMI Calculator"}/>
    //     </Route>
    //     <Route path="/bmr-calculator">
    //       <BmrCalculator title={"BMR Calculator"}/>
    //     </Route>
    //     <Route path="/tdee-calculator">
    //       <TdeeCalculator title ={"TDEE Calculator"}/>
    //     </Route>
    //   </Switch>
    //   </div>
    // </Router>
  );
}

export default App;