var express = require('express');
var bodyParser = require('body-parser');
var nodeMailer = require('nodeMailer');
var smtpTransport = require('nodemailer-smtp-transport');
var config = require('./config.js');
var cors = require('cors');
var port = 8000;

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors());


app.post('/contacted', function (req, res) {

  var mailOpts;
  //Setup Nodemailer transport, I chose gmail. Create an application-specific password to avoid problems.
  var options = {
    service: 'gmail',
    auth: {
        user: config.user,
        pass: config.password
    }
  };
  var transporter = nodeMailer.createTransport(smtpTransport(options))
  //Mail options
  mailOpts = {
      from: req.body.email , //grab form data from the request body object
      to: config.user,
      subject: req.body.name + " contacted you from HealingwithLisa",
      text: req.body.message,
      html: '<b>' + req.body.email + '</b>',
  };
  transporter.sendMail(mailOpts, function (error, response) {
      //Email not sent
      if (error) {
          console.log(error);
          res.json({yo: 'error'});
      } else {
        console.log('Message sent:' + response)
        res.json({yo: response});
      }
      //Yay!! Email sent
  });
});


app.listen(port, function() {
  console.log('listening on ' + port)
})
