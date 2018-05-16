let express = require('express');
let db = require('../Database/MySqlConnection');
let studentenhuis = require('../model/studentenhuis');
let assert = require('assert');
let error = require('../model/ApiError');
module.exports = {

    //maaltijd aanmaken

    createmaaltijd(request, response, next) {

        //ophalen vanuit swagger
        let huisID = request.params.huisId;
        //check
        console.log('createMaaltijd is created \r\n' + "huisID: " + huisID);
        response.status(200).end();
    },



    //nieuwe maaltijd ophalen
    getmaaltijd(request, response, next){
        //ophalen vanuit swagger
        let huisID = request.params.huisId;
        //check log
        console.log('getMaaltijd is completed \r\n' + "huisID: " + huisID);
        response.status(200).end();
    },





    //maaltijd ophalen met ID
    getmaaltijdById(request, response, next){
        //ophalen vanuit swagger
        let huisID = request.params.huisId;
        let maaltijdID = request.params.maaltijdId;
        //check
        console.log('getMaaltijd is completed \r\n' +
            "huisID: " + huisID + "maaltijdID: " + maaltijdID);
        response.status(200).end();
    },





    //nieuwe maaltijd invoeren
    putmaaltijd(request, response, next){
        //ophalen vanuit swagger
        let huisID = request.params.huisId;
        let maaltijdID = request.params.maaltijdId;
        //check
        console.log('putMaaltijd is completed \r\n' +
            "huisID: " + huisID + "maaltijdID: " + maaltijdID);
        response.status(200).end();
    },





    //maaltijd verwijderen
    deletemaaltijd(request, response, next){
        //ophalen vanuit swagger
        let huisID = request.params.huisId;
        let maaltijdID = request.params.maaltijdId;
        //check
        console.log('deleteMaaltijd is completed \r\n' +
            "huisID: " + huisID + "maaltijdID: " + maaltijdID);
        response.status(200).end();
    }
};