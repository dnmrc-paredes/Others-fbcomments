// Models
const Post = require('../../models/post/post')

const createPost = async (req, res) => {
    
    const {userID} = req.params
    const {content} = req.body

    try {

        const newPost = await new Post({
            content,
            createdBy: userID
        })

        await newPost.save()

        res.json({
            msg: "Post Created!",
            data: newPost
        })
        
    } catch (err) {
        console.log(err)
    }

}

const allPosts = async (req, res) => {

    try {

        const allPosts = await Post.find({}).populate('comments')

        res.json({
            data: allPosts
        })
        
    } catch (err) {
        console.log(err)
    }

}

module.exports = {
    createPost,
    allPosts
}