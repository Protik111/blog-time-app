const router = require('express').Router();
//model
const Profile = require('../models//Profile');
const User = require('../models//User');
//middleware
const auth = require('../middleware//auth');
const { body, validationResult } = require('express-validator');

//@route GET user/own
//@desc get own profile
//@access private
router.get('/own', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['name', 'profilePic']);

        if (!profile) {
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

//@route POST user/create
//@desc create and update profile
//@access private
router.post('/create', [
    auth,
    [
        body('bio', 'Biography is Required').not().isEmpty()
    ]
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { bio, company, website, location, youtube, twitter, instagram, facebook } = req.body;

    const profileProperty = {};
    profileProperty.user = req.user.id;
    if (bio) profileProperty.bio = bio;
    if (company) profileProperty.company = company;
    if (website) profileProperty.website = website;
    if (location) profileProperty.location = location;

    //for social
    profileProperty.social = {};
    if (youtube) profileProperty.social.youtube = youtube;
    if (twitter) profileProperty.social.twitter = twitter;
    if (instagram) profileProperty.social.instagram = instagram;
    if (facebook) profileProperty.social.facebook = facebook;

    try {
        let profile = await Profile.findOne({ user: req.user.id });
        // console.log(profile);

        if (profile) {
            profile = await Profile.findOneAndUpdate({ user: req.user.id }, { $set: profileProperty }, { new: true });
            console.log(profile);
            return res.json(profile);
        }

        profile = new Profile(profileProperty);
        await profile.save();
        res.json(profile);
    } catch (error) {
        res.status(500).json({ msg: 'Server Error' })
    }
})

module.exports = router;