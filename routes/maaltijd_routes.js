<<<<<<< HEAD:routes/maaltijd_routes.js

let routes = require('express').Router()
let maaltijd_controllers = require('../controller/maaltijd_controller')

// hier schrijven we router endpoints
routes.post('/api/studentenhuis/:huisId/maaltijd', maaltijd_controllers.createMaaltijd);
routes.get('/api/studentenhuis/:huisId/maaltijd', maaltijd_controllers.getMaaltijd);

routes.get('/api/studentenhuis/:huisId/maaltijd/:maaltijdId', maaltijd_controllers.getMaaltijdById);
routes.put('/api/studentenhuis/:huisId/maaltijd/:maaltijdId', maaltijd_controllers.putMaaltijd);
routes.delete('/api/studentenhuis/:huisId/maaltijd/:maaltijdId', maaltijd_controllers.deleteMaaltijd);


module.exports = routes;
=======
>>>>>>> 3d54c7177610cfbb9f76240cf31cafd95b41a6ca:routes/meal_routes.js
