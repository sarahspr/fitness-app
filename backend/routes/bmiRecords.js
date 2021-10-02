const express = require("express");
const router = express.Router();

const BmiRecord = require("../models/bmiRecords");

router.route("/").get((req, res) => {
	BmiRecord.find()
		.then((bmiRecords) => res.json(bmiRecords))
		.catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
