import React, { useState } from "react";
import axios from "axios";

function BmiCalculator(props) {
	const [formData, setFormData] = useState({
		measurementType: "imperial",
		imperialWeight: "",
		imperialHeight: "",
		metricWeight: "",
		metricHeight: "",
	});

	const [validWeightInput, setValidWeightInput] = useState(true);
	const [validHeightInput, setValidHeightInput] = useState(true);
	const validInputRegex = /^[0-9]+$/;

	const [showCalculation, setCalculationDisplay] = useState(false);

	const setMeasurementType = (e) => {
		setFormData({ ...formData, measurementType: e.target.value });
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

	function calculateBmi() {
		let bmi;
		if (formData.measurementType === "imperial") {
			//Imperial Formula for BMI calculation
			bmi = Math.round(100 * (703 * (formData.imperialWeight / Math.pow(formData.imperialHeight, 2)))) / 100;
		} else {
			//Metric Formula for BMI calculation
			bmi = Math.round(100 * (formData.metricWeight / Math.pow(formData.metricHeight, 2))) / 100;
		}

		setBmiCalculation(Math.round(bmi));

		//Display Calculation
		setCalculationDisplay(true);

		return Math.round(bmi);
	}

	const handleSubmit = async (e) => {
		e.preventDefault();

		const latestBmiCalculation = calculateBmi();

		const bmiRecord = {
			measurement_type: formData.measurementType,
			imperial_weight: formData.imperialWeight,
			imperial_height: formData.imperialHeight,
			metric_weight: formData.metricWeight,
			metric_height: formData.metricHeight,
			bmi_calculation: latestBmiCalculation,
		};

		await axios
			.post("http://localhost:3000/bmi-records/create", bmiRecord)
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));

		// clearForm(e);
	};

	const clearForm = (e) => {
		e.preventDefault();

		setFormData({
			measurementType: "imperial",
			imperialWeight: "",
			imperialHeight: "",
			metricWeight: "",
			metricHeight: "",
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
								onChange={setMeasurementType}
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
								onChange={setMeasurementType}
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
								value={formData.imperialWeight}
								placeholder="150"
								onChange={handleImperialWeightInput}
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
								value={formData.imperialHeight}
								onChange={handleImperialHeightInput}
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
								onChange={handleMetricWeightInput}
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
								onChange={handleMetricHeightInput}
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
