var express = require('express');
var router = express.Router();
var nodemailer=require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/Enquiry', function(req, res, next) {
  res.render('Enquiry', { title: 'Express' });
});
router.get('/weapons', function(req, res, next) {
  res.render('weapons', { title: 'Express' });
});
router.get('/tutorial', function(req, res, next) {
  res.render('tutorial', { title: 'Express' });
});
router.get('/input_form', function(req, res, next) {
  res.render('input_form', { title: 'Express' });
});
module.exports = router;




router.post('/Enquiry', (req, res) => {
  const output = `
    <p>You have a  New Enquiry</p>
    <h3>Enquiry Details</h3>
    <ul>  
      <li>Full Name: ${req.body.name}</li>
      <li>Phone: ${req.body.phone}</li>
      <li>Email: ${req.body.email}</li>     
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'bpandey9876@gmail.com',
        pass: 'ruksaale'
       }, 
    // tls:{
    //   rejectUnauthorized:false
    // }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: 'bpandey9876@gmail.com', // sender address
      to: 'bpandey9876@gmail.com', // list of receivers
      subject: 'New Enquiry', // Subject line
      text: 'From Brandzia Website', // plain text body
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      res.send(`<head><link rel="icon" type="image/x-icon" href="images/CSGO.png" /><link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"></head><body style="background-color:black;overflow-X:hidden ;font-family: 'Raleway', sans-serif;">
      	<div style="background-image:url(../images/enq2.png); background-size:100%;height:300px;background-repeat:no-repeat;"></div>
      	<div style="position:relative; overflow-X:hidden ; width : 100%;  height:5rem; text-align:center; font-size:2rem;top:0%;transform:translateY(-50%); color:#FFF">
      		Your Response Has Been Recorded. 
      	</div>
      	</body>`); 
  });
});
