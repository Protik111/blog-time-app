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
    body('title', 'Title is Required and should be Unique').notEmpty(),
    body('description', 'Description is Required').notEmpty(),
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    };

    // let title = await Post.findOne({ title });
    //         if (title) {
    //             res.status(400).json({ errors: [{ msg: 'Title Already Exists' }] })
    //         }

    try {
        const postData = new Post({
            user: req.user.id,
            title: req.body.title,
            description: req.body.description,
            photo: req.body.photo,
            categories: req.body.categories
        });

        const user = await Profile.findOne({ user: req.user.id });
        if (!user) {
            return res.json(400).json({ msg: 'Invalid Credential' });
        }
        const post = await postData.save();
        res.send(post);

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ msg: 'Server Error' })
    }
});

//@route PUT /updatepost
//@desc update a post
//@access private
router.put('/updatepost/:post_id', [auth, [
    body('title', 'Title is Required and should be Unique').notEmpty(),
    body('description', 'Description is Required').notEmpty(),
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    };
    
    const postId = req.params.post_id;
    try {
        const user = await Profile.findOne({ user: req.user.id });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid User' })
        }

        const post = await Post.findById(postId);
        if (!post) {
            return res.status(400).json({ msg: 'Post Not Found' })
        }
        const updatedPost = await Post.findByIdAndUpdate(postId, { $set: req.body }, { new: true });
        res.send(updatedPost)

    } catch (error) {
        console.log(error.message);
        if (error.kind === 'ObjectId') {
            return res.status(400).json({ msg: 'Post Not Found' })
        }
        return res.status(500).json({ msg: 'Server Error' })
    }
})

//@route DELETE /deletepost
//@desc deleting a post
//@access private
router.delete('/deletepost/:post_id', auth, async (req, res) => {
    const postId = req.params.post_id;
    try {
        const user = await Profile.findOne({ user: req.user.id });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid User' })
        }

        const post = await Post.findByIdAndDelete(postId);
        if (!post) {
            return res.status(400).json({ msg: 'Post not Found' });
        }
        res.status(200).json({ msg: 'Post Deleted Successfully' });

    } catch (error) {
        console.log(error.message);
        if (error.kind === 'ObjectId') {
            return res.status(400).json({ msg: 'Post Not Found' })
        }
        return res.status(500).json({ msg: 'Server Error' })
    }
});

//@route GET /showallposts
//@desc showing all posts of the user
//@access private
router.get('/showallpost', auth, async (req, res) => {
    try {
        // const user = await Profile.findOne({user: req.user.id});
        // if(!user){
        //     return res.status(400).json({ msg: 'Invalid User' })
        // }

        const allPosts = await Post.find({ user: req.user.id });
        res.send(allPosts)
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ msg: 'Server Error' })
    }
})

//@route GET /allposts
//@desc showing all posts from post collenction
//@access public
router.get('/allposts', async (req, res) => {
    try {
        const posts = await Post.find({});
        res.send(posts);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ msg: 'Server Error' })
    }
})

module.exports = router;