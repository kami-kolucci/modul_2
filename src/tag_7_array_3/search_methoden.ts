const drinks = ['Coca-Cola', 'Apfelsaft', 'Pepsi', 'Traubensaft', 'Sprite', 'Orangensaft', 'Red Bull Energy Drink', 'Fanta']


const upperDrinks: string[] = drinks.map((drink: string) => drink.toUpperCase())
console.log(upperDrinks);


const iLove: string[] = drinks.map((drink: string) => {return "I love " + drink})
console.log(iLove);









// Array-TS-Iteration-Level-1_4 (map)

let fahrenheit: number[] = [0, 32, 45, 50, 75, 80, 99, 120];








// Array-TS-Iteration-Level-1_5 (map)


let checkNumber: number[] = [
    18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78
];


const calculate = (num: number): number => {
    if (num % 3 === 0) {
        return num + 100
    }   else {
        return num
    }
}

const newNumber: number[] = checkNumber.map(calculate)
console.log(newNumber);






// Array-TS-Iteration-Level-1_6 (map oder forEach)


let album: string[] = [
    "holidays.jpg",
    "Restaurant.jpg",
    "desktop",
    "rooms.GIF",
    "DOGATBEACH.jpg"
];


const mapAlbum = album.map((letter: string) => {
    if (letter.includes('.')) {
        
    }
}
)



const hitsRated = eightiesHits.map((hit: string) => {




