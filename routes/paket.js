const express = require('express');
const router = express.Router();
const controllers = require("../controllers/paket");

router.route('/').get(controllers.getPaket);
router.route('/').post(controllers.addPaket);
router.route('/:id').delete(controllers.deletePaket);

module.exports = router;