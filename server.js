var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var nodeMailer = require('nodeMailer');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var massive = require('massive');
var config = require('./config.js');
var stripe = require('stripe');
var smtpTransport = require('nodemailer-smtp-transport');
var conn = massive.connectSync({
    connectionString: "postgres://postgres@localhost/healing"
})

// stripe.setPublishableKey('pk_test_kVcN290woepedGKOFhaRWZyp');

var cors = require('cors');

var port = 8000;

var app = module.exports = express();

app.set("db", conn);
var db = app.get("db");
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors());
app.use(session({ secret: config.sessionSecret }));
app.use(passport.initialize());
app.use(passport.session());
app.post


var mailSend = require('./controllers/emailCtrl.js');
var dbCtrl = require('./controllers/dbCtrl.js');


passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(id, done) {
    done(null, id);
});

passport.use(new LocalStrategy(
  function(username, password, done) {
    db.login([username], function(err, user) {
      if(user[0].password === password) {
        return done(null, user[0])
      }
      else {
        return done(null, false);
      }
    })
  }

));

// console.log(mailSend.toString());
app.post('/contacted', mailSend);
app.get('/payments', dbCtrl.getPayments);
app.post('/payments', dbCtrl.addPayment);
app.delete('/payments/:id', dbCtrl.deletePayment);
app.post('/api/login', passport.authenticate('local'), function(req, res) {
  res.status(200).send();
});

app.get('/userauth', dbCtrl.getAuth);;

app.listen(port, function() {
  console.log('listening on ' + port)
})
