
var app = require('../server.js');
var db = app.get("db");

module.exports = {
  // login: function(req,res) {
  //   db.login([req.body.email, req.body.password], function(err, response) {
  //     if(!err) {
  //
  //     }
  //   })
  // }
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
    db.add_payment([req.body.sender, req.body.amount, req.body.description], function(err, response) {
      if(!err) {
        db.get_payments(function(err, payments) {
          res.status(200).send(payments)
        })
      } else {
        res.status(422).send(err)
      }
    })
  },
  deletePayment: function(req, res) {
    db.delete_payment([req.body.id], function(err, response) {
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
