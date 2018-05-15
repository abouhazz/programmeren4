class Meal {

    constructor(ID, Naam, Beschrijving, Ingredienten, Allergie){
        this.M_ID = ID;
        this.M_Naam = Naam;
        this.M_Beschrijving = Beschrijving;
        this.M_Ingredienten = Ingredienten;
        this.M_Allergie = Allergie;

    }


    getID() {
        return this.M_ID;
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

    get Allergie() {
        return this.M_Allergie;
    }
}

module.exports = Meal;