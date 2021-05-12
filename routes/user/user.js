const express = require('express')
const router = express.Router()

// Controllers
const {newUser, loginUser} = require('../../controllers/user/user')

router.post('/register', newUser)
router.post('/login', loginUser)

module.exports = router