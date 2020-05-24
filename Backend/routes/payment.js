const express = require("express");
const paymentRoutes = express.Router();

let Payment = require("../models/payment.model");

paymentRoutes.route("/add").post(function (req, res) {
  let payment = new Payment(req.body);

  payment
    .save()
    .then((payment) => {
      res.status(200).json({
        Payment: "Payment added successfully",
      });
    })
    .catch((err) => {
      res.status(400).send("Unable to save to database");
    });
});

//get data
paymentRoutes.route("/getDetails").get(function (req, res) {
  Payment.find(function (err, payment) {
    if (err) console.log(err);
    else res.json(payment);
  });
});

//get details by id
paymentRoutes.route("/PaymentDetails/:id").get(function (req, res) {
  let id = req.params.id;
  Payment.findById(id, function (err, payment) {
    if (err) console.log(err);
    else res.json(payment);
  });
});

module.exports = paymentRoutes;
