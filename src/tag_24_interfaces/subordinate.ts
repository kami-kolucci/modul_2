import IEmployee from "./IEmployee";

class Subordinate implements IEmployee{
    _name: string;
    _age: number;
    _position: string;
    
    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
}

export { Subordinate };