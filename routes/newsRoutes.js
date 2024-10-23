const express = require(express);
const router = express.Router();
const newsController = require('../controllers/newsController');

//Posting a news

router.post('/publish', newsController.publish); 

// Showing all the news
router.get('/all', newsController.getAllNews);

//Showing news by id 

router.get('/:id', newsController.getNewsById);

module.exports = router;