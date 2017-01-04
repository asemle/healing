var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var nodeMailer = require('nodeMailer');
var passport = require('passport');
var massive = require('massive');
var config = require('./config.js');
var stripe = require('stripe');
var smtpTransport = require('nodemailer-smtp-transport');
var conn = massive.connectSync({
    connectionString: "postgres://postgres@localhost/healing"
})

var cors = require('cors');

var port = 8000;

var app = module.exports = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors());
app.use(session({ secret: config.sessionSecret }));
app.set("db", conn);
var db = app.get("db")


var mailSend = require('./controllers/emailCtrl.js');
var dbCtrl = require('./controllers/dbCtrl.js');

// console.log(mailSend.toString());
app.post('/contacted', mailSend);
app.get('/payments', dbCtrl.getPayments);
app.post('/payments', dbCtrl.addPayment);
app.delete('/payments', dbCtrl.deletePayment);

app.listen(port, function() {
  console.log('listening on ' + port)
})
