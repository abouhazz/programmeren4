
let routes = require('express').Router()
let maaltijd_controller = require('../controller/maaltijd_controller')
let auth = require("../auth/authentication");

// hier schrijven we router endpoints
routes.post('/api/studentenhuis/:huisId/maaltijd', maaltijd_controller.createmaaltijd);
routes.get('/api/studentenhuis/:huisId/maaltijd', maaltijd_controller.getmaaltijd);

routes.get('/api/studentenhuis/:huisId/maaltijd/:maaltijdId', maaltijd_controller.getmaaltijdById);
routes.put('/api/studentenhuis/:huisId/maaltijd/:maaltijdId', maaltijd_controller.putmaaltijd);
routes.delete('/api/studentenhuis/:huisId/maaltijd/:maaltijdId', maaltijd_controller.deletemaaltijd);


module.exports = routes;

