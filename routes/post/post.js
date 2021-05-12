const express = require('express')
const router = express.Router()

// Controllers
const { createPost, allPosts } = require('../../controllers/post/post')

router.post('/createpost/:userID', createPost )
router.get('/allposts', allPosts)

module.exports = router