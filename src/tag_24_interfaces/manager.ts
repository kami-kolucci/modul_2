import IEmployee from "./IEmployee";

class Manager implements IEmployee {
    _name: string;
    _age: number;
    _position: string; 
    private _assignedEmployees: IEmployee[] = [];



constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
}

addSubordinate(value: IEmployee): void {
    this._assignedEmployees.push(value)

}

getSubordinates(): IEmployee[] {
    return this._assignedEmployees;
}

}

export { Manager}