const express = require('express');
const router = express.Router();
//model
const Post = require('../models/Post');
const Profile = require('../models/Profile');
const { body, validationResult } = require('express-validator');
const auth = require('../middleware/auth');


//@route POST /createpost
//@desc create a post
//@access private
router.post('/createpost', [auth, [
    body('title', 'Title is Required and should be Unique').isAlpha().notEmpty(),
    body('description', 'Description is Required').notEmpty(),
]], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    };

    const { title, description, photo, categories } = req.body;
    const postData = {};
    postData.user = req.user.id;
    if(title) postData.title = title;
    if(description) postData.description = description;
    if(photo) postData.photo = photo;
    if(categories) postData.categories = categories;

    try {
        const user = await Profile.findOne({ user: req.user.id });
        if(!user){
            return res.json(400).json({msg : 'Profile Not Found'});
        }

        const newPost = new Post(postData);
        newPost.save();
        res.send(newPost);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({msg: 'Server Error'})
    }
});

module.exports = router;