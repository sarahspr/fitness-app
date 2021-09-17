import React from 'react';
import ReactDOM from 'react-dom';
import BmiCalculator from './BmiCalculator';
import BmrCalculator from './BmrCalculator';
import TdeeCalculator from './TdeeCalculator';

ReactDOM.render(
  <React.StrictMode>
    <BmiCalculator />
    <BmrCalculator />
    <TdeeCalculator />
  </React.StrictMode>,
  document.getElementById('root')
);