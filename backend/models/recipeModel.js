const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
});

const Recipe = mongoose.model("recipe", recipeSchema);

module.exports = Recipe;
