const express = require('express');
const wishListRoutes = express.Router();

let WishList = require('../models/wishlist.model');


wishListRoutes.route('/addWishItem').post(function (req,res) {

    let product = new WishList(req.body);

    product.save()
        .then(product=> {

            res.status(200).json({

                'product': 'product is added to wish list successfully'
            });

        })
        .catch(err=>{

            res.status(400).send("unable to save to database");
        });


});

//get data

wishListRoutes.route('/getAllDetails').get(function (req,res) {

    WishList.find(function (err,wish) {

        if(err)

            console.log(err);

        else
            res.json(wish);
    });

});

//get details by id

wishListRoutes.route('/wishListDetails/:id').get(function (req,res) {

    let id = req.params.id;
    WishList.find({'wish_cid':id}, function(err,wish){

        if(err)

            console.log(err);

        else
            res.json(wish);
    });
});

wishListRoutes.route('/deleteItem/:cid/:pid').delete(function (req,res) {

    let cusid = req.params.cid;
    let pid = req.params.pid;

    WishList.deleteOne({'wish_cid':cusid,'wish_pid':pid }, function(err,wish){

        if(err)

            console.log(err);

        else
            res.json(wish);

    });

});

wishListRoutes.route('/wishListDetails/:id/pid').get(function (req,res) {

    let id = req.params.id;
    let pid = req.params.pid;
    WishList.find({'wish_cid':id, 'wish_pid':pid}, function(err,wish){

        if(err)

            console.log(err);

        else
            res.json(wish);
    });
});

module.exports =  wishListRoutes;



