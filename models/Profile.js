const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    bio: {
        type: String
    },
    company: {
        type: String
    },
    website: {
        type: String
    },
    location: {
        type: String
    },
    exprience: [
        {
            title: {
                type: String,
                required: true
            },
            company: {
                type: String,
                require: true
            },
            desciption: {
                type: String
            },
            location: {
                type: String
            },
            from: {
                type: Date,
                required: true
            },
            to: {
                type: Date
            },
            current: {
                type: Boolean,
                default: false
            }
        }
    ],
    social: {
        youtube: {
            type: String
        },
        twitter: {
            type: String
        },
        instagram: {
            type: String
        },
        facebook: {
            type: String
        }
    }
});

module.exports = mongoose.model('profile', ProfileSchema);