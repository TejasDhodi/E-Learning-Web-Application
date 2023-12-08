const mongoose = require('mongoose');
const {model, Schema} = mongoose;
const bcryptjs = require('bcrypt');
const jwt = require('jsonwebtoken');

const userRegistrationSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    emailId: {
        type: String,
        required: true,
        // unique: true
    },
    password: {
        type: String,
        required:true,
    },
    cPassword: {
        type: String,
        required:true,
    },
}, 
{timestamps: true});


// Password Hashing
userRegistrationSchema.pre('save', async function(next){
    const user = this;
    if (!user.isModified('password')) {
        next();
    }

    try {
        const saltRound = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(user.password, saltRound);
        const hashCPassword = await bcryptjs.hash(user.cPassword, saltRound)
        user.password = hashPassword;
        user.cPassword = hashCPassword;
    } catch (error) {
        next(error)
    }
});

// Json Web Token
userRegistrationSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            emailId: this.emailId
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: '30d'
        });
    } catch (error) {
        console.log(error);
    }
}

const User = model('userRegistration', userRegistrationSchema);
module.exports = User;