// Models
const User = require('../../models/user/user')

const newUser = async (req, res) => {

    try {

        const {name, email, password} = req.body

        const newUser = await new User({
            name,
            email,
            password
        })

        await newUser.save()

        res.json({
            msg: 'Register Successfully',
            data: newUser
        })
        
    } catch (err) {
        console.log(err)
    }

}

const loginUser = async (req, res) => {

    const {email, password} = req.body

    try {

        const loggingInUser = await User.findOne({email})

        if (loggingInUser.password === password) {
            return res.json({
                msg: 'Login Success',
                data: loggingInUser
            })
        } else {
            return res.json({
                msg: 'Invalid Email/Password'
            })
        }
        
    } catch (err) {
        console.log(err)
    }

}

module.exports = {newUser, loginUser}