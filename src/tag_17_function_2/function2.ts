// function intro1() {
//     console.log('hello');
// }

// intro1()



// const intro = () => {
//     console.log('huhu');
// }

// intro()






// Functions-TS-Grundlagen-Level-1_2


// function sayHello() {
//     console.log('helluuu');
// }

// sayHello()



// const sayHello = () => {
//     const writeIt = document.createElement('h1')
//     writeIt.innerText = "Created"
//     document.body.appendChild(writeIt)
// }

// sayHello()











// function multi(a: number, b: number): void {
//     window.alert(a * b)
// }
// multi(2, 6)





// const multiArrow = (a: number, b:number): void => {
//     window.alert(a * b)
// }
// multiArrow(9,3)












// This-TS-Level-1_2



// let person1 = {
//     vorname: 'Anton',
//     nachname: 'Fish',
//     alter: 34,
//     familienstand: 'ledig',
//     groesse: 1.78,
//     zeigeProfil: function () {
//          return `Vorname: ${this.vorname}<br>
//             Nachname: ${this.nachname}<br>
//             Alter: ${this.alter}<br>
//             Familienstand: ${this.familienstand}<br>
//             Größe: ${this.groesse}m`;
//      }
//  };

// document.getElementById("person1").innerHTML = person1.zeigeProfil();




// let person2 = {
//     vorname: 'Alf',
//     nachname: 'Dunker',
//     city: 'Berlin',
//     showPerson: (): string => {
       
//         return `Vorname: ${person2.vorname}, Nachname: ${person2.nachname}, City: ${person2.city}`
//     },
//     }

    
//     document.getElementById("person2").innerHTML = person2.showPerson();





    // Functions-TS-Level-1_6



    // type Monster = {
    //  name: string
    //  type: string
    //  health: number
    //  speed: number
    //  strength: number
    // }

    // function createMonster(name: string, type: string, health: number = 100, speed: number = 25, strength: number = 50): Monster {
    //     return {
    //         name,
    //         type,
    //         health,
    //         speed,
    //         strength
    //     }
    // }

    // const monster1 = createMonster('superman', 'human')
    // console.log(monster1);


   

const multiTutti = (a: number, b: number): void => {
    let sum = a * b
    console.log(sum);
}

multiTutti(9,6)


// const multiArrow = (a: number, b:number): void => {
//     window.alert(a * b)
// }
// multiArrow(9,3)

