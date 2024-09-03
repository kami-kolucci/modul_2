// const highestNumber: number[] = [5,9,60,2,56,44]


// function compareNum(numbers: number[]): number {
//     return Math.max(...numbers)
// }

// console.log(compareNum(highestNumber));



// function add(a:number, b:number): number {
//     return a + b
// }

// console.log(add(7,9));











// const collection = [1, 2, 3, 4, 5];

// // Anonyme Funktion als Argument für Array.prototype.forEach
// numbers.forEach(function(num) {
//     console.log(num * 3);
// });


// function double(numbers: number[]): number {
//    return numbers.map(num => num * 2)
// }

// console.log(double(collection));








// let wordArray = ['finger', 'sEil', 'BAll', 'klein']

// function Upper(words: string[]): string[] {
//     return words.map(word => word.toUpperCase())
// }

// console.log(Upper(wordArray));



// const numbers = [1, 2, 3, 4, 5];

// function double(numbers: number[]): number[]{
//     return numbers.map( num => num * 2)
// }
// console.log(double(numbers));










// const strings = ['  fOto ', ' jUx', 'high', 'GUZ'] 
// const newString: string = 'addedString';


// function makingArray(strings: string[], newStrings: string[]): string[] {
//     const trimmed = strings.map(trim => trim.trim())
//     const lower = trimmed.map(word => word.toLowerCase())
//     lower.push(newString.toLowerCase());

//     return lower
// }
// console.log(makingArray(strings));
// // const newString = 'addedString';
// // console.log(makingArray(newString));








// const numbers = [1, 2, 5, 10, 15, 20];

// function multiply(numbers: number): number[] {
//     const times3 = numbers.map(num => num * 3)
//     console.log(times3);
//     const filtered = times3.filter(num => 10 < num)
//     const sort = filtered.sort((a,b) => b - a)
//     const sum = sort.reduce((acc, num) => acc + num, 0);
//     return sum
// }

// console.log(multiply(numbers));












// Aufgabe: Arbeiten mit Zeichenketten

// Du hast ein Array von Zeichenketten, die Namen von Städten enthalten. Deine Aufgabe ist es, eine Funktion zu schreiben, die:

// 	1.	Alle Zeichenketten trimmt (d.h. Leerzeichen am Anfang und Ende entfernt).
// 	2.	Die Zeichenketten alphabetisch sortiert.
// 	3.	Die ersten Buchstaben jeder Stadt in Großbuchstaben umwandelt.
// 	4.	Alle Städte in eine einzige Zeichenkette zusammenfügt, wobei die Städte durch Kommas getrennt sind.



// const citiesArray = ['  berlin', 'zypErn', 'mUnich  ', 'Hamburg ', ' frankfurt'];

// function cityClean(city: string[]): string[] {
//     const trimmed = city.map(city => city.trim().toLowerCase())
//     const sort = trimmed.sort((a,b) => a.localeCompare(b))
//     const makeBig = sort.map(city => city.charAt(0).toUpperCase() + city.slice(1))
//     return makeBig
// }
// console.log(cityClean(citiesArray));













const arrayNumber: number[] = [86,76,6,987,632,98554,7867]

function sortingMachine(): number[] {               
    return arrayNumber.sort((a,b) => a-b)
}
console.log(sortingMachine());
