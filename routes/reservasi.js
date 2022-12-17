const express = require('express');
var router = express.Router();
const controllers = require("../controllers/reservasi")

router.route('/').get(controllers.getReserved);
router.route('/:id').get(controllers.getUsers);
router.route('/:id').delete(controllers.deleteReserved);

module.exports = router;