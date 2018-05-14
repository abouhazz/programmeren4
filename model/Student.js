class Student {

    constructor(UserID, StudentenhuisID, MaaltijdID){
        this._UserID = UserID;
        this._StudentenhuisID = StudentenhuisID;
        this._MaaltijdID = MaaltijdID;
    }


    get UserID() {
        return this._UserID;
    }

    get StudentenhuisID() {
        return this._StudentenhuisID;
    }

    get MaaltijdID() {
        return this._MaaltijdID;
    }
}

module.exports = Student;