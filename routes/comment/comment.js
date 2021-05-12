const express = require('express')
const router = express.Router()

// Controllers
const { commentOnPost } = require('../../controllers/comment/comment')

router.post('/commentonpost/:userID/:postID', commentOnPost)

module.exports = router