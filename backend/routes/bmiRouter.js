const express = require("express");
const router = express.Router();

const BmiRecord = require("../models/bmiModel");

router.get("/", (req, res) => {
	BmiRecord.find()
		.then((bmiRecords) => res.json(bmiRecords))
		.catch((err) => res.status(400).json("Error: " + err));
});

// POST Request
router.post("/create", (req, res) => {
	const measurement_type = req.body.measurement_type;
	const imperial_weight = req.body.imperial_weight;
	const imperial_height = req.body.imperial_height;
	const metric_weight = req.body.metric_weight;
	const metric_height = req.body.metric_height;
	const bmi_calculation = req.body.bmi_calculation;

	// NEW SYNTAX OOOOOH YEAH!!!! AHHHHH!
	// const { measurement_type, imperial_weight, imperial_height, metric_weight, metric_height, bmi_calculation } =
	// 	req.body;

	const bmiRecord = new BmiRecord({
		measurement_type,
		imperial_weight,
		imperial_height,
		metric_weight,
		metric_height,
		bmi_calculation,
	});

	bmiRecord
		.save()
		.then(() => {
			res.status(200).send({ status: "Success!" });
		})
		.catch((error) => {
			res.status(400).send(error);
		});
});

module.exports = router;
