let express = require('express');
module.exports = {

    //deelnemer aanmaken
    createDeelnemer(request, response, next){
        //ophalen vanuit swagger
        let huisID = request.params.huisId;
        let maaltijdID = request.params.maaltijdId;
        //check
        console.log('createDeelnemer is completed \r\n' +
            "huisID: " + huisID + "maaltijdID: " + maaltijdID);
        response.status(200).end();
    },





    //deelnemer ophalen
    getDeelnemer(request, response, next){
        //ophalen vanuit swagger
        let huisID = request.params.huisId;
        let maaltijdID = request.params.maaltijdId;
        //check
        console.log('getDeelnemer is completed \r\n' +
            "huisID: " + huisID + "maaltijdID: " + maaltijdID);
        response.status(200).end();
    },





    //deelnemer verwijderen
    deleteDeelnemer(request, response, next){
        //ophalen vanuit swagger
        let huisID = request.params.huisId;
        let maaltijdID = request.params.maaltijdId;
        //check
        console.log('deleteDeelnemer is completed \r\n' +
            "huisID: " + huisID + "maaltijdID: " + maaltijdID);
        response.status(200).end();
    }
};