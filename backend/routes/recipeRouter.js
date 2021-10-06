const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const Recipe = require("../models/recipeModel");

router.post("/create", auth, async (req, res) => {
	try {
		const { title } = req.body;

		const newRecipe = new Recipe({
			title,
		});

		const savedRecipe = await newRecipe.save();
		res.json(savedRecipe);
	} catch (err) {
		// Tutorial mentioned to console log error and not send it for security.
		// Wouldn't anyone be able to see it in the console tab anyways?
		console.log(err);
		res.status(400).send();
	}
});

router.get("/", auth, async (req, res) => {
	try {
		const recipes = await Recipe.find();
		res.json(recipes);
	} catch (err) {
		console.log(err);
		res.status(400).send();
	}
});

module.exports = router;
