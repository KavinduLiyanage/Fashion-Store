const express = require('express');
const productRoutes = express.Router();
const multer = require('multer');

// Product Model
let Product = require('../models/product.model');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`)
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.jpg' || ext !== '.png') {
            return cb(res.status(400).end('only jpg, png are allowed'), false);
        }
        cb(null, true)
    }
});

var upload = multer({storage: storage}).single("file");


// Defined upload image route
productRoutes.post("/uploadImage", (req, res) => {

    upload(req, res, err => {
        if (err) {
            return res.json({ success: false, err })
        }
        return res.json({ success: true, image: res.req.file.path, fileName: res.req.file.filename })
    })
});


// Defined store route
productRoutes.route('/add').post(function (req,res) {
    let product = new Product(req.body);
    product.save()
        .then(product => {
            res.status(200).json({'product': 'product is added successfully'})
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});


// Defined get product data to card view
productRoutes.post("/getProducts", (req, res) => {

    let findArgs = {};
    let term = req.body.searchTerm;

    for (let key in req.body.filters) {

        if (req.body.filters[key].length > 0) {
            if (key === "productPrice") {
                findArgs[key] = {
                    $gte: req.body.filters[key][0],
                    $lte: req.body.filters[key][1]
                }
            } else {
                findArgs[key] = req.body.filters[key];
            }
        }
    }

    if(term) {

        Product.find(findArgs)
            .find({"productName": {"$regex": term, "$options": "i"}})
            //.find({ $text: { $search: term } })
            .exec((err, products) => {
                if (err) return res.status(400).json({ success: false, err })
                res.status(200).json({ success: true, products})
            })

    } else {

        Product.find(findArgs)
            .exec((err, products) => {
                if (err) return res.status(400).json({ success: false, err })
                res.status(200).json({ success: true, products})
            })
    }
});


// Defined get data(index or listing) route
productRoutes.route('/').get(function (req,res) {
    Product.find(function (err, product) {
        if(err)
            console.log(err);
        else
            res.json(product);
    });
});


// Defined edit route
productRoutes.route('/edit/:id').get(function (req,res) {
    let id = req.params.id;
    Product.findById(id, function (err, product) {
        res.json(product);
    });
});


// Defined editDis route
productRoutes.route('/editDis/:id').get(function (req,res) {
    let id = req.params.id;
    Product.findById(id, function (err, product) {
        res.json(product);
    });
});


//  Defined update route
productRoutes.route('/update/:id').post(function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (!product)
            res.status(404).send("data is not found");
        else {
            product.productName = req.body.productName;
            product.productDes = req.body.productDes;
            product.productPrice = req.body.productPrice;
            product.images = req.body.images;
            product.productQnt = req.body.productQnt;
            product.productCategory = req.body.productCategory;
            product.productBranches = req.body.productBranches;

            product.save().then(product => {
                res.json('Update Complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update database");
                });
        }
    });
});


//  Defined discout route
productRoutes.route('/updateDis/:id').post(function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (!product)
            res.status(404).send("data is not found");
        else {
            product.productDiscount = req.body.productDiscount;

            product.save().then(product => {
                res.json('Update Discount Complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update database");
                });
        }
    });
});


//delete data
productRoutes.route('/delete/:id').get(function (req,res) {
    Product.findByIdAndRemove({_id: req.params.id}, function (err, product) {
        if (err)res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = productRoutes;
