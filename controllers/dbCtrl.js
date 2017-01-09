
var app = require('../server.js');
var db = app.get("db");

module.exports = {
  getUser: function(username, password, done) {
    db.login([username, password], function(err, user) {
      if(!err) {
        return done(null, user);
      }
      else {
        console.log("heyy")
        return err;

      }
    })
  },
  getPayments: function(req, res) {
    db.get_payments(function(err, payments) {
      if (!err) {
        res.status(200).send(payments)
      } else {
        res.status(422).send(res)
        console.log(res)
      }
    })
  },
  addPayment: function(req, res) {
    if(req.body.date !== undefined) {
      db.add_payment([req.body.sender, req.body.amount, req.body.date, req.body.description], function(err, response) {
      if(!err) {
        db.get_payments(function(err, payments) {
          res.status(200).send(payments)
        })
      } else {
        res.status(422).send(err)
      }
    })
  } else {
    db.add_paymentdl([req.body.sender, req.body.amount, req.body.description, req.body.email], function(err, response) {
      if(!err) {
        db.get_payments(function(err, payments) {
          res.status(200).send(payments)
        })
      } else {
        res.status(422).send(err)
      }
    })
  }
  },
  addPaymentFromStripe: function(req, res) {
    db.add_paymentdl([req.body.sender, req.body.amount, req.body.description, req.body.email, req.body.stripeToken], function(err, response) {
      if(!err) {
        res.status(200).send()
        } else {
        res.status(422).send(err)
      }
    })
  },
  addToken: function(req, res) {
      db.add_token([req.body.email, req.body.stripeToken], function(err, response) {
        if(!err) {
          res.status(200).send();
        }
        else {
          console.log(err)
        }
      })
    },
  deletePayment: function(req, res) {
    db.delete_payment([req.params.id], function(err, response) {
      if(!err) {
        db.get_payments(function(err, payments) {
          res.status(200).send(payments)
        })
      } else {
        res.status(422).send(err)
      }
    })
  },
  getAuth: function(req, res, next) {
    console.log("server getting auth");
    if(!req.user) {
      res.status(401).send('please login');
      return;
    }
    if(req.user.id !== 1 && req.user.id !== 2) {
      res.status(403).send('Unauthorized');
      return;
    }
    res.status(200).send('');
  }
}
