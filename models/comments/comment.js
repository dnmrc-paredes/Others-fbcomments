const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    comment: String,
    commentBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    commentedOn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
    }
})

const Comment = new mongoose.model('comment', commentSchema)
module.exports = Comment
