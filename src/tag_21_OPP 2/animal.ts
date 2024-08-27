class Animal {
private _species: string
private _age: number
    _color: string




constructor(species: string, age: number, color: string) {
    this._species = species
    this._age = age
    this._color = color
}

get species():string {
    return this._species
}

 set species(value: string) {
        this._species = value
    }




}

export default Animal
