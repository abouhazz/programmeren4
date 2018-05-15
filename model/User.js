class User {

    constructor(ID, Voornaam, Achternaam, email, password){
        this.U_ID = ID;
        this.U_Voornaam = Voornaam;
        this.U_Achternaam = Achternaam;
        this.U_email = email;
        this.U_password = password;
    }


    getID() {
        return this.U_ID;
    }

    getVoornaam() {
        return this.U_Voornaam;
    }

    getAchternaam() {
        return this.U_Achternaam;
    }

    getemail() {
        return this.U_email;
    }

    getpassword() {
        return this.U_password;
    }
}
module.exports = User;