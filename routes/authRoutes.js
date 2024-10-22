const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// register and login
router.post('./register', authController.register);
router.post('./logn', authController.login);
// Connect callet using web3.js

router.post('./connectWallet', authController.connectWallet);

module.exports = router;
