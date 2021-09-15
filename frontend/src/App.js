import React, { useState } from 'react';
import './App.scss';

function App() {
  const [imperial, setImperial] = useState(true);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  function onSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="bmi-calculator">
              <h1 className="bmi-calculator-title text-center mt-4 mb-4">BMI Calculator</h1>
      <form className="bmi-calculator-container d-flex flex-column align-center border-1">
          <span className="text-center d-block mt-1 mb-2">Imperial or Metric</span>
          <div className="input-type d-flex justify-between mb-1">
            <div className="input-container d-flex align-center">
              <label>
                <input 
                type="radio" id="imperial" 
                name="input-type" 
                value="imperial"
                defaultChecked
                checked={imperial === true}
                onChange={() => setImperial(true)} 
                />
                Imperial
              </label>
            </div>

            <div className="input-container d-flex align-center">
              <label>
                <input
                type="radio" 
                id="metric" 
                name="input-type" 
                value="metric"
                checked={imperial === false}
                onChange={() => setImperial(false)}
                />
                Metric
              </label>
            </div>
          </div>
          <div className={`imperial-input-container mb-1 flex-column ${imperial ? 'show' : 'hide'}`}>
            <div className="input-container d-flex align-center mb-1">
              <label>
              <input 
              type="text" 
              id="imperial-weight" 
              name="imperial-weight" 
              placeholder="150"
              onChange={(e) => setWeight(e.target.value)}
              />
              Weight (lbs)
              </label>
            </div>
            <div className="input-container d-flex align-center">
              <label>
              <input 
              type="text" 
              id="imperial-height" 
              name="imperial-height" 
              placeholder="60"
              onChange={(e) => setHeight(e.target.value)}
              />
              Height (inches)
              </label>
            </div>
          </div>
          <div className={`metric-input-container mb-1 flex-column ${imperial ? 'hide' : 'show'}`}>
            <div className="input-container d-flex align-center mb-1">
              <label>
                <input 
                type="text" 
                id="metric-weight" 
                name="metric-weight" 
                placeholder="150" 
                />
                Weight (kgs)
              </label>
            </div>
            <div className="input-container d-flex align-center">
              <label>
              <input
              type="text" 
              id="metric-height" 
              name="metric-height" 
              placeholder="60" 
              />
              Height (cm)
              </label>
            </div>
          </div>
          
          <button className={'mb-1'} onClick={onSubmit}>Calculate</button>
      </form>
    </div>
  );
}

export default App;
