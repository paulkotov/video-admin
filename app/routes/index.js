const express = require('express');
const router = express.Router();

router.use('/login', require('./login'));
router.use('/authors', require('./authors'));
router.use('/categories',require('./categories'));
router.use('/videos', require('./videos'));
router.use('/tags', require('./tags'));
router.use('/comments', require('./comments'));

router.use('/', require('./main'));

module.exports = router;