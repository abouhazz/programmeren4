const auth = require('../auth/authentication');
const moment = require("moment");
const db = require('../Database/MySqlConnection');
module.exports = {

    //token aanmaken
    validateToken(req, res, next) {
        console.log('validateToken was called');

        //token ophalen
        const token = request.header("x-access-token") || "unable to access token";

// token mag niet empty zijn


        if(token.includes("")) {


            const json = {
                "message": "Not a valid token! Please try again",
                "code": 401,
                "datetime": moment()
            };
            response.status(401).json(json);
        }



        //token ontmantelen
        auth.decodeToken(token, (error, payload) => {
            if(error)      {
                //afgekeurd
                const error = new ApiError(error.message || error, 401);
                next(error);

            } else    {
                //goedgekeurd
                console.log("Token was approved with payload: ");
                console.dir(payload);
                request.user = payload.sub;
                next();
              }
          })
    },

    //login initaliseren
    login: function (request, response) {
        const email = request.body.email;
        const password = request.body.password;
        console.log("Login contains: " + email + ", "+ password);
        const query = {
            sql: "SELECT ID FROM user WHERE email = " + email + "AND password = " + password,
            timeout : 2000
        };
        // error afhandelen
        db.query(query, function (error, rows) {
            if (error) {
                console.log("Error! Please try again!")
            }
        })



    },

    //register initaliseren
    register: function (request, response) {

        //body gegevens ophalen
        const firstname = request.body.firstname || "";
        const lastname = request.body.lastname || "";
        const email = request.body.email || "";
        const password = request.body.password || "";

        //hier laten zien dat een veld niet leeggelaten mag worden
        if (!([firstname, lastname, email, password].includes(''))) {


            const token = auth.encodeToken(firstname, email);
            const json = {
                "token": token,
                "email": email
            };
            response.status(200).json(json);
        }








    },
};
