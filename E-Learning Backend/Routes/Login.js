const express = require('express');
const router = express.Router();
const loginController = require('../Controller/Login.controller');
const LoginSchema = require('../Validators/Login.validator');
const validate = require('../Middleware/Validate.middleware')

router.route("/login").post(validate(LoginSchema), loginController);


module.exports = router;