var userController = require('../controllers/usercontroller.js');
const express = require('express');
const router = express.Router();


router.get('/:name', (req, res) => { userController.showUser(req.params.name, res)});
router.get('/showall', userController.showAllUsers);
router.post('add', userController.addUser);

// function isLoggedIn(req, res, next) {
//     if (req.isAuthenticated())
//         return next();

//     res.redirect('/signin');
// }

module.exports = router;