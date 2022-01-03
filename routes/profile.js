const router = require('express').Router();
//model
const Profile = require('../models//Profile');
const User = require('../models//User');
//middleware
const auth = require('../middleware//auth');

//@route GET user/me
//@desc get own profile
//@access private
router.get('/own', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['name', 'profilePic']);

        if(!profile){
           return res.status(400).json({ msg: 'There is no profile' })
        }

        res.send(profile);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            msg: 'Server Error'
        })
    }
});

module.exports = router;