const express = require("express");
const productDetailsRoutes = express.Router();

let Product = require("../models/product.model");

/*productDetailsRoutes.route('/add').post(function (req,res) {

    let product = new Product(req.body);

    product.save()
        .then(product=> {

            res.status(200).json({

                'product': 'product is added successfully'
            });

        })
        .catch(err=>{

            res.status(400).send("unable to save to databse");
        });


});

 */

//get data

productDetailsRoutes.route("/getDetails").get(function (req, res) {
  Product.find(function (err, product) {
    if (err) console.log(err);
    else res.json(product);
  });
});

//get details by id

productDetailsRoutes.route("/productDetails/:id").get(function (req, res) {
  let id = req.params.id;
  Product.findById(id, function (err, product) {
    if (err) console.log(err);
    else res.json(product);
  });
});

module.exports = productDetailsRoutes;
