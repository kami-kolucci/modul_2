class Car {
    _brand: string
   private _constructionYear: number
    _currentSpeed: number


constructor(brand: string, constructionYear: number, currentSpeed: number){
    this._brand = brand
    this._constructionYear = constructionYear
    this._currentSpeed = currentSpeed
}

get constructionYear() {
    return this._constructionYear
}



set constructionYear(value: number) {
   this._constructionYear = value
}

// getSpeedInfo(): void {
// if (this._currentSpeed <= 40) {
//     console.log('Driving slowly');
// } else if (this._currentSpeed > 40 && this._currentSpeed <= 70) {
//     console.log('Driving normally'); 
//     } else if (this._currentSpeed > 70 && this._currentSpeed <= 120) {
//         console.log('Driving fast');
//     } else { 
//         console.log('WTF')
//     }
// }

getSpeedInfo(): string {
    if (this._currentSpeed <= 40) {
        return 'Driving slowly'; 
    } else if (this._currentSpeed > 40 && this._currentSpeed <= 70) {
        return 'Driving normally'; 
    } else if (this._currentSpeed > 70 && this._currentSpeed <= 120) {
        return 'Driving fast'; 
    } else {
        return 'WTF'; 
    }
}










}











class Driver {
    _firstName: string
    _lastName: string
    _age: number
    _car: Car

    constructor(firstName: string, lastName: string, age: number, car: Car){
        this._firstName = firstName
        this._lastName = lastName
        this._age = age
        this._car = car
    }
}

export { Car, Driver }