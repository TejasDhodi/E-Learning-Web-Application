const User = require('../Model/UserRegistrationMode');
const bcryptjs = require('bcrypt');

const registerController = async (req, res) => {
    try {
        res.status(200).send('Register Controller')
    } catch (error) {
        console.log("Error while handling registration", error);
    }
}

const registerControllerPost = async (req, res) => {
    try {
        const { userName, emailId, password, cPassword } = req.body;
        const emailExist = await User.findOne({ emailId });

        // Check Wheather email exist or not
        if (!userName || !emailId || !password || !cPassword) {
            return res.status(400).json({msg: "All Fields are mandatory"})
        } else if(emailExist) {
            return res.status(400).json({ msg: "Email Already Exist" });
        } else if(password !== cPassword) {
            return res.status(400).json({ msg: "Password Does Not Match" });
        }

        // Hash Pass
        // const saltRound = 10;
        // const hashPassword = await bcryptjs.hash(password, saltRound)
        
        // Sending Dat ato Database
        const registeredUser = await User.create({
            userName,
            emailId,
            password,
            cPassword
        })

        res.status(201).json({
            "Registration Successfull": registeredUser,
            token: await registeredUser.generateToken(),
            userId: registeredUser._id.toString()
        });
    } catch (error) {
        console.log("Error while handling post registration", error);
    }
}

module.exports = { registerController, registerControllerPost };