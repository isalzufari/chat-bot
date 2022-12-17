const express = require('express');
var router = express.Router();
const controllers = require("../controllers/chat")

router.route('/').post(controllers.getChat);

module.exports = router;
