let express = require('express');
let db = require('../Database/MySqlConnection');
let studentenhuis = require('../model/studentenhuis');
let assert = require('assert');
let error = require('../model/ApiError');
module.exports = {
    //studentenhuis aanmaken
    createStudentenhuis(req, res, next){
        //aanmaken
        let huis = new studentenhuis(req.body.naam, req.body.adres, '1', next, function(error){
            if (error){
                res.status(422).end();
            } else {
                console.log('createStudentenhuis is completed' + huis.naam + huis.adres);
                //query voor invoeren db
                let query = {
                    sql:'INSERT INTO `studentenhuis`(`Adres`, `Naam`, `UserID`)VALUES (\'' + huis.adres + '\', \'' + huis.naam + '\', \'' + huis.userId + '\');',
                    timeout: 2000
                };

                //query uitvoeren
                db.query(query, function (error, rows) {
                    if (error) {
                        res.status(400).json(error);
                    } else {
                        //insert
                        let id = rows.insertId;

                        //query aanmaken
                        let query = {
                            sql: 'SELECT studentenhuis.ID, studentenhuis.Naam, studentenhuis.Adres, CONCAT(user.Voornaam, \' \', user.Achternaam) AS Contact, user.Email FROM `studentenhuis` JOIN user ON user.ID = studentenhuis.UserID WHERE studentenhuis.ID = ' + id,
                            timeout: 2000
                        };

                        //query uitvoeren
                        db.query(query, function (error, rows) {
                            if (error) {
                                res.status(400).json(error);
                            } else {
                                res.status(200).json(rows[0]);
             }
         });
      }
    });
   }});
  },





    //studentenhuis ophalen
    getStudentenhuis(req, res, next){
        console.log('getStudentenhuis is completed');
//query voor invoeren db
              let query = {
                    sql : 'SELECT studentenhuis.ID, studentenhuis.Naam, studentenhuis.Adres, CONCAT(user.Voornaam, \' ' +
                    '\', user.Achternaam) AS Contact, user.Email FROM `studentenhuis` RIGHT JOIN user ON user.ID = studentenhuis.UserID',
              timeout : 2000
              };
//query uitvoeren
             db.query(query, function(error, rows){
                    if(error) {
                        res.status(400).json(error);
                     } else {
                         res.status(200).json(rows);
            }
        });
    },





//studentenhuis ophalen met ID
    getStudentenhuisById(req, res, next){
        console.log('getStudentenhuis is completed' + req.params.huisId);
        //controleren geldig huisnummer
        try {
            assert(isNaN(req.params.huisId) === false, 'huisId has to be a number');
            assert(req.params.huisId.indexOf('-') === -1, 'huisId has to be a positive number');
            assert(req.params.huisId.indexOf('.') === -1, 'huisId cannot take any decimals');
        } catch (e){
            const ApiError = new error(e.toString(), 412);
            next(ApiError);
            return
        }
        //query voor invoeren db
        let query = {
            sql : 'SELECT studentenhuis.ID, studentenhuis.Naam, studentenhuis.Adres, CONCAT(user.Voornaam, \' ' +
            '\', user.Achternaam) AS Contact, user.Email FROM `studentenhuis` JOIN user ON user.ID = studentenhuis.UserID WHERE studentenhuis.ID =' + req.params.huisId,
            timeout : 2000
    };
        //query uitvoeren
        db.query(query, function(error, rows){
            if(error) {
                res.status(400).json(error);
            } else {
                res.status(200).json(rows[0]);
            }
        });
    },






    //studentenhuis invoeren
    putStudentenhuis(req, res, next){
        console.log('putStudentenhuis is completed' + req.params.huisId + req.body.naam + req.body.adres);
        //aanmaken
        let studentenhuis = new studentenhuis('1', req.body.naam, req.body.adres);
   //query voor invoeren db
        let query = {
            sql : 'UPDATE studentenhuis SET studentenhuis.Naam = \'' + studentenhuis.naam + '\', ' +
            'studentenhuis.Adres = \'' + studentenhuis.adres + '\' WHERE studentenhuis.ID = \''
            + req.params.huisId + '\' AND studentenhuis.UserID = ' + studentenhuis.userId,
            timeout : 2000
        };
  //query uitvoeren
        db.query(query, function(error, rows){
            if(error) {
                res.status(400).json(error);
            } else {
         //aanmaken
                let query = {
                    sql: 'SELECT studentenhuis.ID, studentenhuis.Naam, studentenhuis.Adres, CONCAT(user.Voornaam, \' \', user.Achternaam) AS Contact, ' +
                    'user.Email FROM `studentenhuis` JOIN user ON user.ID = studentenhuis.UserID WHERE studentenhuis.ID = ' + req.params.huisId,
                    timeout : 2000
                };
  //query uitvoeren
        db.query(query, function(error, rows){
             if(error) {
                res.status(400).json(error);
              } else {
                res.status(200).json(rows[0]);
               }
              });
            }
        });
    },




//studentenhuis verwijderen
    deleteStudentenhuis(req, res, next){
        console.log('deleteStudentenhuis is completed' + req.params.huisId);
  //query aanmaken voor invoeren db
        let query = {
            sql : 'DELETE FROM studentenhuis WHERE studentenhuis.ID = ' + req.params.huisId,
            timeout : 2000
        };
//query uitvoeren
   db.query(query, function(error, rows){
            if(error) {
                res.status(400).json(error);
            } else {
                let result = {
                    message : 'The house is deleted!'
                };
                res.status(200).json(result);
            }
        });
    }
};