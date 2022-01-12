const express = require("express");

const router = express.Router();

const { findPost, findById, createPost, removePost, editPost } = require('../controllers/cont-posts');
const auth = require("../middleware/auth");

//get all posts
router.get('/', (req, res, next) => {
    findPost({}).then(doc => res.json(doc)).catch(err => console.log(err));
});

//get aPost By ID
router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    const post = await findById(id);
    console.log(post);
    res.json(post)
});



//post a new post
router.post('/', (req, res, next) => {
    userId = req.user.id;
    const post = { ...req.body, author: userId };
    console.log(post);
    createPost(post).then(doc => res.json(doc)).catch(err => next(err));
});


// Patch
router.patch('/:id', (req, res, next) => {
    const post = req.body;
    const id = req.params.id;
    editPost(id, post).then(doc => res.json("Post Updated")).catch(err => next(err));
});


//Delete
router.delete('/:id', async (req, res, next) => {
    const id = req.params.id;
    await removePost(id);
    res.json("Post Deleted");
});


module.exports = router;