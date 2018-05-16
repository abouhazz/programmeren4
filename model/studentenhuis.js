class Studentenhuis {

    constructor(Naam, Adres){
        this._Naam = Naam;
        this._Adres = Adres;
    }


    get Naam() {
        return this._Naam;
    }

    get Adres() {
        return this._Adres;
    }

    module.exports = Studentenhuis;