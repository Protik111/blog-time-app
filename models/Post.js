const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: false
    },
    categories: {
        type: String,
        required: false
    },
}, { timestamps: true });

module.exports = mongoose.model('post', PostSchema);