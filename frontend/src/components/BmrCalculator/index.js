import React, { useState } from "react";
import axios from "axios";

function BmrCalculator(props) {
	const [formData, setFormData] = useState({
		formulaType: "revised-harris-benedict",
		measurementType: "imperial",
		gender: "male",
		age: "",
		imperialWeight: "",
		imperialHeight: "",
		metricWeight: "",
		metricHeight: "",
	});

	const [validAgeInput, setValidAgeInput] = useState(true);
	const [validWeightInput, setValidWeightInput] = useState(true);
	const [validHeightInput, setValidHeightInput] = useState(true);
	const validInputRegex = /^[0-9]+$/;

	const [showCalculation, setCalculationDisplay] = useState(false);

	const handleAgeInput = (e) => {
		e.preventDefault();
		setFormData({ ...formData, age: e.target.value });
		validateAgeInput(e.target.value);
	};

	const handleImperialWeightInput = (e) => {
		e.preventDefault();
		setFormData({ ...formData, imperialWeight: e.target.value });
		validateWeightInput(e.target.value);
	};

	const handleImperialHeightInput = (e) => {
		e.preventDefault();
		setFormData({ ...formData, imperialHeight: e.target.value });
		validateHeightInput(e.target.value);
	};

	const handleMetricWeightInput = (e) => {
		e.preventDefault();
		setFormData({ ...formData, metricWeight: e.target.value });
		validateWeightInput(e.target.value);
	};

	const handleMetricHeightInput = (e) => {
		e.preventDefault();
		setFormData({ ...formData, metricHeight: e.target.value });
		validateHeightInput(e.target.value);
	};

	// Validations

	const validateAgeInput = (input) => {
		if (input === " " || validInputRegex.test(input) === false) {
			setValidAgeInput(false);
		} else {
			setValidAgeInput(true);
		}
		return validAgeInput;
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

	const [bmrCalculation, setBmrCalculation] = useState(0);

	const calculateBmr = () => {
		let bmr;
		//Revised Harris Benedict Formula / Imperial / Male
		if (
			formData.formulaType === "revised-harris-benedict" &&
			formData.measurementType === "imperial" &&
			formData.gender === "male"
		) {
			bmr =
				66.47 +
				6.24 * formData.imperialWeight +
				12.7 * formData.imperialHeight -
				6.755 * formData.age;
		} else if (
			formData.formulaType === "revised-harris-benedict" &&
			formData.measurementType === "imperial" &&
			formData.gender === "female"
		) {
			//Revised Harris Benedict Formula / Imperial / Female
			bmr =
				655.1 +
				4.35 * formData.imperialWeight +
				4.7 * formData.imperialHeight -
				4.7 * formData.age;
		} else if (
			formData.formulaType === "revised-harris-benedict" &&
			formData.measurementType === "metric" &&
			formData.gender === "male"
		) {
			//Revised Harris Benedict Formula / Metric / Male
			bmr =
				66.47 +
				13.75 * formData.metricWeight +
				5.003 * formData.metricHeight -
				6.755 * formData.age;
		} else if (
			formData.formulaType === "revised-harris-benedict" &&
			formData.measurementType === "metric" &&
			formData.gender === "female"
		) {
			//Revised Harris Benedict Formula / Metric / Female
			bmr =
				655.1 +
				9.563 * formData.metricWeight +
				1.85 * formData.metricHeight -
				4.676 * formData.age;
		} else if (
			formData.formulaType === "mifflin-st-jeor" &&
			formData.measurementType === "imperial" &&
			formData.gender === "male"
		) {
			//Mifflin-St Jeor Formula / Imperial / Male
			bmr =
				10 * (formData.imperialWeight / 2.2) +
				6.25 * (formData.imperialHeight * 2.54) -
				5 * formData.age +
				5;
		} else if (
			formData.formulaType === "mifflin-st-jeor" &&
			formData.measurementType === "imperial" &&
			formData.gender === "female"
		) {
			//Mifflin-St Jeor Formula / Imperial / Female
			bmr =
				10 * (formData.imperialWeight / 2.2) +
				6.25 * (formData.imperialHeight * 2.54) -
				5 * formData.age -
				161;
		} else if (
			formData.formulaType === "mifflin-st-jeor" &&
			formData.measurementType === "metric" &&
			formData.gender === "male"
		) {
			//Mifflin-St Jeor Formula / Metric / Male
			bmr =
				10 * formData.metricWeight +
				6.25 * formData.metricHeight -
				5 * formData.age +
				5;
		} else if (
			formData.formulaType === "mifflin-st-jeor" &&
			formData.measurementType === "metric" &&
			formData.gender === "female"
		) {
			//Mifflin-St Jeor Formula / Metric / Female
			bmr =
				10 * formData.metricWeight +
				6.25 * formData.metricHeight -
				5 * formData.age -
				161;
		}

		setBmrCalculation(Math.round(bmr));

		// Display Calculation
		setCalculationDisplay(true);

		return Math.round(bmr);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const latestBmrCalculation = calculateBmr();

		const bmrRecord = {
			formula_type: formData.formulaType,
			measurement_type: formData.measurementType,
			gender: formData.gender,
			age: formData.age,
			imperial_weight: formData.imperialWeight,
			imperial_height: formData.imperialHeight,
			metric_weight: formData.metricWeight,
			metric_height: formData.metricHeight,
			bmr_calculation: latestBmrCalculation,
		};

		await axios
			.post("http://localhost:3000/bmr-records/create", bmrRecord)
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));

		// clearForm(e);
	};

	const clearForm = (e) => {
		e.preventDefault();

		setFormData({
			formulaType: "revised-harris-benedict",
			measurementType: "imperial",
			gender: "",
			age: "",
			imperialWeight: "",
			imperialHeight: "",
			metricWeight: "",
			metricHeight: "",
		});

		setBmrCalculation(0);

		setCalculationDisplay(false);
	};

	return (
		<div className="bmi-calculator">
			<h3 className="bmi-calculator-title text-center mt-1 mb-4">
				{props.title}
			</h3>
			<form className="bmi-calculator-form d-flex flex-column align-center">
				<span className="label text-center d-block mt-1 mb-1">
					Choose a Formula:
				</span>
				<div className="input-type d-flex justify-between mb-1">
					<div className="radio-input-container d-flex align-center mb-1">
						<label className="radio-input-label justify-center align-center">
							<input
								type="radio"
								id="revised-harris-benedict"
								className="d-none"
								name="formula-type"
								value="revised-harris-benedict"
								checked={formData.formulaType === "revised-harris-benedict"}
								onChange={(e) =>
									setFormData({ ...formData, formulaType: e.target.value })
								}
							/>
							<span className="selected"></span>
							Harris Benedict
						</label>
					</div>

					<div className="radio-input-container d-flex align-center mb-1">
						<label className="radio-input-label justify-center align-center">
							<input
								type="radio"
								id="mifflin-st-jeor"
								className="d-none"
								name="formula-type"
								value="mifflin-st-jeor"
								checked={formData.formulaType === "mifflin-st-jeor"}
								onChange={(e) =>
									setFormData({ ...formData, formulaType: e.target.value })
								}
							/>
							<span className="selected"></span>
							Mifflin-St Jeor
						</label>
					</div>
				</div>

				<span className="label text-center d-block mt-1 mb-1">
					Choose a Measurement Type:
				</span>
				<div className="input-type d-flex justify-between mb-1">
					<div className="radio-input-container d-flex align-center mb-1">
						<label className="radio-input-label justify-center align-center">
							<input
								type="radio"
								id="imperial"
								className="d-none"
								name="input-type"
								value="imperial"
								checked={formData.measurementType === "imperial"}
								onChange={(e) =>
									setFormData({ ...formData, measurementType: e.target.value })
								}
							/>
							<span className="selected"></span>
							Imperial
						</label>
					</div>

					<div className="radio-input-container d-flex align-center mb-1">
						<label className="radio-input-label justify-center align-center">
							<input
								type="radio"
								id="metric"
								className="d-none"
								name="input-type"
								value="metric"
								checked={formData.measurementType === "metric"}
								onChange={(e) =>
									setFormData({ ...formData, measurementType: e.target.value })
								}
							/>
							<span className="selected"></span>
							Metric
						</label>
					</div>
				</div>

				<span className="label text-center d-block mt-1 mb-1">
					Select a Gender:
				</span>
				<div className="input-type d-flex justify-between mb-2">
					<div className="radio-input-container d-flex align-center mb-1">
						<label className="radio-input-label justify-center align-center">
							<input
								type="radio"
								id="male"
								className="d-none"
								name="gender"
								value="male"
								checked={formData.gender === "male"}
								onChange={(e) =>
									setFormData({ ...formData, gender: e.target.value })
								}
							/>
							<span className="selected"></span>
							Male
						</label>
					</div>

					<div className="radio-input-container d-flex align-center mb-1">
						<label className="radio-input-label justify-center align-center">
							<input
								type="radio"
								id="female"
								className="d-none"
								name="gender"
								value="female"
								checked={formData.gender === "female"}
								onChange={(e) =>
									setFormData({ ...formData, gender: e.target.value })
								}
							/>
							<span className="selected"></span>
							Female
						</label>
					</div>
				</div>

				<span className="label">How Old Are You?</span>
				<div className="input-container d-flex flex-column align-center mb-2">
					<input
						type="text"
						id="age"
						name="age"
						value={formData.age}
						onChange={handleAgeInput}
					/>
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
								value={formData.imperialWeight}
								placeholder="150"
								onChange={handleImperialWeightInput}
							/>
							Weight (lbs)
						</label>
						<span
							className={`error ${
								validWeightInput === true ? "d-none" : "d-flex"
							}`}
						>
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
								value={formData.imperialHeight}
								onChange={handleImperialHeightInput}
							/>
							Height (inches)
						</label>
						<span
							className={`error ${
								validHeightInput === true ? "d-none" : "d-flex"
							}`}
						>
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
								value={formData.metricWeight}
								onChange={handleMetricWeightInput}
							/>
							Weight (kgs)
						</label>
					</div>
					<div className="input-container d-flex align-center">
						<label className="d-flex align-end">
							<input
								type="text"
								id="metric-height"
								name="metric-height"
								placeholder="60"
								value={formData.metricHeight}
								onChange={handleMetricHeightInput}
							/>
							Height (cm)
						</label>
					</div>
				</div>
				<div className="btn-container d-flex justify-between mt-2">
					<button className={"btn mb-1 btn-primary"} onClick={handleSubmit}>
						Calculate
					</button>
					<button className={"btn mb-1 btn-secondary"} onClick={clearForm}>
						Clear Form
					</button>
				</div>
				<div
					className={`calculation-container ${
						showCalculation === false
							? "d-none"
							: "d-flex mx-auto justify-between mt-3 mb-3"
					}`}
				>
					<h6 className="calculation-label">BMR:</h6>
					<span className="bmi-calculation h6">{bmrCalculation}</span>
				</div>
			</form>
		</div>
	);
}

export default BmrCalculator;
