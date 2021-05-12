// Models
const Comment = require('../../models/comments/comment')
const Post = require('../../models/post/post')

const commentOnPost = async (req, res) => {

    const {postID, userID} = req.params
    const {comment} = req.body

    try {

        const newComment = await new Comment({
            comment,
            commentBy: userID,
            commentedOn: postID
        })

        await Post.findOneAndUpdate({_id: postID}, {
            $addToSet: {
                comments: newComment
            }
        })

        await newComment.save()

        return res.json({
            msg: 'Comment Success',
            data: newComment
        })
        
    } catch (err) {
        console.log(err)
    }

}

module.exports = {commentOnPost}