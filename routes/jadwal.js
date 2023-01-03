const express = require('express');
const router = express.Router();
const controllers = require("../controllers/jadwal");

router.route('/:id').get(controllers.getJadwalById);
router.route('/').post(controllers.addJadwal);

module.exports = router;