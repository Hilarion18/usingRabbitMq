const router = require('express').Router();
const userController = require('../modules/user/controllers/user');

router.get('/', userController.getAllUsers);
router.post('/')

module.exports = router;
