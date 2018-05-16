//imports
let express = require('express');
let router = express.Router();
let deelnemers_controller = require('../controller/deelnemers_controller');

router.post('/api/studentenhuis/:huisId/maaltijd/:maaltijdId/deelnemers', deelnemers_controller.createDeelnemer);
router.get('/api/studentenhuis/:huisId/maaltijd/:maaltijdId/deelnemers', deelnemers_controller.getDeelnemer);
router.delete('/api/studentenhuis/:huisId/maaltijd/:maaltijdId/deelnemers', deelnemers_controller.deleteDeelnemer);
//wegschrijven
module.exports = router;