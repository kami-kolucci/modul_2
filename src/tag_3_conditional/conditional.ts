// Conditionals-TS-Level-2_3


// const randomNumber: number = Math.floor(Math.random() * 100)

// const dif: number = randomNumber - 27
// console.log(randomNumber);
// console.log(dif);

// let result: number
// if (dif > 27) {
//     result = dif * 2
// } else {
//     result = dif
// }




// Conditionals-TS-Level-2_4




    // const random1: number = Math.floor(Math.random() * 100)
    // const random2: number = Math.floor(Math.random() * 100)
    
    
    
    // if (random1 > random2) {
    //     console.log("nummer 1 groesser");
    // } else if (random1 < random2) {
    //     console.log("nummer 2 ist groesser");
    // } else if ( random1 === random2) {
    //     console.log("was fuer ein zufall");
    // } else {
    //     console.log();
    // }

    

    // switch (true) {
    //     case random1 > random2:
    //         console.log("nummer 1 groesser");
    //         break;
    //     case random1 < random2:
    //         console.log("nummer 2 ist groesser");
    //         break;
    //     case random1 === random2:
    //         console.log("was fuer ein zufall");
    //         break;
    //     default:
    //         console.log();
    //         break;
    // }





    // // Conditionals-TS-Level-3_1
    let month: number = Math.floor(Math.random() * 12) + 1
    let quartal: string 

   switch (month){
            case 1:
            case 2:
            case 3:
            quartal = "1. quartal"
            break
            case 4:
            case 5:
            case 6:
            quartal = "2. quartal"
            break
            case 7:
            case 8:
            case 9:
            quartal = "3. quartal"
            break
            case 10:
            case 11:
            case 12:
            quartal = "4. quartal"
            break
            default:
            quartal = "Ungültiger Monat";
            break;
   }
   console.log(quartal);
   console.log(month);


//    let month: number = Math.floor(Math.random() * 12) + 1;
// let quartal: string;

// switch (month) {
//     case 1:
//     case 2:
//     case 3:
//         quartal = "1. quartal";
//         break;
//     case 4:
//     case 5:
//     case 6:
//         quartal = "2. quartal";
//         break;
//     case 7:
//     case 8:
//     case 9:
//         quartal = "3. quartal";
//         break;
//     case 10:
//     case 11:
//     case 12:
//         quartal = "4. quartal";
//         break;
//     default:
//         quartal = "Ungültiger Monat";
//         break;
// }

// console.log(quartal);






