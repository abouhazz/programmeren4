const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../index')

chai.should()
chai.use(chaiHttp)

let validToken

describe('Studentenhuis API POST', () => {


    it('should return a studentenhuis when posting a valid object', (done) => {
        chai.request(server)
            .post("/api/studentenhuis")
            .set("X-Access-token", validToken)
            .send({
                "naam" : "testhuis",
                "adres": "testadres"
            })
            .end((err, res) => {
                validToken = res.body.token
                res.should.have.status(200)
                res.body.should.have.property("error")
                done()
            })
    })

    it('should throw an error when naam is missing', (done) => {
        chai.request(server)
            .post("/api/studentenhuis")
            .send({
                "naam": "",
                "adres": "testadres"
            })
            .end((err, res) => {
                validToken = res.body.token
                res.should.have.status(200)
                res.body.should.have.property("error")
                done()
            })
    })

        it('should throw an error when adres is missing', (done) => {
            chai.request(server)
                .post("/api/studentenhuis")
                .send({
                    "naam": "testhuis",
                    "adres": ""
                })
                .end((err, res) => {
                    validToken = res.body.token
                    res.should.have.status(200)
                    res.body.should.have.property("error")
                    done()
                })
        })
    })

describe('Studentenhuis API GET all', () => {

            it('should throw an error when using invalid JWT token', (done) => {
                chai.request(server)
                    .post("/api/studentenhuis")
                    .set("X-Access-token", 1)
                    .end((err, res) => {
                        res.should.have.status(401)
                        res.body.should.have.property("error")
                        done()
                    })
            })

            it('should return all studentenhuizen when using a valid token', (done) => {
                chai.request(server)
                    .post("/api/studentenhuis")
                    .set("X-Access-token", validToken)
                    .end((err, res) => {
                        res.should.have.status(401)
                        res.body.should.have.property("error")
                        done()
                    })
            })
        })


describe('Studentenhuis API GET one', () => {

    it('should throw an error when using invalid JWT token', (done) => {
        chai.request(server)
            .get("/api/studentenhuis")
            .set("X-Access-token", 1)
            .send({
                "naam" : "testhuis",
                "adres": "testadres"
            })
            .end((err, res) => {
                res.should.have.status(401)
                res.body.should.have.property("error")
                done()
            })
    })

    it('should return the correct studentenhuis when using an existing huisId', (done) => {
        chai.request(server)
            .get("/api/studentenhuis/1")
            .send({
                "naam" : "testhuis",
                "adres": "testadres"
            })
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.have.property("error")
                done()
            })
    })

    it('should return an error when using an non-existing huisId', (done) => {
        chai.request(server)
            .get("/api/studentenhuis/1")
            .send({
                "naam" : "testhuis",
                "adres": "testadres"
            })
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.have.property("error")
                done()
            })
    })
})

describe('Studentenhuis API PUT', () => {

    it('should throw an error when using invalid JWT token', (done) => {
        chai.request(server)
            .put("/api/studentenhuis")
            .set("X-Access-token", 1)
            .send({
                "naam" : "testhuis",
                "adres": "testadres"
            })
            .end((err, res) => {
                res.should.have.status(401)
                res.body.should.have.property("error")
                done()
            })
    })

    it('should return a studentenhuis with ID when posting a valid object', (done) => {
        chai.request(server)
            .put("/api/studentenhuis/1")
            .send({
                "naam" : "testhuis",
                "adres": "testadres"
            })
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.have.property("error")
                done()
            })
        done()
    })

    it('should throw an error when naam is missing', (done) => {
        chai.request(server)
            .put("/api/studentenhuis/1")
            .send({
                "naam" : "",
                "adres": "testadres"
            })
            .end((err, res) => {
                res.should.have.status(404)
                res.body.should.have.property("error")
                done()
            })
        done()
    })

    it('should throw an error when adres is missing', (done) => {
        chai.request(server)
            .put("/api/studentenhuis/1")
            .send({
                "naam" : "testhuis",
                "adres": ""
            })
            .end((err, res) => {
                res.should.have.status(404)
                res.body.should.have.property("error")
                done()
            })
    })
})

describe('Studentenhuis API DELETE', () => {

    it('should throw an error when using invalid JWT token', (done) => {
        chai.request(server)
            .delete("/api/studentenhuis")
            .send({
                "naam" : "testhuis",
                "adres": "testadres"
            })
            .end((err, res) => {
                res.should.have.status(401)
                res.body.should.have.property("error")
                done()
            })
    })

    it('should return a studentenhuis when posting a valid object', (done) => {
        chai.request(server)
            .delete("/api/studentenhuis")
            .send({
                "naam" : "testhuis",
                "adres": "testadres"
            })
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.have.property("error")
                done()
            })
    })

    it('should throw an error when naam is missing', (done) => {
        chai.request(server)
            .delete("/api/studentenhuis")
            .send({
                "naam" : "",
                "adres": "testadres"
            })
            .end((err, res) => {
                res.should.have.status(404)
                res.body.should.have.property("error")
                done()
            })
    })

    it('should throw an error when adres is missing', (done) => {
        chai.request(server)
            .delete("/api/studentenhuis")
            .send({
                "naam" : "testhuis",
                "adres": ""
            })
            .end((err, res) => {
                res.should.have.status(404)
                res.body.should.have.property("error")
                done()
            })
    })
})