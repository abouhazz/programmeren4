/**
 * Testcases aimed at testing the authentication process.
 */
const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../index')

chai.should()
chai.use(chaiHttp)



/*
let ""firstname"test" = """firstname"test"test"
let "lastnametest" = ""lastnametest"test"
let "test@hotmail.com" = "test@hotmail.com"
let "welkom1" = "welkom1"
*/



// After successful registration we have a valid token. We export this token
// for usage in other testcases that require login.
let validToken

describe('Registration', () => {
    var query = {
        sql:"INSERT INTO 'USER'(Voornaam, Achternaam, Email, Password)" +
        "VALUES " + "(\'" + "firstnametest" + "\'," + "\'" + "lastnametest" +"\'," + "\'" + "test@hotmail.com" +"\'," +
        "\'" + "welkom1" +"\');"
    }


    it('should return a token when providing valid information', (done) => {
        chai.request(server).post('/api/login').send({
            "firstname": "test",
            "lastname" : "lastnametest",
            "email" : "test@hotmail.com",
            "password": "welkom1"}).end((err,res)=>{res.should.have.status(200)

            })

        //
        // Hier schrijf je jouw testcase.
        //

        // Tip: deze test levert een token op. Dat token gebruik je in
        // andere testcases voor beveiligde routes door het hier te exporteren
        // en in andere testcases te importeren via require.
        // validToken = res.body.token
        // module.exports = {
        //     token: validToken
        // }


        done()
    })



    it('should return an error on GET request', (done) => {
        chai.request(server)
            .get("/api/register")
            .end((err, res)=>{
            res.should.have.status(412)
                done()
        })
    })

    it('should throw an error when the user already exists', (done) => {
        chai.request(server)
            .post('/api/register')
            .end((err, res)=>{
                res.should.have.status(412)
                done()
                })

    })

    it('should throw an error when no firstname is provided', (done) => {
        chai.request(server)
            .post("/api/register")
                .send({
                    "firstname" : "",
                    "lastname" : "lastnametest",
                    "email"  : "test@hotmail.com",
                    "password": "welkom1"
                })
                .end((err, res)=>{
                    res.should.have.status(412)
                    done()
                    })

    })

    it('should throw an error when firstname is shorter than 2 chars', (done) => {
        chai.request(server)
            .post("/api/register")
                .send({
                    "firstname" : "a",
                    "lastname" : "lastnametest",
                    "email"  : "test@hotmail.com",
                    "password": "welkom1"
                })
                .end((err, res)=>{
                    res.should.have.status(401)
                    done()
                    })

    })

    it('should throw an error when no lastname is provided', (done) => {
        chai.request(server)
            .post("/api/register")
                .send({
                    "firstname" : "firstnametest",
                    "lastname" : "",
                    "email" : "test@hotmail.com",
                    "password": "welkom1"
                })
                .end((err, res)=>{
                    res.should.have.status(412)
                    done()
                    })

    })

    it('should throw an error when lastname is shorter than 2 chars', (done) => {
        chai.request(server)
            .post("/api/register")
                .send({
                    "firstname" : "firstnametest",
                    "lastname" : "a",
                    "email" : "test@hotmail.com",
                    "password": "welkom1"
                })
                .end((err, res)=>{
                    res.should.have.status(412)
                    done()
                    })

    })

    it('should throw an error when email is invalid', (done) => {
        chai.request(server)
            .post("/api/register")
            .send({
                    "firstname" : "firstnametest",
                    "lastname" : "lastnametest",
                    "email" : "test",
                    "password": "welkom1"
                })
            .end((err, res)=>{
                    res.should.have.status(412)
                done()
                    })

    })

})

describe('Login', () => {

    it('should return a token when providing valid information', (done) => {
        chai.request(server)
            .post('/api/login')
            .send({
                    "email": "test@hotmail.com",
                    "password": "welkom1"
                })
            .end((err, res)=>{
                    res.should.have.status(200)
                const response = res.body
                response.should.have.property('token').which.is.an('string')
                response.should.have.property('email').which.is.an('string')
                validToken = res.body.token
                done()
                })

    })

    it('should throw an error when email does not exist', (done) => {
        chai.request(server)
            .post('/api/login')
            .send({

                "password": "welkom1"
            })
            .end((err, res)=>{
                res.should.have.status(412)
                done()
                })

    })

    it('should throw an error when email exists but password is invalid', (done) => {
        chai.request(server)
            .post('/api/login')
            .send({
                "email" : "test@hotmail.com",
                "password": "test"
            })
            .end((err, res)=>{
                res.should.have.status(412)
                done()
                })

    })

    it('should throw an error when using an invalid email', (done) => {
        chai.request(server)
            .post('/api/login')
            .send({
                "email" : "test",
                "password": "welkom1"
            })
            .end((err, res)=>{
                res.should.have.status(412)
                done()
               })

    })


})
module.exports = {
    validToken
}
