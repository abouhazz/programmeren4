/**
 * Created by dkroeske on 25/04/2018.
 */

const settings = require('../config.json');
const moment = require('moment');
const jwt = require('jwt-simple');

//
// Encode (van username naar token)
//
function encodeToken(userID, userEmail) {

    //payload maken


    const payload = {

        // kiezen hoe lang de waardes bewaard mogen blijven
        exp: moment().add(10, 'days').unix(),
        iat: moment().unix(),
        sub: userID,
        email: userEmail
    };

    //encode het

    const encode = jwt.encode(payload, settings.secretkey);
    console.log(encode);


    return encode;
}



// decode de code vervolgens
function decodeToken(token, callback) {

    try {


        const payload = jwt.decode(token, settings.secretkey);
        const now = moment().unix();

        if (now > payload.exp) {
            console.log("Token has expired");
        }


        callback(null, payload);

    } catch(error) {

        callback(error, null);
    }

}


module.exports = {
    encodeToken,
    decodeToken
};


