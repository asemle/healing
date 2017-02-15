var nodeMailer = require('nodemailer');

var smtpTransport = require('nodemailer-smtp-transport');


module.exports = function mailSend(req, res) {
  var mailOpts;
  var options = {
    service: 'gmail',
    auth: {
        user: process.env.user,
        pass: process.env.password
    }
  };
  var transporter = nodeMailer.createTransport(smtpTransport(options))
  //Mail options
  mailOpts = {
      from: '<'+req.body.email+'>',
      to: 'lisasemle@gmail.com',
      subject: req.body.name + " contacted you from HealingwithLisa",
      html: '<p>' + req.body.message + '</p>' + '<p>' + req.body.name + '</p>' + '<b>' + req.body.email + '</b>',
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
}
