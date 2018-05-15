// import settings

const auth = require('../auth/authentication');
const tijd = require("moment");

module.exports = {

    //token aanmaken
    validateToken(req, res, next) {
        console.log('validateToken called');

        //token ophalen
        const token = request.header("x-access-token") || "unable to access token";

        auth.decodeToken(token, (error, payload) => {

            if(error)   {
                //afgekeurd
                const error = new ApiError(error.message || error, 401);
                next(error);

            } else{
                //goedgekeurd
                console.log("Token approved! payload: \r\n");
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

        console.log("received: " + email + ", "+ password);
    },

    //register initaliseren
    register: function (request, response) {

        //body gegevens ophalen
        const firstname = request.body.firstname  || "";
        const lastname = request.body.lastname    || "";
        const email = request.body.email          || "";
        const password = request.body.password    || "";

        //hier laten zien dat een veld niet leeggelaten mag worden
        if(!([firstname, lastname, email, password].includes(''))) {


            const token = auth.encodeToken(firstname, email);
            const json = {
                "token": token,
                "email": email
            };
            response.status(200).json(json);
        }

        if(false)    {
            const json = {
                "message": "Token is invalid!",
                "code": 401,
                "datetime": moment()
            };
            response.status(401).json(json);
        }

        else{
            const json = {
                "message": "Request body is not appearent or bugged",
                "code": 412,
                "datetime": moment()
            };
            response.status(414).json(json);
        }
    }, 
};