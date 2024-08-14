import Person from "./person"

class SchoolClass {
    _id: number
    _name: string
    _endDate?: Date 
    _persons: Person[]


    constructor(id: number, name: string, endDate?: Date, persons: Person[] = []) {
        this._id = id;
        this._name = name;
        this._endDate = endDate;
        this._persons = persons
    }



// changeName1(newName: string): void {
//     this._name = newName
// }



}

export default SchoolClass;