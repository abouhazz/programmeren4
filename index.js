const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const deelnemers_routes = require('./routes/deelnemers_routes')
const meal_routes = require('./routes/maaltijd_routes')
const huis_routes = require('./routes/studentenhuis_routes')
const ApiError = require('./model/ApiError')
const mysql = require('mysql')

let app = express()

// bodyParser zorgt dat we de body uit een request kunnen gebruiken,
app.use(bodyParser.json());

// Installeer Morgan als logger
app.use(morgan('dev'));

app.use('*', function(req, res, next){
    next()
})

app.use('/api', user_routes)

app.get('/api/greeting', function (req, res, next) {
    let mygreeting = {
        text: "Hello all!",
        author: "Robin Schellius"
    }
    res.send(mygreeting)
})

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

    res.status(404).json(error).end()
})

    const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log('De server draait op port ' + port)
})

var rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('enter something', (id)=>{
    var user = {userId:id};
})

module.exports = app