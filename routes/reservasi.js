const express = require('express');
const router = express.Router();
const controllers = require("../controllers/reservasi")

router.route('/').get(controllers.getReserved);
router.route('/:id').get(controllers.getUsers);
router.route('/:id').delete(controllers.deleteReserved);
router.route('/detail/:id').get(controllers.getDetailReservasi);

module.exports = router;