require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 8000
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

mongoose.connect(`${process.env.MONGO}`,{useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false})

const RootRouter = require('./routes/root/root')
const UserRouter = require('./routes/user/user')
const PostRouter = require('./routes/post/post') 
const CommentRouter = require('./routes/comment/comment')

app.use(RootRouter)
app.use(UserRouter)
app.use(PostRouter)
app.use(CommentRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})