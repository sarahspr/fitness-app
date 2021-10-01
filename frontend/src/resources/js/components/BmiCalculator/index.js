import React, { useEffect, useState } from "react";

function BmiCalculator(props) {
	const [formData, setFormData] = useState({
		measurementType: "imperial",
		weight: "",
		height: "",
	});

	const [validWeightInput, setValidWeightInput] = useState(true);
	const [validHeightInput, setValidHeightInput] = useState(true);
	const validInputRegex = /^[0-9]+$/;

	const [showCalculation, setCalculationDisplay] = useState(false);

	const setFormDataValues = (e) => {
		setFormData({ ...formData, measurementType: e.target.value });
	};

	const handleWeightInput = (e) => {
		e.preventDefault();
		setFormData({ ...formData, weight: e.target.value });
		validateWeightInput(e.target.value);
	};

	const handleHeightInput = (e) => {
		e.preventDefault();
		setFormData({ ...formData, height: e.target.value });
		validateHeightInput(e.target.value);
	};

	const validateWeightInput = (input) => {
		if (input === " " || validInputRegex.test(input) === false) {
			setValidWeightInput(false);
		} else {
			setValidWeightInput(true);
		}
		return validWeightInput;
	};

	const validateHeightInput = (input) => {
		if (input === " " || validInputRegex.test(input) === false) {
			setValidHeightInput(false);
		} else {
			setValidHeightInput(true);
		}
		return validHeightInput;
	};

	const [bmiCalculation, setBmiCalculation] = useState(0);

	function handleSubmit(e) {
		e.preventDefault();
		let bmi;
		if (formData.measurementType === "imperial") {
			//Imperial Formula for BMI calculation
			bmi = Math.round(100 * (703 * (formData.weight / Math.pow(formData.height, 2)))) / 100;
		} else {
			//Metric Formula for BMI calculation
			bmi = Math.round(100 * (formData.weight / Math.pow(formData.height, 2))) / 100;
		}

		//Display Calculation
		setCalculationDisplay(true);

		setBmiCalculation(bmi);
	}

	const clearForm = (e) => {
		e.preventDefault();

		setFormData({
			measurementType: "imperial",
			weight: "",
			height: "",
		});

		setCalculationDisplay(false);
	};

	return (
		<div className="bmi-calculator">
			<h3 className="bmi-calculator-title text-center mt-1 mb-4">{props.title}</h3>
			<form className="bmi-calculator-form d-flex flex-column align-center">
				<span className="label text-center d-block mt-1 mb-1">Choose a Measurement Type:</span>
				<div className="input-type d-flex justify-center mb-1">
					<div className="input-container radio-input-container d-flex align-center mb-1">
						<label className="radio-input-label justify-center align-center">
							<input
								type="radio"
								id="imperial"
								className="d-none"
								name="input-type"
								value="imperial"
								onChange={setFormDataValues}
							/>
							<span className="selected"></span>
							Imperial
						</label>
					</div>

					<div className="input-container radio-input-container d-flex align-center mb-1">
						<label className="radio-input-label justify-center align-center">
							<input
								type="radio"
								id="metric"
								className="d-none"
								name="input-type"
								value="metric"
								onChange={setFormDataValues}
							/>
							<span className="selected"></span>
							Metric
						</label>
					</div>
				</div>
				<div
					className={`imperial-input-container mb-1 flex-column ${
						formData.measurementType === "metric" ? "metric" : "imperial"
					}`}
				>
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
						<span className={`error ${validWeightInput === true ? "d-none" : "d-flex"}`}>
							Please enter at least 1 number
						</span>
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
						<span className={`error ${validHeightInput === true ? "d-none" : "d-flex"}`}>
							Please enter at least 1 number
						</span>
					</div>
				</div>
				<div
					className={`metric-input-container mb-1 flex-column ${
						formData.measurementType === "metric" ? "metric" : "imperial"
					}`}
				>
					<div className="input-container d-flex align-center mb-1">
						<label className="d-flex align-end">
							<input
								type="text"
								id="metric-weight"
								name="metric-weight"
								placeholder="150"
								onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
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
								onChange={(e) => setFormData({ ...formData, height: e.target.value })}
							/>
							Height (cm)
						</label>
					</div>
				</div>
				<div className="btn-container d-flex justify-between mt-2">
					<button className={"mb-1 btn-primary"} onClick={handleSubmit}>
						Calculate
					</button>
					<button className={"mb-1 btn-secondary"} onClick={clearForm}>
						Clear Form
					</button>
				</div>
				<div
					className={`calculation-container ${
						showCalculation === false ? "d-none" : "d-flex mx-auto justify-between mt-3 mb-3"
					}`}
				>
					<h6 className="calculation-label">BMI:</h6>
					<span className="bmi-calculation h6">{bmiCalculation}</span>
				</div>
			</form>
		</div>
	);
}

export default BmiCalculator;
