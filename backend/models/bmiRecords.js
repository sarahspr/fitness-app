const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bmiRecordsSchema = new Schema(
	{
		measurement_type: {
			type: String,
			required: true,
		},
		imperial_weight: {
			type: Number,
		},
		imperial_height: {
			type: Number,
		},
		metric_weight: {
			type: Number,
		},
		metric_height: {
			type: Number,
		},
		bmi_calculation: {
			type: Number,
		},
	},
	{
		timestamps: true,
	}
);

const BmiRecord = mongoose.model("BmiRecord", bmiRecordsSchema);

module.exports = BmiRecord;
