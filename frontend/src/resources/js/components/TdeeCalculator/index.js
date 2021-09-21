import React, { useState } from 'react';

function TdeeCalculator(props) {
  const [formData, setFormData] = useState({
    formulaType: 'revised-harris-benedict',
    measurementType: 'imperial',
    gender: 'male',
    age: '',
    weight: '',
    height: '',
    regularActivityMultiplier: 'regular-sedentary',
    exerciseActivityMultiplier: 'exercise-rarely'
  });

  const [validAgeInput, setValidAgeInput] = useState(true);
  const [validWeightInput, setValidWeightInput] = useState(true);
  const [validHeightInput, setValidHeightInput] = useState(true);
  const validInputRegex = /^[0-9]+$/;

  const handleAgeInput = (e) => {
    e.preventDefault();
    setFormData({...formData, age: e.target.value});
    validateAgeInput(e.target.value);
  }


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

  const validateAgeInput =(input) => {
    if(input === ' ' || validInputRegex.test(input) === false) {
      setValidAgeInput(false); 
    } else {
      setValidAgeInput(true);
    }
    return validAgeInput;
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

  const [tdeeCalculation, setTdeeCalculation] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    let bmr;
    let tdee;
    //Revised Harris Benedict Formula / Imperial / Male
    if(formData.formulaType === 'revised-harris-benedict' && formData.measurementType === 'imperial' && formData.gender === 'male') {
        bmr = 66.47 + (6.24 * formData.weight) + (12.7 * formData.height) - (6.755 * formData.age);
    } else if (formData.formulaType === 'revised-harris-benedict' && formData.measurementType === 'imperial' && formData.gender === 'female') {
        //Revised Harris Benedict Formula / Imperial / Female
        bmr = 655.1 + (4.35 * formData.weight) + (4.7 * formData.height) - (4.7 * formData.age);
        console.log(bmr);
    } else if(formData.formulaType === 'revised-harris-benedict' && formData.measurementType === 'metric' && formData.gender === 'male') {
        //Revised Harris Benedict Formula / Metric / Male
        bmr = 66.47 + (13.75 * formData.weight) + (5.003 * formData.height) - (6.755 * formData.age);
    } else if (formData.formulaType === 'revised-harris-benedict' && formData.measurementType === 'metric' && formData.gender === 'female') {
        //Revised Harris Benedict Formula / Metric / Female
        bmr = 655.1 + (9.563 * formData.weight) + (1.85 * formData.height) - (4.676 * formData.age);
    } else if (formData.formulaType === 'mifflin-st-jeor' && formData.measurementType === 'imperial' && formData.gender === 'male') {
      //Mifflin-St Jeor Formula / Imperial / Male
      bmr = 10 * (formData.weight / 2.2) + 6.25 * (formData.height * 2.54) - 5 * formData.age + 5;
    } else if (formData.formulaType === 'mifflin-st-jeor' && formData.measurementType === 'imperial' && formData.gender === 'female') {
      //Mifflin-St Jeor Formula / Imperial / Female
      bmr = 10 * (formData.weight / 2.2) + 6.25 * (formData.height * 2.54) - 5 * formData.age - 161;
    } else if (formData.formulaType === 'mifflin-st-jeor' && formData.measurementType === 'metric' && formData.gender === 'male') {
      //Mifflin-St Jeor Formula / Metric / Male
      bmr = 10 * formData.weight + 6.25 * formData.height - 5 * formData.age + 5;
    } else if (formData.formulaType === 'mifflin-st-jeor' && formData.measurementType === 'metric' && formData.gender === 'female') {
      //Mifflin-St Jeor Formula / Metric / Female
      bmr = 10 * formData.weight + 6.25 * formData.height - 5 * formData.age - 161;
    }
    setTdeeCalculation(Math.round(bmr));
  }

  const clearForm = (e) => {
    e.preventDefault();

    setFormData({
      formulaType: 'revised-harris-benedict',
      measurementType: 'imperial',
      gender: '',
      age: '',
      weight: '',
      height: ''
    });
  }

  return (
    <div className="bmi-calculator">
      <h3 className="bmi-calculator-title text-center mt-1 mb-4">{props.title}</h3>
        <form className="bmi-calculator-form d-flex flex-column align-center">

            <span className="text-center d-block mt-1 mb-1">Choose a Formula:</span>
            <div className="input-type d-flex justify-between mb-1">
              <div className="input-container d-flex align-center mb-1">
                <label>
                  <input 
                  type="radio" id="revised-harris-benedict" 
                  name="formula-type" 
                  value="revised-harris-benedict"
                  checked={formData.formulaType === 'revised-harris-benedict'}
                  onChange={(e) => setFormData({...formData, formulaType: e.target.value})} 
                  />
                  Harris Benedict
                </label>
              </div>

              <div className="input-container d-flex align-center mb-1">
                <label>
                  <input
                  type="radio" 
                  id="mifflin-st-jeor" 
                  name="formula-type" 
                  value="mifflin-st-jeor"
                  checked={formData.formulaType === 'mifflin-st-jeor'}
                  onChange={(e) => setFormData({...formData, formulaType: e.target.value})}
                  />
                  Mifflin-St Jeor
                </label>
              </div>
            </div>

            <span className="text-center d-block mt-1 mb-1">Choose a Measurement Type:</span>
            <div className="input-type d-flex justify-between mb-1">
              <div className="input-container d-flex align-center mb-1">
                <label>
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
                <label>
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

            <span className="text-center d-block mt-1 mb-1">Select a Gender:</span>
            <div className="input-type d-flex justify-between mb-1">
              <div className="input-container d-flex align-center mb-1">
                <label>
                  <input 
                  type="radio" 
                  id="male" 
                  name="gender" 
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={(e) => setFormData({...formData, gender: e.target.value})} 
                  />
                  Male
                </label>
              </div>

              <div className="input-container d-flex align-center mb-1">
                <label>
                  <input
                  type="radio" 
                  id="female" 
                  name="gender" 
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={(e) => setFormData({...formData, gender: e.target.value})}
                  />
                  Female
                </label>
              </div>
            </div>

            <span>How Old Are You?</span>
            <div className="input-container d-flex flex-column align-center mb-1">
                  <input
                  type="text" 
                  id="age" 
                  name="age"
                  value={formData.age}
                  onChange={handleAgeInput}
                  />
              </div>

            <div className={`imperial-input-container mb-1 flex-column ${formData.measurementType === 'metric' ? 'metric' : 'imperial'}`}>
              <div className="input-container d-flex flex-column align-center mb-1">
                <label>
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
                <label>
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
                <label>
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
                <label>
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

            <span>Be Honest with Yourself, How Active Are You Besides Exercise?</span>
            <div className='activity-multiplier-container input-type d-flex justify-between mb-1'>

            <div className="input-container d-flex align-center mb-1">
                <label>
                  <input 
                  type="radio"
                  id="regular-sedentary" 
                  name="regular-activity-level" 
                  value="regular-sedentary"
                  checked={formData.regularActivityMultiplier === 'regular-sedentary'}
                  onChange={(e) => setFormData({...formData, regularActivityMultiplier: e.target.value})} 
                  />
                  Sedentary
                </label>
              </div>

              <div className="input-container d-flex align-center mb-1">
                <label>
                  <input
                  type="radio" 
                  id="regular-lightly-active" 
                  name="regular-activity-level" 
                  value="regular-lightly-active"
                  checked={formData.regularActivityMultiplier === 'regular-lightly-active'}
                  onChange={(e) => setFormData({...formData, regularActivityMultiplier: e.target.value})}
                  />
                  Lightly Active
                </label>
              </div>

              <div className="input-container d-flex align-center mb-1">
                <label>
                  <input
                  type="radio" 
                  id="regular-moderately-active" 
                  name="regular-activity-level" 
                  value="regular-moderately-active"
                  checked={formData.regularActivityMultiplier === 'regular-moderately-active'}
                  onChange={(e) => setFormData({...formData, regularActivityMultiplier: e.target.value})}
                  />
                  Moderately Active
                </label>
              </div>

              <div className="input-container d-flex align-center mb-1">
                <label>
                  <input
                  type="radio" 
                  id="regular-very-active" 
                  name="regular-activity-level" 
                  value="regular-very-active"
                  checked={formData.regularActivityMultiplier === 'regular-very-active'}
                  onChange={(e) => setFormData({...formData, regularActivityMultiplier: e.target.value})}
                  />
                  Very Active
                </label>
              </div>

              <div className="input-container d-flex align-center mb-1">
                <label>
                  <input
                  type="radio" 
                  id="regular-extremely-active" 
                  name="regular-activity-level" 
                  value="regular-extremely-active"
                  checked={formData.regularActivityMultiplier === 'regular-extremely-active'}
                  onChange={(e) => setFormData({...formData, regularActivityMultiplier: e.target.value})}
                  />
                  Extremely Active
                </label>
              </div>

            </div>

            <span>How Much do You Workout?</span>
            <div className='activity-multiplier-container input-type d-flex justify-between mb-1'>

            <div className="input-container d-flex align-center mb-1">
                <label>
                  <input 
                  type="radio"
                  id="exercise-rarely" 
                  name="exercise-activity-level" 
                  value="exercise-rarely"
                  checked={formData.exerciseActivityMultiplier === 'exercise-rarely'}
                  onChange={(e) => setFormData({...formData, exerciseActivityMultiplier: e.target.value})} 
                  />
                  Rarely
                </label>
              </div>

              <div className="input-container d-flex align-center mb-1">
                <label>
                  <input
                  type="radio" 
                  id="exercise-lightly-active" 
                  name="exercise-activity-level" 
                  value="exercise-lightly-active"
                  checked={formData.exerciseActivityMultiplier === 'exercise-lightly-active'}
                  onChange={(e) => setFormData({...formData, exerciseActivityMultiplier: e.target.value})}
                  />
                  Lightly Active
                </label>
              </div>

              <div className="input-container d-flex align-center mb-1">
                <label>
                  <input
                  type="radio" 
                  id="exercise-moderately-active" 
                  name="exercise-activity-level" 
                  value="exercise-moderately-active"
                  checked={formData.exerciseActivityMultiplier === 'exercise-moderately-active'}
                  onChange={(e) => setFormData({...formData, exerciseActivityMultiplier: e.target.value})}
                  />
                  Moderately Active
                </label>
              </div>

              <div className="input-container d-flex align-center mb-1">
                <label>
                  <input
                  type="radio" 
                  id="exercise-very-active" 
                  name="exercise-activity-level" 
                  value="exercise-very-active"
                  checked={formData.exerciseActivityMultiplier === 'exercise-very-active'}
                  onChange={(e) => setFormData({...formData, exerciseActivityMultiplier: e.target.value})}
                  />
                  Very Active
                </label>
              </div>

              <div className="input-container d-flex align-center mb-1">
                <label>
                  <input
                  type="radio" 
                  id="exercise-extremely-active" 
                  name="exercise-activity-level" 
                  value="exercise-extremely-active"
                  checked={formData.exerciseActivityMultiplier === 'exercise-extremely-active'}
                  onChange={(e) => setFormData({...formData, exerciseActivityMultiplier: e.target.value})}
                  />
                  Extremely Active
                </label>
              </div>

            </div>

            <div className="btn-container d-flex justify-between mt-2">
              <button className={'mb-1 btn-primary'} onClick={handleSubmit}>Calculate</button>
              <button className={'mb-1 btn-secondary'} onClick={clearForm}>Clear Form</button>
            </div>
        </form>
        <div className={`bmi-calculation-container ${tdeeCalculation === 0 ? 'd-none' : 'd-flex mx-auto justify-between'}`}>
          <span className='bmi-label'>Current TDEE:</span>
          <span className="bmi-calculation">{tdeeCalculation}</span>
        </div>
    </div>
  );
}

export default TdeeCalculator;