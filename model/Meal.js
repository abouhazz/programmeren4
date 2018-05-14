class Meal {

    constructor(ID, Naam, Beschrijving, Ingredienten, Allergie){
        this._ID = ID;
        this._Naam = Naam;
        this._Beschrijving = Beschrijving;
        this._Ingredienten = Ingredienten;
        this._Allergie = Allergie;

    }


    getID() {
        return this._ID;
    }

    getNaam() {
        return this._Naam;
    }

    getBeschrijving() {
        return this._Beschrijving;
    }

    getIngredienten() {
        return this._Ingredienten;
    }

    get Allergie() {
        return this._Allergie;
    }
}

module.exports = Meal;