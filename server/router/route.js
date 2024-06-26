const express = require('express');
const router = express.Router();
const controller = require('../controllers/appController.js');

const CLIENT_URL = "http://localhost:3000/dashboard";

/** POST Methods */
router.route('/register').post(controller.register); // register user
router.route('/login').post(controller.verifyUser, controller.login);

module.exports = router;

