const express = require('express');
const router = express.Router();
//model
const Post = require('../models/Post');
const Profile = require('../models/Profile');
const { body, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const User = require('../models/User');


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
    const category = req.query.categories;
    try {
        if (category) {
            const posts = await Post.find({ categories: category });
            res.send(posts);
        } else {
            const posts = await Post.find({});
            res.send(posts);
        }

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ msg: 'Server Error' })
    }
});

//@route /like/:like
//@desc posting a love react of a post
//access private
router.put('/love/:postId', auth, async (req, res) => {
    try {
        const postId = req.params.postId;
        const post = await Post.findById(postId);
        if (post.loves.some(love => love.user.toString() === req.user.id)) {
            return res.status(400).json({ msg: 'Already Loved' })
        }
        post.loves.unshift({ user: req.user.id });

        await post.save();
        return res.json(post.loves);

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            msg: 'Server Error'
        })
    }
});

//@route /unlove/:postId
//@desc doing unlove react for a post
//access private
router.put('/unlove/:postId', auth, async (req, res) => {
    try {
        const postId = req.params.postId;
        const post = await Post.findById(postId);
        if (!post.loves.some(love => love.user.toString() === req.user.id)) {
            return res.status(400).json({ msg: 'Post Has Not Been loved' })
        }
        post.loves = post.loves.filter(love => love.user.toString() !== req.user.id);
        await post.save();
        return res.json(post.loves);

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            msg: 'Server Error'
        })
    }
})

//@route /comment/:postId
//@desc adding route to the post
//@access private
router.put('/comment/:postId', [auth, [
    body('text', 'Comment is Required').notEmpty()
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    };

    try {
        const postId = req.params.postId;
        const user = await User.findById(req.user.id).select('-password');
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(400).json({ msg: 'Post Not Found' })
        };

        const newComment = {
            user: req.user.id,
            text: req.body.text,
            name: user.name,
            avatar: user.avatar
        }
        post.comments.unshift(newComment);
        await post.save();

        const allPosts = await Post.find({});

        res.json(allPosts);

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            msg: 'Server Error'
        })
    }
});
//@route /comment/:postId
//@desc adding route to the post
//@access private
router.delete('/deletecomment/:postId/:commentId', auth, async(req, res) => {
    try {
        const postId = req.params.postId;
        const commentId = req.params.commentId;
        const post = await Post.findById(postId);

        if(!post){
            return res.status(400).json({ msg: 'Post Not Found' });
        }

        const comment = post.comments.find(comment => comment.id === commentId);
        if(!comment){
            return res.status(400).json({ msg: 'Comment Not Found' });
        }

        //user check
        if(comment.user.toString() !== req.user.id){
            return res.status(400).json({ msg: 'User Not Authorized' })
        };

        post.comments = post.comments.filter(comment => comment.id !== commentId);
        await post.save();
        const allPosts = await Post.find({});
        res.json(allPosts);

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            msg: 'Server Error'
        })
    }
})

module.exports = router;