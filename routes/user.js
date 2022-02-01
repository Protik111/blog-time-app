require('dotenv').config('../.env');
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const gravatar = require('gravatar');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const auth = require('../middleware/auth');

//@route POST /register
//@desc Register User
//@access Public
router.post('/register',
    body('name', 'Name is Required').notEmpty(),
    body('email', 'PLease Enter a Valid Email').isEmail(),
    body('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { name, email, password } = req.body;

        try {

            //see if user exists
            let user = await User.findOne({ email });
            if (user) {
                res.status(400).json({ errors: [{ msg: 'User Already Exists' }] })
            }

            //get users gravatar
            const profilePic = gravatar.url(email, { s: '200', r: 'pg', d: '404' });
            const newUser = new User({
                name,
                email,
                password,
                profilePic,
            });

            //encrypt password
            const saltRounds = 10
            const salt = await bcrypt.genSalt(saltRounds);
            newUser.password = await bcrypt.hash(password, salt);
            await newUser.save();

            //return jsonwebtoken
            const payload = {
                user: {
                    id: newUser.id
                }
            };

            jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 36000 }, (err, token) => {
                res.status(200).json({ token });
            });

        } catch (error) {
            console.log(error.message);
            res.status(500).json({ msg: 'Server Error' })
        }

    });

//@route GET /specific user
//@desc getting a user by a post
//@access public
router.get('/postby/:user_id', async (req, res) => {
    const userId = req.params.user_id;
    try {
        const user = await User.find({ _id : userId}).select('-password -email -_id -createdAt -updatedAt');
        res.send(user);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ msg: 'Server Error' })
    }
});


//@route GET /commentcommentusers/:user_id
//@desc get comment user by id
//@access public
// router.get('/commentusers/:user_id', async (req, res) => {
//     const userId = req.params.user_id;
//     try {
//         const user = await User.findById(userId).select('name');
//         if (!user) {
//             return res.status(400).json({ msg: 'Users Not Found' })
//         }
//         res.send(user)

//     } catch (error) {
//         console.log(error.message);
//         if (error.kind === 'ObjectId') {
//             return res.status(400).json({ msg: 'Users Not Found' })
//         }
//         res.status(500).json({ msg: 'Server Error' })
//     }
// })

module.exports = router;