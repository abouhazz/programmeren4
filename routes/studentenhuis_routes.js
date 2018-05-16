let express = require('express');
let router = express.Router();
let studentenhuis_controller = require('../controller/studentenhuis_controller');
let auth = require("../auth/authentication");

router.post('/api/studentenhuis', studentenhuis_controller.createStudentenhuis);
router.get('/api/studentenhuis', studentenhuis_controller.getStudentenhuis);
router.get('/api/studentenhuis/:huisId', studentenhuis_controller.getStudentenhuisById);
router.put('/api/studentenhuis/:huisId', studentenhuis_controller.putStudentenhuis);
router.delete('/api/studentenhuis/:huisId', studentenhuis_controller.deleteStudentenhuis);

module.exports = router;