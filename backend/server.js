const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

// import bmiRecords from "./api/calculators/bmiRecords.js";

require("dotenv").config();

var app = express();

//Middleware
app.use(cors());
app.use(express.json());

//DB Config
const db = process.env.mongoURI;
// const client = new MongoClient(db, { useNewUrlParser: true, useUnifiedTopology: true });

//Connect to Mongo
mongoose
	.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("Mongo Connected"))
	.catch((err) => console.log(err));

//API
// app.use("/api/bmi", bmiRecords);

app.get("/", (request, response) => {
	response.sendFile(path.join(__dirname + "/../frontend/public/index.html"));
});

//Routes
const bmiRecordsRouter = require("./routes/bmiRecords");

app.use("/bmi-records/", bmiRecordsRouter);

//Setup Port for Server to Run on

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Fitness App is listening at http://localhost:${port}`);
});
