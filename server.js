// Load express
const express = require('express');

// Create our express app
const app = express();

// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
app.get('/:name', function (req, res) {
  res.send('<h1>Hello World <name>Emanuel</name>!</h1>');
});

app.get('/greeting', function (req, res) {
    res.send('<h1>Hello There Person</h1>');
  });


// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
});