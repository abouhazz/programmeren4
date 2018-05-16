const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../index')

chai.should()
chai.use(chaiHttp)

let validToken

describe('maaltijd API POST', () => {

    it('should throw an error when naam is missing', (done) => {
        chai.request(server)
            .post("/api/studentenhuis/:huisId/maaltijd")
            .send({
                "naam": "",
                "beschrijving": "voedsel",
                "ingredienten": "ingred",
                "allergie": "ziektes",
                "prijs": 2
            })
            .end((err, res) => {
                validToken = res.body.token
                res.should.have.status(412)
                res.body.should.have.property("error")
                done()
            })
    })


    it('should throw an error when beschrijving is missing', (done) => {
        chai.request(server)
            .post("/api/studentenhuis/:huisId/maaltijd")
            .send({
                "naam": "lekkereten",
                "beschrijving": "",
                "ingredienten": "ingred",
                "allergie": "ziektes",
                "prijs": 2
            })
            .end((err, res) => {
                validToken = res.body.token
                res.should.have.status(412)
                res.body.should.have.property("error")
                done()
            })
    })

    it('should throw an error when ingredienten is missing', (done) => {
        chai.request(server)
            .post("/api/studentenhuis/:huisId/maaltijd")
            .send({
                "naam": "lekkereten",
                "beschrijving": "voedsel",
                "ingredienten": "",
                "allergie": "ziektes",
                "prijs": 2
            })
            .end((err, res) => {
                validToken = res.body.token
                res.should.have.status(412)
                res.body.should.have.property("error")
                done()
            })
    })

    it('should throw an error when allergie is missing', (done) => {
        chai.request(server)
            .post("/api/studentenhuis/:huisId/maaltijd")
            .send({
                "naam": "",
                "beschrijving": "voedsel",
                "ingredienten": "ingred",
                "allergie": "",
                "prijs": 2
            })
            .end((err, res) => {
                validToken = res.body.token
                res.should.have.status(412)
                res.body.should.have.property("error")
                done()
            })
    })

    it('should throw an error when prijs is missing', (done) => {
        chai.request(server)
            .post("/api/studentenhuis/:huisId/maaltijd")
            .send({
                "naam": "",
                "beschrijving": "voedsel",
                "ingredienten": "ingred",
                "allergie": "ziektes",
                "prijs": ""
            })
            .end((err, res) => {
                validToken = res.body.token
                res.should.have.status(412)
                res.body.should.have.property("error")
                done()
            })
    })
})

describe('maaltijd API GET all', () => {

    it('should throw an error when naam is missing', (done) => {
        chai.request(server)
            .get("/api/studentenhuis/:huisId/maaltijd")
            .send({
                "naam": "",
                "beschrijving": "voedsel",
                "ingredienten": "ingred",
                "allergie": "ziektes",
                "prijs": 2
            })
            .end((err, res) => {
                validToken = res.body.token
                res.should.have.status(412)
                res.body.should.have.property("error")
                done()
            })
    })


    it('should throw an error when beschrijving is missing', (done) => {
        chai.request(server)
            .get("/api/studentenhuis/:huisId/maaltijd")
            .send({
                "naam": "lekkereten",
                "beschrijving": "",
                "ingredienten": "ingred",
                "allergie": "ziektes",
                "prijs": 2
            })
            .end((err, res) => {
                validToken = res.body.token
                res.should.have.status(412)
                res.body.should.have.property("error")
                done()
            })
    })

    it('should throw an error when ingredienten is missing', (done) => {
        chai.request(server)
            .get("/api/studentenhuis/:huisId/maaltijd")
            .send({
                "naam": "lekkereten",
                "beschrijving": "voedsel",
                "ingredienten": "",
                "allergie": "ziektes",
                "prijs": 2
            })
            .end((err, res) => {
                validToken = res.body.token
                res.should.have.status(412)
                res.body.should.have.property("error")
                done()
            })
    })

    it('should throw an error when allergie is missing', (done) => {
        chai.request(server)
            .get("/api/studentenhuis/:huisId/maaltijd")
            .send({
                "naam": "",
                "beschrijving": "voedsel",
                "ingredienten": "ingred",
                "allergie": "",
                "prijs": 2
            })
            .end((err, res) => {
                validToken = res.body.token
                res.should.have.status(412)
                res.body.should.have.property("error")
                done()
            })
    })

    it('should throw an error when prijs is missing', (done) => {
        chai.request(server)
            .get("/api/studentenhuis/:huisId/maaltijd")
            .send({
                "naam": "",
                "beschrijving": "voedsel",
                "ingredienten": "ingred",
                "allergie": "ziektes",
                "prijs": ""
            })
            .end((err, res) => {
                validToken = res.body.token
                res.should.have.status(412)
                res.body.should.have.property("error")
                done()
            })
    })
})


describe('maaltijd API GET one', () => {

    it('should throw an error when naam is missing', (done) => {
        chai.request(server)
            .get("/api/studentenhuis/:huisId/maaltijd")
            .send({
                "naam": "",
                "beschrijving": "voedsel",
                "ingredienten": "ingred",
                "allergie": "ziektes",
                "prijs": 2
            })
            .end((err, res) => {
                validToken = res.body.token
                res.should.have.status(412)
                res.body.should.have.property("error")
                done()
            })
    })


    it('should throw an error when beschrijving is missing', (done) => {
        chai.request(server)
            .get("/api/studentenhuis/:huisId/maaltijd")
            .send({
                "naam": "lekkereten",
                "beschrijving": "",
                "ingredienten": "ingred",
                "allergie": "ziektes",
                "prijs": 2
            })
            .end((err, res) => {
                validToken = res.body.token
                res.should.have.status(412)
                res.body.should.have.property("error")
                done()
            })
    })

    it('should throw an error when ingredienten is missing', (done) => {
        chai.request(server)
            .get("/api/studentenhuis/:huisId/maaltijd")
            .send({
                "naam": "lekkereten",
                "beschrijving": "voedsel",
                "ingredienten": "",
                "allergie": "ziektes",
                "prijs": 2
            })
            .end((err, res) => {
                validToken = res.body.token
                res.should.have.status(412)
                res.body.should.have.property("error")
                done()
            })
    })

    it('should throw an error when allergie is missing', (done) => {
        chai.request(server)
            .get("/api/studentenhuis/:huisId/maaltijd")
            .send({
                "naam": "",
                "beschrijving": "voedsel",
                "ingredienten": "ingred",
                "allergie": "",
                "prijs": 2
            })
            .end((err, res) => {
                validToken = res.body.token
                res.should.have.status(412)
                res.body.should.have.property("error")
                done()
            })
    })

    it('should throw an error when prijs is missing', (done) => {
        chai.request(server)
            .get("/api/studentenhuis/:huisId/maaltijd")
            .send({
                "naam": "",
                "beschrijving": "voedsel",
                "ingredienten": "ingred",
                "allergie": "ziektes",
                "prijs": ""
            })
            .end((err, res) => {
                validToken = res.body.token
                res.should.have.status(412)
                res.body.should.have.property("error")
                done()
            })
    })
})

describe('maaltijd API PUT', () => {

    it('should throw an error when naam is missing', (done) => {
        chai.request(server)
            .put("/api/studentenhuis/:huisId/maaltijd")
            .send({
                "naam": "",
                "beschrijving": "voedsel",
                "ingredienten": "ingred",
                "allergie": "ziektes",
                "prijs": 2
            })
            .end((err, res) => {
                validToken = res.body.token
                res.should.have.status(412)
                res.body.should.have.property("error")
                done()
            })
    })

    it('should throw an error when beschrijving is missing', (done) => {
        chai.request(server)
            .put("/api/studentenhuis/:huisId/maaltijd")
            .send({
                "naam": "lekkereten",
                "beschrijving": "",
                "ingredienten": "ingred",
                "allergie": "ziektes",
                "prijs": 2
            })
            .end((err, res) => {
                validToken = res.body.token
                res.should.have.status(412)
                res.body.should.have.property("error")
                done()
            })
    })

    it('should throw an error when ingredienten is missing', (done) => {
        chai.request(server)
            .put("/api/studentenhuis/:huisId/maaltijd")
            .send({
                "naam": "lekkereten",
                "beschrijving": "voedsel",
                "ingredienten": "",
                "allergie": "ziektes",
                "prijs": 2
            })
            .end((err, res) => {
                validToken = res.body.token
                res.should.have.status(412)
                res.body.should.have.property("error")
                done()
            })
    })

    it('should throw an error when allergie is missing', (done) => {
        chai.request(server)
            .put("/api/studentenhuis/:huisId/maaltijd")
            .send({
                "naam": "",
                "beschrijving": "voedsel",
                "ingredienten": "ingred",
                "allergie": "",
                "prijs": 2
            })
            .end((err, res) => {
                validToken = res.body.token
                res.should.have.status(412)
                res.body.should.have.property("error")
                done()
            })
    })

    it('should throw an error when prijs is missing', (done) => {
        chai.request(server)
            .put("/api/studentenhuis/:huisId/maaltijd")
            .send({
                "naam": "",
                "beschrijving": "voedsel",
                "ingredienten": "ingred",
                "allergie": "ziektes",
                "prijs": ""
            })
            .end((err, res) => {
                validToken = res.body.token
                res.should.have.status(412)
                res.body.should.have.property("error")
                done()
            })
    })
})

describe('maaltijd API DELETE', () => {

    it('should throw an error when naam is missing', (done) => {
        chai.request(server)
            .delete("/api/studentenhuis/:huisId/maaltijd")
            .send({
                "naam": "",
                "beschrijving": "voedsel",
                "ingredienten": "ingred",
                "allergie": "ziektes",
                "prijs": 2
            })
            .end((err, res) => {
                validToken = res.body.token
                res.should.have.status(412)
                res.body.should.have.property("error")
                done()
            })
    })

    it('should throw an error when beschrijving is missing', (done) => {
        chai.request(server)
            .delete("/api/studentenhuis/:huisId/maaltijd")
            .send({
                "naam": "lekkereten",
                "beschrijving": "",
                "ingredienten": "ingred",
                "allergie": "ziektes",
                "prijs": 2
            })
            .end((err, res) => {
                validToken = res.body.token
                res.should.have.status(412)
                res.body.should.have.property("error")
                done()
            })
    })

    it('should throw an error when ingredienten is missing', (done) => {
        chai.request(server)
            .delete("/api/studentenhuis/:huisId/maaltijd")
            .send({
                "naam": "lekkereten",
                "beschrijving": "voedsel",
                "ingredienten": "",
                "allergie": "ziektes",
                "prijs": 2
            })
            .end((err, res) => {
                validToken = res.body.token
                res.should.have.status(412)
                res.body.should.have.property("error")
                done()
            })
    })

    it('should throw an error when allergie is missing', (done) => {
        chai.request(server)
            .delete("/api/studentenhuis/:huisId/maaltijd")
            .send({
                "naam": "",
                "beschrijving": "voedsel",
                "ingredienten": "ingred",
                "allergie": "",
                "prijs": 2
            })
            .end((err, res) => {
                validToken = res.body.token
                res.should.have.status(412)
                res.body.should.have.property("error")
                done()
            })
    })

    it('should throw an error when prijs is missing', (done) => {
        chai.request(server)
            .delete("/api/studentenhuis/:huisId/maaltijd")
            .send({
                "naam": "",
                "beschrijving": "voedsel",
                "ingredienten": "ingred",
                "allergie": "ziektes",
                "prijs": ""
            })
            .end((err, res) => {
                validToken = res.body.token
                res.should.have.status(412)
                res.body.should.have.property("error")
                done()
            })
    })
})