const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/userModel");

// REGISTER USER

router.post("/create", async (req, res) => {
	try {
		const { email, password, verifyPassword } = req.body;

		// Validation
		if (!email || !password || !verifyPassword) {
			return res
				.status(400)
				.json({ errorMessage: "Please enter all required fields." });
		}

		if (password.length < 6) {
			return res
				.status(400)
				.json({
					errorMessage: "Please enter a password of at least 6 characters.",
				});
		}

		if (password !== verifyPassword) {
			return res
				.status(400)
				.json({ errorMessage: "Please enter the same password twice." });
		}

		// Check for duplicate account
		const existingUser = await User.findOne({ email });

		if (existingUser) {
			return res
				.status(400)
				.json({ errorMessage: "An account with this email already exists." });
		}

		// Hash Password

		const salt = await bcrypt.genSalt();
		const hashed_password = await bcrypt.hash(password, salt);

		const newUser = new User({
			email,
			hashed_password,
		});
		const savedUser = await newUser.save();
		// res.json(savedUser);

		// Sign the Token

		const token = jwt.sign(
			{
				user: savedUser._id,
			},
			process.env.JWT_SECRET
		);

		// Send token in an HTTP-only Cookie

		res
			.cookie("token", token, {
				httpOnly: true,
			})
			.send();
	} catch (err) {
		res.status(400).send(err);
	}
});

// LOG IN USER
router.post("/login", async (req, res) => {
	try {
		const { email, password } = req.body;

		// Validate
		if (!email || !password) {
			return res
				.status(400)
				.json({ errorMessage: "Please enter all required fields." });
		}

		const existingUser = await User.findOne({ email });
		if (!existingUser) {
			return res.status(401).json({ errorMessage: "Wrong email or password." });
		}

		const correctPassword = await bcrypt.compare(
			password,
			existingUser.hashed_password
		);
		if (!correctPassword) {
			return res.status(401).json({ errorMessage: "Wrong email or password." });
		}

		// Sign a Token
		const token = jwt.sign(
			{
				user: existingUser._id,
			},
			process.env.JWT_SECRET
		);

		// Send Token in an HTTP-only Cookie
		res
			.cookie("token", token, {
				httpOnly: true,
			})
			.send();
	} catch (err) {
		res.status(400).send(err);
	}
});

// LOG OUT USER
router.get("/logout", (req, res) => {
	try {
		res
			.cookie("token", "", {
				httpOnly: true,
				expires: new Date(0),
			})
			.send();
	} catch (err) {
		res.status(400).send(err);
	}
});

module.exports = router;
