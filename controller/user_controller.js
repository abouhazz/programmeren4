//
// CRUD operaties op User
//
let User = require('../model/User')
const assert = require('assert')

let userlist = []

module.exports = {

    createUser(req, res, next) {
        console.log('usercontroller.createUser')

        assert(req.body.firstname, 'firstname must be provided')
        assert(req.body.lastname, 'lastname must be provided')

        const Id = req.body.U_ID
        const firstname = req.body.U_Voornaam
        const lastname = req.body.U_Achternaam
        const email = req.body.U_email
        const password = req.body.U_password
        console.log("Naam van gebruiker: " + firstname + " " + lastname)

        let account = new User(Id,firstname, lastname,email,password)
        // Add to database
        userlist.push(account)

        res.status(200).json(user).end();
    },

    readUser(req, res, next) {
        res.status(200).json(userlist).end();
    },

    /////////////////nog naar kijken
    updateUser(req, res, next) {
        let user = new Person("Robin", "Schellius")
        res.status(200).json(user).end();
    },

    deleteUser(req, res, next) {
        // vind de juiste person om te deleten
        const id = req.params.id
        console.log('deletePerson id = ' + id)

        // delete die person
        const removedPerson = personlist.splice(id, 1)
        if(removedPerson.length === 1) {
            // gelukt; status = 200
            res.status(200).json(removedPerson).end();
        } else {
            // mislukt; fout -> next(error)
            let error = {
                message: "Person was not found"
            }
            next(error)
        }
    },

    getUserById(req, res, next) {

        let user = new Person("Robin", "Schellius")
        res.status(200).json(user).end();
    },


}