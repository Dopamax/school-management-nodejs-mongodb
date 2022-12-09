var express = require('express');
var router = express.Router();
var studentController = require('../controllers/studentController')

router.get('/', studentController.getAll);

router.post('/new', studentController.create);

module.exports = router;
