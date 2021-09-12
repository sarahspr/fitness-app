var express = require('express');
var path = require('path');
var app = express();
const port = 3000;

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname + "/../frontend/public/index.html"));
});

app.listen(port, () => {
  console.log(`Fitness App is listening at http://localhost:${port}`);
});