class Maaltijd {

    constructor(Naam, Beschrijving, Ingredienten, Allergie, Prijs){
        this.M_Naam = Naam;
        this.M_Beschrijving = Beschrijving;
        this.M_Ingredienten = Ingredienten;
        this.M_Allergie = Allergie;
        this._Prijs = Prijs;

    }


    getNaam() {
        return this.M_Naam;
    }

    getBeschrijving() {
        return this.M_Beschrijving;
    }

    getIngredienten() {
        return this.M_Ingredienten;
    }

    getAllergie() {
        return this.M_Allergie;
    }


    getPrijs() {
        return this._Prijs;
    }
}

module.exports = Maaltijd;