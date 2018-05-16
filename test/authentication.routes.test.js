/**
 * Testcases aimed at testing the authentication process.
 */
const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../index')

chai.should()
chai.use(chaiHttp)

let firstname = "firstnametest"
let lastname = "lastnametest"
let email = "test@hotmail.com"
let password = "welkom1"



// After successful registration we have a valid token. We export this token
// for usage in other testcases that require login.
let validToken

describe('Registration', () => {
    var query = {
        sql:"INSERT INTO 'USER'(Voornaam, Achternaam, Email, Password)" +
        "VALUES " + "(\'" + firstname + "\'," + "\'" + lastname +"\'," + "\'" + email +"\'," +
        "\'" + password +"\');"
    }


    it('should return a token when providing valid information', (done) => {
        chai.request(server).post("api/login").send(
            firstname, lastname, email, password).end((err,res)=>{res.should.have.status(200)
            res.body.should.have.property("error")
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
            .get("api/register")
            .end((err, res)=>{
            res.should.have.status(404)
            res.body.should.have.property("error")
        })
        done()
    })

    it('should throw an error when the user already exists', (done) => {
        chai.request(server)
            .get("api/login")
            .end((err, res)=>{
                res.should.have.status(401)
                res.body.should.have.property("error")})
        done()
    })

    it('should throw an error when no firstname is provided', (done) => {
        chai.request(server)
            .get("api/register")
                .send({
                    "firstname" : "",
                    "lastname" : lastname,
                    "email" : email,
                    "password": password
                })
                .end((err, res)=>{
                    res.should.have.status(412)
                    res.body.should.have.property("error")})
        done()
    })

    it('should throw an error when firstname is shorter than 2 chars', (done) => {
        chai.request(server)
            .get("api/register")
                .send({
                    "firstname" : "a",
                    "lastname" : lastname,
                    "email" : email,
                    "password": password
                })
                .end((err, res)=>{
                    res.should.have.status(401)
                    res.body.should.have.property("error")})
        done()
    })

    it('should throw an error when no lastname is provided', (done) => {
        chai.request(server)
            .get("api/register")
                .send({
                    "firstname" : firstname,
                    "lastname" : "",
                    "email" : email,
                    "password": password
                })
                .end((err, res)=>{
                    res.should.have.status(412)
                    res.body.should.have.property("error")})
        done()
    })

    it('should throw an error when lastname is shorter than 2 chars', (done) => {
        chai.request(server)
            .get("api/register")
                .send({
                    "firstname" : firstname,
                    "lastname" : "a",
                    "email" : email,
                    "password": password
                })
                .end((err, res)=>{
                    res.should.have.status(412)
                    res.body.should.have.property("error")})
        done()
    })

    it('should throw an error when email is invalid', (done) => {
        chai.request(server)
            .get("api/register")
                .send({
                    "firstname" : firstname,
                    "lastname" : lastname,
                    "email" : "test",
                    "password": password
                })
                .end((err, res)=>{
                    res.should.have.status(412)
                    res.body.should.have.property("error")})
        done()
    })

})

describe('Login', () => {

    it('should return a token when providing valid information', (done) => {
        hai.request(server)
            .post("api/login")
            .send({
                    "email": email,
                    "password": password
                })
            .end((err, res)=>{
                    res.should.have.status(200)
                    res.body.should.have.property("error")
                    validToken = res.body.token

                })
        done()
    })

    it('should throw an error when email does not exist', (done) => {
        chai.request(server)
            .post("api/login")
            .send({

                "password": password
            })
            .end((err, res)=>{
                res.should.have.status(412)
                res.body.should.have.property("error")})
        done()
    })

    it('should throw an error when email exists but password is invalid', (done) => {
        chai.request(server)
            .post("api/login")
            .send({
                "email" : email,
                "password": "test"
            })
            .end((err, res)=>{
                res.should.have.status(412)
                res.body.should.have.property("error")})
        done()
    })

    it('should throw an error when using an invalid email', (done) => {
        chai.request(server)
            .post("api/login")
            .send({
                "email" : "test",
                "password": password
            })
            .end((err, res)=>{
                res.should.have.status(412)
                res.body.should.have.property("error")})
        done()
    })


})
module.exports = {
    validToken
}