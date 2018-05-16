const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const deelnemers_routes = require('./routes/deelnemers_routes')
const meal_routes = require('./routes/maaltijd_routes')
const huis_routes = require('./routes/studentenhuis_routes')
const auth_control = require('./controller/auth_controller')
const aut_route = require('./routes/auth_routes')
const ApiError = require('./model/ApiError')
const mysql = require('mysql')

let app = express()

// bodyParser zorgt dat we de body uit een request kunnen gebruiken,
app.use(bodyParser.json());

// Installeer Morgan als logger
app.use(morgan('dev'));
app.use(deelnemers_routes)
app.use(meal_routes)
app.use(huis_routes)

app.use('*', function(req, res, next){
    next()
})

app.use('/api', aut_route)
app.all("*", auth_control.validateToken)


// Wanneer we hier komen bestond de gevraagde endpoint niet
app.use('*', function (req, res, next) {
    console.log('De endpoint die je zocht bestaat niet')
    next("Deze endpoint bestaat niet")
})

// catch-all error handler volgens Express documentatie
// http://expressjs.com/en/guide/error-handling.html
app.use((err, req, res, next) => {
    console.log('Catch-all error handler was called.')
    console.log(err.toString())

    const error = new ApiError(err.toString(), 404)

    res.status(412).json(error).end()
})

    const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log('De server draait op port ' + port)
})



module.exports = app