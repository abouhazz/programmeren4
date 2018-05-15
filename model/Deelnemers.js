class Deelnemers {

    constructor(Voornaam, Achternaam, email){


        this._Voornaam = Voornaam;
        this._Achternaam = Achternaam;
        this._email = email;

    }


    get Voornaam() {
        return this._Voornaam;
    }

    get Achternaam() {
        return this._Achternaam;
    }

    get email() {
        return this._email;
    }
}
module.exports = Deelnemers;