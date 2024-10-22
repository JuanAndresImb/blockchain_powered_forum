const express = require(express);
const router = express.Router();
const newsController = require('../controllers/newsController');

//Posting a news

router.post('/publish', newsController); 
router.post('./login', authController.login);

//Route that connect wallet using web3.js

router.post('./connectWallet', authController.connectWallet);

module.exports = router;