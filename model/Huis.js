class Huis {

    constructor(ID, Naam, Adres, UserID){
        this.H_ID = ID;
        this.H_Naam = Naam;
        this.H_Adres = Adres;
        this.H_UserID = UserID;
    }


    getID() {
        return this.H_ID;
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
}

module.exports = Huis;