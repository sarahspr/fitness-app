import React, { useState } from 'react';

function BmiCalculator(props) {

  const [formData, setFormData] = useState({
    measurementType: 'imperial',
    weight: '',
    height: ''
  });

  const [validWeightInput, setValidWeightInput] = useState(true);
  const [validHeightInput, setValidHeightInput] = useState(true);
  const validInputRegex = /^[0-9]+$/;


  const handleWeightInput = (e) => {
    e.preventDefault();
    setFormData({...formData, weight: e.target.value});
    validateWeightInput(e.target.value);
  }

  const handleHeightInput = (e) => {
    e.preventDefault();
    setFormData({...formData, height: e.target.value});
    validateHeightInput(e.target.value);
  }

  const validateWeightInput = (input) => {
    if(input === ' ' || validInputRegex.test(input) === false) {
      setValidWeightInput(false);
    } else {
      setValidWeightInput(true);
    }
    return validWeightInput;
  }

  const validateHeightInput = (input) => {
    if(input === ' ' || validInputRegex.test(input) === false) {
      setValidHeightInput(false);
    } else {
      setValidHeightInput(true);
    }
    return validHeightInput;
  }

  const [bmiCalculation, setBmiCalculation] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    let bmi;
    if(formData.measurementType === 'imperial') {
      //Imperial Formula for BMI calculation
      bmi = Math.round(100 * (703 * (formData.weight /Math.pow(formData.height, 2)))) / 100
    } else {
      //Metric Formula for BMI calculation
      bmi = Math.round(100 * (formData.weight / (Math.pow(formData.height, 2)))) / 100
    }

    setBmiCalculation(bmi)
  }

  const clearForm = (e) => {
    e.preventDefault();

    setFormData({
      measurementType: 'imperial',
      weight: '',
      height: ''
    });
  }

  return (
    <div className="bmi-calculator">
      <h3 className="bmi-calculator-title text-center mt-1 mb-4">{props.title}</h3>
        <form className="bmi-calculator-form d-flex flex-column align-center">
            <span className="text-center d-block mt-1 mb-1">Choose a Measurement Type:</span>
            <div className="input-type d-flex justify-between mb-1">
              <div className="input-container d-flex align-center mb-1">
                <label className="d-flex align-center">
                  <input 
                  type="radio" id="imperial" 
                  name="input-type" 
                  value="imperial"
                  checked={formData.measurementType === 'imperial'}
                  onChange={(e) => setFormData({...formData, measurementType: e.target.value})} 
                  />
                  Imperial
                </label>
              </div>

              <div className="input-container d-flex align-center mb-1">
                <label className="d-flex align-center">
                  <input
                  type="radio" 
                  id="metric" 
                  name="input-type" 
                  value="metric"
                  checked={formData.measurementType === 'metric'}
                  onChange={(e) => setFormData({...formData, measurementType: e.target.value})}
                  />
                  Metric
                </label>
              </div>
            </div>
            <div className={`imperial-input-container mb-1 flex-column ${formData.measurementType === 'metric' ? 'metric' : 'imperial'}`}>
              <div className="input-container d-flex flex-column align-center mb-1">
                <label className="d-flex align-end">
                <input 
                type="text" 
                id="imperial-weight" 
                name="imperial-weight"
                value={formData.weight}
                placeholder="150"
                onChange={handleWeightInput}
                />
                Weight (lbs)
                </label>
                <span className={`error ${validWeightInput === true ? 'd-none' : 'd-flex'}`}>Please enter at least 1 number</span>
              </div>
              <div className="input-container d-flex flex-column align-center">
                <label className="d-flex align-end">
                <input 
                type="text" 
                id="imperial-height" 
                name="imperial-height" 
                placeholder="60"
                value={formData.height}
                onChange={handleHeightInput}
                />
                Height (inches)
                </label>
                <span className={`error ${validHeightInput === true ? 'd-none' : 'd-flex'}`}>Please enter at least 1 number</span>
              </div>
            </div>
            <div className={`metric-input-container mb-1 flex-column ${formData.measurementType === 'metric' ? 'metric' : 'imperial'}`}>
              <div className="input-container d-flex align-center mb-1">
                <label className="d-flex align-end">
                  <input
                  type="text" 
                  id="metric-weight" 
                  name="metric-weight" 
                  placeholder="150" 
                  onChange={(e) => setFormData({...formData, weight: e.target.value})}
                  />
                  Weight (kgs)
                </label>
              </div>
              <div className="input-container d-flex align-center">
                <label className="d-flex end">
                <input
                type="text" 
                id="metric-height" 
                name="metric-height" 
                placeholder="60" 
                onChange={(e) => setFormData({...formData, height: e.target.value})}
                />
                Height (cm)
                </label>
              </div>
            </div>
            <div className="btn-container d-flex justify-between mt-2">
              <button className={'mb-1 btn-primary'} onClick={handleSubmit}>Calculate</button>
              <button className={'mb-1 btn-secondary'} onClick={clearForm}>Clear Form</button>
            </div>
        </form>
        <div className={`bmi-calculation-container ${bmiCalculation === 0 ? 'd-none' : 'd-flex mx-auto justify-between'}`}>
          <span className='bmi-label'>Current BMI:</span>
          <span className="bmi-calculation">{bmiCalculation}</span>
        </div>
    </div>
  );
}

export default BmiCalculator;
