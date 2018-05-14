class User {

    constructor(ID, Voornaam, Achternaam, email, password){
        this._ID = ID;
        this._Voornaam = Voornaam;
        this._Achternaam = Achternaam;
        this._email = email;
        this._password = password;
    }


    getID() {
        return this._ID;
    }

    getVoornaam() {
        return this._Voornaam;
    }

    getAchternaam() {
        return this._Achternaam;
    }

    getemail() {
        return this._email;
    }

    getpassword() {
        return this._password;
    }
}
module.exports = User;