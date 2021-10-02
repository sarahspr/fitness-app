const { Int32, Decimal128 } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bmiRecordsSchema = new Schema(
	{
		measurement_type: {
			type: String,
			required: true,
		},
		imperial_weight: {
			type: Int32,
		},
		imperial_height: {
			type: Int32,
		},
		metric_weight: {
			type: Int32,
		},
		metric_height: {
			type: Int32,
		},
		bmi_calculation: {
			type: Decimal128,
		},
	},
	{
		timestamps: true,
	}
);

const BmiRecord = mongoose.model("BmiRecord", bmiRecordsSchema);

module.exports = BmiRecord;
