const express = require('express');
const router = express.Router();
const verificationController = require('../controllers/verificationController');

// news verificator
router.post('/verify', verificationController.verifyNews);
module.exports = router;
