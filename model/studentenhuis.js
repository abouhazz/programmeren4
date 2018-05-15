class Studentenhuis {

    constructor(Naam, Adres, Contact, UserID){
        this._H_ID = null;
        this._H_Email = null;
        this.H_Naam = Naam;
        this.H_Adres = Adres;
        this.H_Contact = Contact;
        this.H_UserID = UserID;
    }


    getID() {
        return this._H_ID;
    }

    getNaam() {
        return this.H_Naam;
    }

    getAdres() {
        return this.H_Adres;
    }

    getUserID() {
        return this.H_UserID;
    }


    setH_ID(value) {
        this._H_ID = value;
    }

    setH_Email(value) {
        this._H_Email = value;
    }
}

module.exports = Studentenhuis;