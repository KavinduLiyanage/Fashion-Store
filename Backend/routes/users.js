const router = require('express').Router();
let User = require('../models/users.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//@route POST
//@desc Validate Login
router.route('/').post((req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({ email })
        .then(user => {
            if(!user) return res.status(400).json({ msg: "User Not Exsists"});

            //decrypt password using bvrypt
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(!isMatch) return res.status(400).json({ msg: "Invalid Credential"});
                    jwt.sign(
                        { id: user.id},
                        process.env.jwtSecret,
                        {expiresIn: 36000},
                        (err, token) => {
                            if(err) throw err;
                            res.json({
                                token,
                                user: {
                                    id: user.id,
                                    firstName: user.firstName,
                                    lastName: user.lastName,
                                    username: user.username,
                                    email: user.email,
                                    phoneNo: user.phoneNo,
                                    address: user.address,
                                    gender: user.gender,
                                    type: user.type
                                }
                            });
                        }
                    )
                })

        })


});

//@route GET
//@desc Get all users data (Password is encrypted)
router.route('/').get((req, res) => {
    User.find()
        .then(category => res.json(category))
        .catch(err => res.status(400).json('Error: ' + err));
});

//@route POST
//@desc Add new User
router.route('/add').post((req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const username = req.body.username;
    const email = req.body.email;
    const phoneNo = req.body.phoneNo;
    const password = req.body.password;
    const address = req.body.address;
    const gender = req.body.gender;
    const type = req.body.type;

    const newUser = new User({
        firstName,
        lastName,
        username,
        email,
        phoneNo,
        password,
        address,
        gender,
        type
    });

    //password encryption using bcrypt
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save()
                .then(() => res.json('User added!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
    })
});

//@route GET
//@desc Get Specific Category Using ID
router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

//@route DELETE
//@desc Delete specific user using ID
router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//@route POST
//@desc Update specific User using ID
router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
        .then(users => {
            users.firstName = req.body.firstName;
            users.lastName = req.body.lastName;
            users.username = req.body.username;
            users.email = req.body.email;
            users.phoneNo = req.body.phoneNo;
            users.password = req.body.password;
            users.address = req.body.address;
            users.gender = req.body.gender;
            users.type = req.body.type;

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(users.password, salt, (err, hash) => {
                    if (err) throw err;
                    users.password = hash;
                    users.save()
                        .then(() => res.json('User Updated!'))
                        .catch(err => res.status(400).json('Error: ' + err));
                })
            })
        });
});

//Export User Route
module.exports = router;