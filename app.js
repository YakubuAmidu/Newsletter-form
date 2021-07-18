const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/signup.html');
});

app.post('/', function (req, res) {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: 'subscrbed',
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };

  const jsonData = JSON.stringify(data);

  const url = 'https://usX.api.mailchimp.com/3.0/lists';

  https.requests(url, options, function (response) {});
});

app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});

//API KEY
//2325a6d68ed12b7e84e77e256168a2cf-us6

//List ID
//94e16d7b42
