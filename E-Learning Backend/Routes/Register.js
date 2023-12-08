const express = require('express');
const router = express.Router();
const registerController = require('../Controller/Register.controller')
const registerSchema = require('../Validators/Register.validator')
const validate = require('../Middleware/Validate.middleware')

router.route("/").get(registerController.registerController)
router.route("/register").post(validate(registerSchema), registerController.registerControllerPost)

module.exports = router;