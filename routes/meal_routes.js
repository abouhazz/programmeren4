//imports
let express = require('express');
let router = express.Router();
let maaltijd_controllers = require('../controllers/maaltijd_controllers');

//maak een nieuwe maaltijd aan
router.post('/api/studentenhuis/:huisId/maaltijd', maaltijd_controllers.createMaaltijd);

//verkrijg een maaltijd
router.get('/api/studentenhuis/:huisId/maaltijd', maaltijd_controllers.getMaaltijd);


router.get('/api/studentenhuis/:huisId/maaltijd/:maaltijdId', maaltijd_controllers.getMaaltijdById);
router.put('/api/studentenhuis/:huisId/maaltijd/:maaltijdId', maaltijd_controllers.putMaaltijd);
router.delete('/api/studentenhuis/:huisId/maaltijd/:maaltijdId', maaltijd_controllers.deleteMaaltijd);

//export router
module.exports = router;