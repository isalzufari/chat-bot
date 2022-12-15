var express = require('express');
var router = express.Router();
// const chatModel = require('../models/Chat');

/* GET home page. */
router.get('/', function (req, res, next) {
  // chatModel.selectAll();
  res.render('index', { title: 'Express' });
});

module.exports = router;
