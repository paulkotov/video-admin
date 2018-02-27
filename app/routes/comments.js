var userController = require('../controllers/videocontroller.js');
const express = require('express');
const router = express.Router();

const sequelize = require('sequelize');
const Comment = require('../models/comment')(sequelize);

module.exports = router;