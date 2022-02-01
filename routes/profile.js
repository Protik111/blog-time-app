const router = require('express').Router();
//model
const Profile = require('../models//Profile');
const User = require('../models//User');
const Post = require('../models/Post');
//middleware
const auth = require('../middleware//auth');
const { body, validationResult } = require('express-validator');
// const { route } = require('../app/app');

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
            // console.log(profile);
            return res.json(profile);
        }

        profile = new Profile(profileProperty);
        await profile.save();
        res.json(profile);
    } catch (error) {
        res.status(500).json({ msg: 'Server Error' })
    }
});


//@route GET /allprofile
//@desc get all profiles
//@access public
router.get('/allprofile', async (_req, res) => {
    try {
        const profiles = await Profile.find().populate('user', ['name', 'profilePic']);
        if (!profiles) {
            res.status(400).json({ msg: 'Users Not Found' })
        }
        res.send(profiles)

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: 'Server Error' })
    }
});

//@route GET /user/:user_id
//@desc get user by id
//@access public
router.get('/:user_id', async (req, res) => {
    try {
        const user = await Profile.find({ user: req.params.user_id }).populate('user', ['name', 'profilePic']);
        if (!user) {
            return res.status(400).json({ msg: 'Users Not Found' })
        }
        res.send(user)

    } catch (error) {
        console.log(error.message);
        if (error.kind === 'ObjectId') {
            return res.status(400).json({ msg: 'Users Not Found' })
        }
        res.status(500).json({ msg: 'Server Error' })
    }
})

//@route DELETE /delete
//@desc delete user and profile
//@access private
router.delete('/delete', auth, async (req, res) => {
    try {
        //delete profile
        await Profile.findOneAndDelete({ user: req.user.id });
        //delete user
        await User.findOneAndDelete({ _id: req.user.id });
        //delete post
        await Post.findOneAndDelete({ user: req.user.id});
        res.status(200).json({ msg: 'User Deleted' })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: 'Server Error' })
    }
});


//@route PUT /experience
//@desc add experience
//@access private
router.put('/experience', [auth,
    body('title', 'Title is Required').not().isEmpty(),
    body('company', 'Company is Required').not().isEmpty(),
    body('from', 'From Date is Required').not().isEmpty()
    ], async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() })
        };

        const { title, company, desciption, location, from, current } = req.body;

        const newExperience = { title, company, desciption, location, from, current };

        try {
            const profile = await Profile.findOne({ user: req.user.id });
            profile.experience.unshift(newExperience);
            await profile.save();
            res.send(profile);

        } catch (error) {
            console.log(error.message);
            res.status(500).json({msg: 'Server Error'})
        }
    });


//@route delete /experience
//@desc delete experience
//@access private
router.delete('/experience/:exp_id', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id });
        const removeIndex = profile.experience.map(exp => exp.id).indexOf(req.params.exp_id);
        profile.experience.splice(removeIndex, 1);

        await profile.save();
        res.send(profile)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({msg: 'Server Error'})
    }
});

module.exports = router;