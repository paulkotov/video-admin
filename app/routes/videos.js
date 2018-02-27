var userController = require('../controllers/videocontroller.js');
const express = require('express');
const router = express.Router();

router.get('/:name', userController.showVideo);
router.get('/showall', userController.showAllVideos);
router.post('/add', userController.addVideo);
router.get('/del/:name', userController.delVideo);

module.exports = router;