//imports
let express = require('express');
let router = express.Router();
let maaltijd_controllers = require('../controllers/maaltijd_controllers');

router.post('/api/studentenhuis/:huisId/maaltijd', maaltijd_controllers.createMaaltijd);
router.get('/api/studentenhuis/:huisId/maaltijd', maaltijd_controllers.getMaaltijd);
<<<<<<< HEAD


=======
>>>>>>> a33b2c75c7cc8666b227a11605a59fa68326016f
router.get('/api/studentenhuis/:huisId/maaltijd/:maaltijdId', maaltijd_controllers.getMaaltijdById);
router.put('/api/studentenhuis/:huisId/maaltijd/:maaltijdId', maaltijd_controllers.putMaaltijd);
router.delete('/api/studentenhuis/:huisId/maaltijd/:maaltijdId', maaltijd_controllers.deleteMaaltijd);
//wegschrijven
module.exports = router;