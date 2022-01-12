const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    photo: {
        type: String,
    },
    tags: {
        type: Array,
    },
    body: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: true
    },
}, { timestamps: true }
);


const Posts = mongoose.model('Post', postSchema);

module.exports = Posts;