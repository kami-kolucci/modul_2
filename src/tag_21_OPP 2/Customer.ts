class Customer {
     _name: string;
    private _email: string;
     _address: string;
     _postalCode: number;
     _city: string;

    constructor(name: string, email: string, address: string, postalCode: number, city: string) {
        this._name = name;
        this._email = email;
        this._address = address;
        this._postalCode = postalCode;
        this._city = city;
    }

    get name(): string {
        return this._name;
    }

    get email(): string {
        return this._email;
    }

set name(value: string) {
    if (value.length > 60) {
        console.error('name zu lang');
        return
    }
    else {
        (this._name = value)
    }
}


set email(value: string) {
    // Prüfe, ob sowohl '@' als auch '.' vorhanden sind
    if (value.includes('@') && value.includes('.')) {
        this._email = value;
    } else {
        console.error("E-Mail-Adresse muss ein '@'-Zeichen und einen Punkt enthalten.");
    }
}


 get postalCode(): string {
        return this._postalCode;
    }

set postalCode(value: string) {
    if (!/^\d{5}$/.test(value)) {
        console.log('postleitzahl muss fünfstellig sein');
        return;
    }
    this._postalCode = value;
}




}

export default Customer