var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var nodeMailer = require('nodeMailer');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var massive = require('massive');
var config = require('./config.js');
var stripe = require('stripe')("sk_test_Yw5UZOvYBDIxIjTTc2CwTEsZ");
var smtpTransport = require('nodemailer-smtp-transport');
var conn = massive.connectSync({
    connectionString: process.env.DATABASE_URL
})

// stripe.setPublishableKey('pk_test_kVcN290woepedGKOFhaRWZyp');

var cors = require('cors');

var port = process.env.PORT || 8000;

var app = module.exports = express();

app.set("db", conn);
var db = app.get("db");
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(session({ secret: config.sessionSecret }));
app.use(passport.initialize());
app.use(passport.session());



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
app.post('/stripe', function(request, response) {

  var token = request.body.stripeToken;
    console.log(request.body.amount)

    stripe.charges.create({
    amount: request.body.amount * 100,
    currency: "usd",
    source: token,
    description: request.body.description
  }, function(err, charge) {
    if (err && err.type === 'StripeCardError') {
      console.log(err)
    }
    else if(err){
      console.log(err);
      response.send(err)
    }
    if(!err) {
      dbCtrl.addPaymentFromStripe(request,response)
      setTimeout(function() {
        dbCtrl.addToken(request, response)
      }, 500)
    }
    response.redirect('/#!/thanks');
  })
  // const stripeToken = req.body.stripeToken;
  // const productID = parseInt(req.body.productID);
  // const productAmount = req.body.productAmount;
  // const userID = parseInt(req.user.id);
  // // validate product
  // return routeHelpers.validateProduct(productID, productAmount)
  // .then((product) => {
  //   // create charge
  //   const charge = {
  //     amount: productAmount * 100,
  //     currency: product.currency,
  //     card: stripeToken
  //   };
  //   routeHelpers.createCharge(charge, productID, userID);
  // })
  // .then(() => {
  //   req.flash('messages', {
  //     status: 'success',
  //     value: `Thanks for purchasing a ${req.body.productName}!`
  //   });
  //   res.redirect('/products');
  // })
  // .catch((err) => {
  //   return next(err);
  // });
});


app.get('/userauth', dbCtrl.getAuth);;

app.listen(port, function() {
  console.log('listening on ' + port)
})
