const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

require("dotenv").config();

var app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

//DB Config
const db = process.env.mongoURI;

//Connect to Mongo
mongoose
	.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("Mongo Connected"))
	.catch((err) => console.log(err));

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname + "/../frontend/public/index.html"));
});

// Routes
app.use("/bmi-records", require("./routes/bmiRouter"));
app.use("/bmr-records", require("./routes/bmrRouter"));
app.use("/tdee-records", require("./routes/tdeeRouter"));

//Auth Routes
app.use("/auth", require("./routes/userRouter"));
app.use("/recipe", require("./routes/recipeRouter"));

//Setup Port for Server to Run on
const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Fitness App is listening at http://localhost:${port}`);
});
