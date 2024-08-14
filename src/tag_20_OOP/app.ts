// import IceCreamFlavor from "./IceCreamFlavor";

// const iceStyle1 = new IceCreamFlavor("mandel", 6.8, false, undefined)

// const iceStyle2 = new IceCreamFlavor("vanille", 2.3, true, "xxxx")

// const iceStyle3 = new IceCreamFlavor("schoko", 1.5, false, "yyyy")

// const iceStyle4 = new IceCreamFlavor("erdbeere", 4.5, true, undefined)



// const icecreamMenu: IceCreamFlavor[] = [iceStyle1, iceStyle2, iceStyle3, iceStyle4]


// icecreamMenu
//     .filter(iceCream => iceCream._isPopular)
//     .forEach(iceCream => console.log(iceCream._name));











// OOP-Class-TS-Level-1_2

// import SchoolClass from "./SchoolClass";
// import Person from "./person";

// // const school1 = new SchoolClass(5, 'mittelstufe')
// // const school2 = new SchoolClass(2, 'grundschule')
// // const school3 = new SchoolClass(12, 'oberstufe')

// // school1.changeName1("realschule")
// // school2._name = 'gymnasium'

// // console.log(school1);
// // console.log(school2);

// const personsVar = [
//     new Person(1, 'kim', 'peters', new Date(2009, 9, 30)),
//     new Person(2, 'ali', 'mai', new Date(2017, 3, 16)),
//     new Person(3, 'freddy', 'x', new Date(2006, 2, 10))
// ]

// const createSchool = new SchoolClass(100, 'superKlasse', undefined, personsVar);


// console.log(createSchool);














// OOP-Class-TS-Level-2_2

import { Car, Driver } from "./car";

const car1 = new Car('audi', 1999, 168)

const driver1 = new Driver('matze', 'reiner', 53, car1)

console.log(driver1);


