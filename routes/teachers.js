var express = require('express');
var router = express.Router();
var teacherController = require('../controllers/teacherController')

router.get('/', teacherController.getAll);

router.post('/new', teacherController.create);

module.exports = router;