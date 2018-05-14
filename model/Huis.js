class Huis {

    constructor(ID, Naam, Adres, UserID){
        this._ID = ID;
        this._Naam = Naam;
        this._Adres = Adres;
        this._UserID = UserID;
    }


    getID() {
        return this._ID;
    }

    getNaam() {
        return this._Naam;
    }

    getAdres() {
        return this._Adres;
    }

    getUserID() {
        return this._UserID;
    }
}

module.exports = Huis;