const Posts = require("../models/posts-model");

const findPost = (query) => Posts.find(query).populate('author', 'username -_id');
const findById = (_id) => Posts.findById(_id).populate('author', 'username -_id');
const createPost = (query) => Posts.create(query);
const removePost = (_id) => Posts.findOneAndDelete({ _id });
const editPost = (_id, body) => Posts.findOneAndUpdate({ _id }, body);

module.exports = {
    findPost, createPost, findById, removePost, editPost
}
