var express = require("express");
const { MongoClient } = require("mongodb");
var path = require("path");

var app = express();

//DB Config
const db = require("./config.env").mongoURI;
const client = new MongoClient(db, { useNewUrlParser: true, useUnifiedTopology: true });

//Connect to Mongo
client
	.connect()
	.then(() => console.log("Mongo Connected"))
	.catch((err) => console.log(err));

app.get("/", (request, response) => {
	response.sendFile(path.join(__dirname + "/../frontend/public/index.html"));
});

//Setup Port for Server to Run on

const port = 3000;

app.listen(port, () => {
	console.log(`Fitness App is listening at http://localhost:${port}`);
});
