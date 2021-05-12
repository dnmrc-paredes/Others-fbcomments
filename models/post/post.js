const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    content: String,
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'comment'
    }]
})

const Post = new mongoose.model('post', postSchema)
module.exports = Post