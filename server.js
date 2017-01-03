var express = require('express');
var session = require('express-session')
var bodyParser = require('body-parser');
var nodeMailer = require('nodeMailer');
var config = require('./config.js');
var smtpTransport = require('nodemailer-smtp-transport');

var cors = require('cors');

var port = 8000;

var app = module.exports = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors());
app.use(session({ secret: config.sessionSecret }));
var mailSend = require('./controllers/emailCtrl.js')
// console.log(mailSend.toString());
app.post('/contacted', mailSend);


app.listen(port, function() {
  console.log('listening on ' + port)
})
