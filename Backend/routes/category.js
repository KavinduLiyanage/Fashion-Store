const router = require('express').Router();
let Category = require('../models/category.model');

//@route GET
//@desc Get All Category
router.route('/').get((req, res) => {
    Category.find()
        .then(category => res.json(category))
        .catch(err => res.status(400).json('Error: ' + err));
});

//@route POST
//@desc Add New Category
router.route('/add').post((req, res) => {
    const categoryName = req.body.categoryName;

    const newCategory = new Category({
        categoryName
    });

    newCategory.save()
        .then(() => res.json('Category added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//@route GET
//@desc Get Specific Category Using ID
router.route('/:id').get((req, res) => {
    Category.findById(req.params.id)
        .then(category => res.json(category))
        .catch(err => res.status(400).json('Error: ' + err));
});

//@route DELETE
//@desc Delete Specific category Using ID
router.route('/:id').delete((req, res) => {
    Category.findByIdAndDelete(req.params.id)
        .then(() => res.json('Category deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//@route GET
//@desc Filter Category Name by Given Name
router.route('/find/:name').get((req, res) => {
    Category.find({'categoryName': {'$regex': req.params.name}})
        .then(category => res.json(category))
        .catch(err => res.status(400).json('Error: ' + err));
})

//@route POST
//@desc Update Category by using specific ID
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

//Export Route
module.exports = router;