const User = require('../Model/UserRegistrationMode');
const bcryptjs = require('bcrypt');

const loginController = async (req, res) => {
    try {
        const { emailId, password } = req.body;
        const emailExist = await User.findOne({ emailId });

        // Check Wheather email exist or not
        if (!emailExist) {
            return res.status(400).json({ msg: "Invalid Cradentials" });
        }

        // Check to compare password with email
        const checkPassword = await bcryptjs.compare(password, emailExist.password);

        if (checkPassword) {
            return res.status(200).json({
                msg: "Login Successfull",
                token: await emailExist.generateToken(),
                userId: emailExist._id.toString()
            })
        } else {
            res.status(401).json({ msg: "Invalid Credentials" });
        }
        
    } catch (error) {
        res.status(400).send({"Error while handling login": error})
    }
}


module.exports = loginController;