import './App.scss';

function App() {
  return (
    <div className="bmi-calculator">
              <h1 className="bmi-calculator-title text-center mt-5 mb-5">BMI Calculator</h1>
      <form className="bmi-calculator-container border-1">
          <span className="text-center mt-1 mb-2">Imperial or Metric</span>
          <div className="input-type">
            <div className="input-container">
              <input type="radio" id="imperial" name="input-type" value="imperial"/>
              <label for="imperial">Imperial</label>
            </div>
            <div className="input-container">
              <input type="radio" id="metric" name="input-type" value="metric"/>
              <label for="metric">Metric</label>
            </div>
          </div>
      </form>
    </div>
  );
}

export default App;
