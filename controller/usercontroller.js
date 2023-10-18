var nodemailer = require('nodemailer');


var usermodel = require('../model/usermodel');
var otp = ""
exports.insert = async (req, res) => {
    otp = Math.floor(1000 + Math.random() * 8000)

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'pvt68868@gmail.com',
            pass: 'ilzguiymmcolerix'
        }
    });

    var mailOptions = {
        from: 'pvt68868@gmail.com',
        to: req.body.email,
        subject: 'Hyy' + req.body.name,
        text: otp.toString()
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    // var data = await usermodel.create(req.body);
    res.status(200).json({
        status: "Send  Successfully ",
        otp
    })
}

exports.getdata = async (req, res) => {
    var data = await usermodel.find()
    res.status(200).json({
        status: "successfully otp send",
        data,
        otp
    })
}



