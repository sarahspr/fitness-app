import React from 'react';
import ReactDOM from 'react-dom';
import BmiCalculator from './BmiCalculator';
import BmrCalculator from './BmrCalculator';

ReactDOM.render(
  <React.StrictMode>
    <BmiCalculator />
    <BmrCalculator />
  </React.StrictMode>,
  document.getElementById('root')
);