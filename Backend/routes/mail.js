import {email,password} from "../config";
const nodemailer = require("nodemailer");
const router = require('express').Router();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass: password
    },
    tls: {
        rejectUnauthorized: false
    },
});

router.route('/').post((req, res) => {
    transporter.sendMail({
        from: email,
        to: req.body.email,
        subject: 'Your Fashion Store Account is created',
        text: `Hello, ` + req.body.firstName + ` Fashion Store account has been created as Store Manager
        
                User Below informations to access your Account
                
                Username: ` + req.body.username +`
                Email: ` + req.body.email +`
                Password: ` + req.body.password +`
                
                Thank You`
    }, function(error, info){
        if (error) {
            res.status(404)
            res.json(error);
        } else {
            res.json('Email sent: ' + info.response);
        }
    });
});

module.exports = router;