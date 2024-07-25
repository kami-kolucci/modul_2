// Functions-TS-Grundlagen-Level-1_4

// function showHero( heroName: string, heroPower: string, heroEnemy: string) {
//   let nameOutput: string;
//   let powerOutput: string;
//   let enemyOutput: string;

//   nameOutput = "mein lieblingsheld ist " + heroName ;
//   powerOutput = ". Er hat die Fähigkeit: " + heroPower;
//   enemyOutput = ". Sein/ihr größter Gegner:in ist: " + heroEnemy;
//   console.log(nameOutput + powerOutput + enemyOutput);

// //   showHero("superman", "springen", "xy");
// }

// showHero("superman", "springen", "xy");









// Functions-TS-Grundlagen-Level-1_7



// function multiply(zahl: number): number {
//     const result = zahl * 2
//     return result
// }
//     const endSumme: number = multiply(6)
    

// console.log(endSumme);










// Functions-TS-Grundlagen-Level-1_8

function myAge( birthYear: number) {
    const result: number = 2024 - birthYear
    return result
}

const endAge = myAge(1985)
console.log(endAge);

function difference( endAge: number, otherAge: number): number {
    
    const calculate: number = endAge - otherAge
    return calculate
    
}


const otherAge: number = 29;
const endDifference: number = difference(endAge, otherAge);
console.log(endDifference); 









// Functions-TS-Grundlagen-Level-1_9

// function intro(name: string, lastName: string, city: string, age: string, currentCity: string) {
//     let nameOut: string = `Mein Name ist ${name}`
//     let lastNameOut: string = ` ${lastName}.`
//     let cityOut: string = `  Ich bin in ${city} geboren.`
//     let ageOut: string = `Ich lerne bei SuperCode.  Ich bin ${age} Jahre alt.`
//     let currentCityOut: string = `  Ich wohne in ${currentCity}.`

   
//     console.log(nameOut + lastNameOut + cityOut + ageOut + currentCityOut);
//     // intro("Aurora", "Dust", "New York", "20", "Celestia")
// }

// intro("Aurora", "Dust", "New York", "20", "Celestia")








// andere Version - Functions-TS-Grundlagen-Level-1_8

function calculate(birthYear: number): number {
    const myAge = 2024 - birthYear
    return myAge
}

const endAge = calculate(1985)
console.log(endAge);

function calculate2(birthYear: number): number {
    const myAge = 2024 - birthYear
    return myAge
}

const endAge2 = calculate2(1990)
console.log(endAge2);


const difference = endAge - endAge2
console.log(difference);



















// bonus aufgabe




// let homeScore: number = 0
// let awayScore: number = 0

// const button1Home = document.getElementById('home-plus1')
// const counterElement = document.getElementById('counter')








