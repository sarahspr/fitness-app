import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import BmiCalculator from '../BmiCalculator';
import BmrCalculator from '../BmrCalculator';
import TdeeCalculator from '../TdeeCalculator';

function Welcome() {

  return(
    <div className="welcome-container d-flex flex-column align-center justify-center">
      <div className="welcome-text-container mb-4">
        <h1 className="welcome-screen-title text-center mb-1">Welcome!</h1>
        <h6 className="text-center">Choose a Calculator to Get Started</h6>
      </div>
      <div className="calculator-cards-container d-flex justify-between">
        <Router>
          <Link to="/bmi-calculator">BMI Calculator</Link>
          <Link to="/bmr-calculator">BMR Calculator</Link>
          <Link to="/tdee-calculator">TDEE Calculator</Link>
        <Switch>
         <Route path="/bmi-calculator">
           <BmiCalculator title={"BMI Calculator"}/>
        </Route>
         <Route path="/bmr-calculator">
           <BmrCalculator title={"BMR Calculator"}/>
         </Route>
         <Route path="/tdee-calculator">
           <TdeeCalculator title ={"TDEE Calculator"}/>
         </Route>
       </Switch>
       </Router>
      </div>
    </div>
  );
}

export default Welcome;