var express = require('express');
var router = express.Router();
var classeController = require('../controllers/classeController')

router.get('/', classeController.getAll);

router.post('/new', classeController.create);

module.exports = router;