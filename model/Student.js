class Student {

    constructor(UserID, StudentenhuisID, MaaltijdID){
        this.S_UserID = UserID;
        this.S_StudentenhuisID = StudentenhuisID;
        this.S_MaaltijdID = MaaltijdID;
    }


    get UserID() {
        return this.S_UserID;
    }

    get StudentenhuisID() {
        return this.S_StudentenhuisID;
    }

    get MaaltijdID() {
        return this.S_MaaltijdID;
    }
}

module.exports = Student;