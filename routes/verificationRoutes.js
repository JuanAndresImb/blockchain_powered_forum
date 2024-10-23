const express = require('express');
const router = express.Router();
const verificationController = require('../controllers/verificationController');

// News verificator

router.post('/verify', verificationController.verifyNews);
module.exports = router;