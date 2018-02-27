const express = require('express');
const router = express.Router();

const sequelize = require('sequelize');
const Categories = require('../models/author')(sequelize);

router.get('/', (req, res, next) => {

});

module.exports = router;