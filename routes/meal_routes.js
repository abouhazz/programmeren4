//imports
let express = require('express');
let router = express.Router();
let maaltijd_controllers = require('../controllers/maaltijd_controllers');

//maak een nieuwe maaltijd aan
router.post('/api/studentenhuis/:huisId/maaltijd', maaltijd_controllers.createMaaltijd);

//verkrijg een maaltijd
router.get('/api/studentenhuis/:huisId/maaltijd', maaltijd_controllers.getMaaltijd);

//verkrijg een maaltijd aan de hand van zijn id
router.get('/api/studentenhuis/:huisId/maaltijd/:maaltijdId', maaltijd_controllers.getMaaltijdById);

//voer een maaltijd in
router.put('/api/studentenhuis/:huisId/maaltijd/:maaltijdId', maaltijd_controllers.putMaaltijd);

//Verwijder een maaltijd
router.delete('/api/studentenhuis/:huisId/maaltijd/:maaltijdId', maaltijd_controllers.deleteMaaltijd);

//export router
module.exports = router;