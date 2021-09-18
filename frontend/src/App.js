import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.scss';
import Welcome from './Welcome';
import BmiCalculator from "./BmiCalculator";
import BmrCalculator from "./BmrCalculator";
import TdeeCalculator from "./TdeeCalculator";

function App() {
  return (
    <Welcome />
  );
}

export default App;