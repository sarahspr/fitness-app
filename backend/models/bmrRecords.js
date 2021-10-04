const { Decimal128 } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bmrRecordsSchema = new Schema(
	{
		formula_type: {
			type: String,
			required: true,
		},
		measurement_type: {
			type: String,
			required: true,
		},
		gender: {
			type: String,
			required: true,
		},
		age: {
			type: Number,
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
		bmr_calculation: {
			type: Decimal128,
		},
	},
	{
		timestamps: true,
	}
);

const BmrRecord = mongoose.model("BmrRecord", bmrRecordsSchema);

module.exports = BmrRecord;
