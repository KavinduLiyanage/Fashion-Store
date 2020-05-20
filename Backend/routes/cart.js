const express = require('express');
const cartRoutes = express.Router();

let Cart = require('../models/cart.model');

cartRoutes.route('/add').post(function (req,res) {
    let cart = new Cart(req.body);

    cart.save()
        .then(cart=> {
            res.status(200).json({
                'cart': 'cart added successfully'
            });
        }).catch(err=> {
        res.status(400).send("Unable to save to database");
    });
});

//get data
cartRoutes.route('/getDetails').get(function (req,res) {
    Cart.find(function(err,cart) {
        if(err)
            console.log(err);
        else
            res.json(cart);
    });
});

//get details by id
cartRoutes.route('/cartDetails/:id').get(function (req,res) {
    let id = req.params.id;
    Cart.find({'user_id':id},function (err,cart) {
        if(err)
            console.log(err);
        else
            res.json(cart);
    });
});

cartRoutes.route('/delete/:uid/:pid').delete(function (req,res) {
    let uid = req.params.uid;
    let pid = req.params.pid;

    Cart.deleteOne({'user_id':uid,'product_id':pid},function (err,cart) {
        if(err)
            console.log(err);
        else
            res.json(cart);
    });
});

module.exports = cartRoutes;