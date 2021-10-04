const express = require("express");
const router = express.Router();

const BmrRecord = require("../models/bmrRecords");

/**
 *
 */
router.get("/", (req, res) => {
	BmrRecord.find()
		.then((bmrRecords) => res.json(bmrRecords))
		.catch((err) => res.status(400).json("Error: " + err));
});

// POST Request
router.post("/create", (req, res) => {
	const formula_type = req.body.formula_type;
	const measurement_type = req.body.measurement_type;
	const gender = req.body.gender;
	const age = req.body.age;
	const imperial_weight = req.body.imperial_weight;
	const imperial_height = req.body.imperial_height;
	const metric_weight = req.body.metric_weight;
	const metric_height = req.body.metric_height;
	const bmr_calculation = req.body.bmr_calculation;

	// NEW SYNTAX OOOOOH YEAH!!!! AHHHHH!
	// const { measurement_type, imperial_weight, imperial_height, metric_weight, metric_height, bmi_calculation } =
	// 	req.body;

	const bmrRecord = new BmrRecord({
		formula_type,
		measurement_type,
		gender,
		age,
		imperial_weight,
		imperial_height,
		metric_weight,
		metric_height,
		bmr_calculation,
	});

	bmrRecord
		.save()
		.then(() => {
			res.status(200).send({ status: "Success!" });
		})
		.catch((error) => {
			res.status(400).send(error);
		});
});

module.exports = router;
