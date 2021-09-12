import './App.scss';

function App() {
  return (
    <div className="bmi-calculator">
              <h1 className="bmi-calculator-title text-center mt-4 mb-4">BMI Calculator</h1>
      <form className="bmi-calculator-container d-flex flex-column align-center border-1">
          <span className="text-center d-block mt-1 mb-2">Imperial or Metric</span>
          <div className="input-type d-flex justify-between mb-1">
            <div className="input-container d-flex align-center">
              <input type="radio" id="imperial" name="input-type" value="imperial"/>
              <label for="imperial">Imperial</label>
            </div>
            <div className="input-container d-flex align-center">
              <input type="radio" id="metric" name="input-type" value="metric"/>
              <label for="metric">Metric</label>
            </div>
          </div>
          <div class="imperial-input-container d-none">
            <div class="input-container d-flex align-center">
              <input type="number" id="imperial-weight" name="imperial-weight" placeholder="150" />
              <label for ="imperial-weight" class="weight-label">Weight (lbs)</label>
            </div>
            <div class="input-container d-flex align-center">
              <input type="number" id="imperial-height" name="imperial-height" placeholder="60" />
              <label for ="imperial-height" class="height-label">Height (inches)</label>
            </div>
          </div>
          <div class="metric-input-containe d-none">
            <div class="input-container d-flex align-center">
              <input type="number" id="metric-weight" name="metric-weight" placeholder="150" />
              <label for ="metric-weight" class="weight-label">Weight (kgs)</label>
            </div>
            <div class="input-container d-flex align-center">
              <input type="number" id="metric-height" name="metric-height" placeholder="60" />
              <label for ="metric-height" class="height-label">Height (cm)</label>
            </div>
          </div>
          <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;
