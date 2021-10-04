const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

require("dotenv").config();

var app = express();

//Middleware
app.use(cors());
app.use(express.json());

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

//Routes
const bmiRecordsRouter = require("./routes/bmiRecords");
const bmrRecordsRouter = require("./routes/bmrRecords");
const tdeeRecordsRouter = require("./routes/tdeeRecords");

app.use("/bmi-records", bmiRecordsRouter);
app.use("/bmr-records", bmrRecordsRouter);
app.use("/tdee-records", tdeeRecordsRouter);

//Setup Port for Server to Run on
const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Fitness App is listening at http://localhost:${port}`);
});
