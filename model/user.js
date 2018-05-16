class User {

    constructor(Voornaam, Achternaam, Email, Password) {

        this._Voornaam = Voornaam;
        this._Achternaam = Achternaam;
        this._Email = Email;
        this._Password = Password;
    }


    get Voornaam() {
        return this._Voornaam;
    }

    get Achternaam() {
        return this._Achternaam;
    }

    get Email() {
        return this._Email;
    }

    get Password() {
        return this._Password;
    }
}