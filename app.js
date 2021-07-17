const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/signup.html');
});

app.post('/', function (req, res) {
  var firstName = req.body.fName;
  var lastName = req.body.lName;
  var email = req.body.email;

  console.log(firstName, lastName, email);
});

app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});

//2325a6d68ed12b7e84e77e256168a2cf-us6
