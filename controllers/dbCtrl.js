
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
    db.add_paymentdl([req.body.sender, req.body.amount, req.body.description], function(err, response) {
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
  }
}
