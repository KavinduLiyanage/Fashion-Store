const router = require('express').Router();
let Category = require('../models/category.model');

router.route('/').get((req, res) => {
    Category.find()
        .then(category => res.json(category))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const categoryName = req.body.categoryName;

    const newCategory = new Category({
        categoryName
    });

    newCategory.save()
        .then(() => res.json('Category added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Category.findById(req.params.id)
        .then(category => res.json(category))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Category.findByIdAndDelete(req.params.id)
        .then(() => res.json('Category deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/find/:name').post((req, res) => {
    Category.find({'categoryName': {'$regex': req.params.name}})
        .then(category => res.json(category))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/update/:id').post((req, res) => {
    console.log(req.params.categoryName);
    Category.findById(req.params.id)
        .then(category => {
            category.categoryName = req.body.categoryName;

            category.save()
                .then(() => res.json('Category updated!'))
                .catch(err => {
                    console.log(err);
                    res.status(400).json('Error: ' + err)});
        })
        .catch(err => {
            console.log(err);
            res.status(400).json('Error: ' + err)});
});

module.exports = router;