import React, { useState } from 'react';
import './App.scss';

function App() {
  const [measurementType, changeMeasuringUnits] = useState(null);

  function imperialUnits() {
    changeMeasuringUnits('imperial');
    console.log(measurementType);
  }

  function metricUnits() {
    changeMeasuringUnits('metric');
    console.log(measurementType);
  }
  
  function onSubmit(e) {
    e.preventDefault();

    console.log(this);
  }

  return (
    <div className="bmi-calculator">
              <h1 className="bmi-calculator-title text-center mt-4 mb-4">BMI Calculator</h1>
      <form className="bmi-calculator-container d-flex flex-column align-center border-1">
          <span className="text-center d-block mt-1 mb-2">Imperial or Metric</span>
          <div className="input-type d-flex justify-between mb-1">
            <div className="input-container d-flex align-center">
              <input 
              type="radio" id="imperial" 
              name="input-type" 
              value="imperial"
              onClick={imperialUnits} 
              />
              <label htmlFor="imperial">Imperial</label>
            </div>
            <div className="input-container d-flex align-center">
              <input
              type="radio" 
              id="metric" 
              name="input-type" 
              value="metric"
              onClick={metricUnits}
              />
              <label htmlFor="metric">Metric</label>
            </div>
          </div>
          <div className="imperial-input-container d-none">
            <div className="input-container d-flex align-center">
              <input type="number" id="imperial-weight" name="imperial-weight" placeholder="150" />
              <label htmlFor ="imperial-weight" className="weight-label">Weight (lbs)</label>
            </div>
            <div className="input-container d-flex align-center">
              <input type="number" id="imperial-height" name="imperial-height" placeholder="60" />
              <label htmlFor ="imperial-height" className="height-label">Height (inches)</label>
            </div>
          </div>
          <div className="metric-input-containe d-none">
            <div className="input-container d-flex align-center">
              <input type="number" id="metric-weight" name="metric-weight" placeholder="150" />
              <label htmlFor ="metric-weight" className="weight-label">Weight (kgs)</label>
            </div>
            <div className="input-container d-flex align-center">
              <input type="number" id="metric-height" name="metric-height" placeholder="60" />
              <label htmlFor ="metric-height" className="height-label">Height (cm)</label>
            </div>
          </div>
          <button onClick={onSubmit}>Calculate</button>
      </form>
    </div>
  );
}

export default App;
