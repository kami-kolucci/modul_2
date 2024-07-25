// Array-TS-Level-1_14 (copy)


// const oldHollywoodActors: string[] = ['Marlon Brando', 'Audrey Hepburn', 'Elizabeth Taylor', 'Cary Grant', 'Paul Newman', 'Doris Day']

// const actorsReference = oldHollywoodActors
// actorsReference.push("Marilyn Monroe") 
// console.log(actorsReference);
// console.log(oldHollywoodActors);

// const sliceOldHollywoodActors: string[] = oldHollywoodActors.slice()
// sliceOldHollywoodActors.shift()
// console.log(sliceOldHollywoodActors);

// const spread: string[] = [...sliceOldHollywoodActors]

// console.log(spread);







// Array-TS-Sort-Level-1_3 (sort)


// let numArray1: number[] = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];
// const sortiert: number[] = numArray1.sort()

// console.log(sortiert);

// const richtigSortiert: number[] = numArray1.sort((a: number, b: number) => b-a)
// console.log(richtigSortiert);








// Array-TS-Sort-Level-2_3 (slice)

// const oldPainters: string[] = ["Caspar David Friedrich", "Mary Cassatt", "Rosa Bonheur", "Francisco de Goya","Edouard Manet"]

// const newerPainters: string[] = ["Pablo Picasso", "Salvador Dalí", "Frida Kahlo", "Georgia O'Keeffe"]

// const femalePainters1 = oldPainters.slice(1, 2)
// const femalePainters2 = oldPainters.slice(2, 3)
// const femalePainters3 = newerPainters.slice(2,3)
// console.log(femalePainters3);

// const allFemalePainters = [...femalePainters1, ...femalePainters2, ...femalePainters3]
// console.log(allFemalePainters);








// Array-TS-Level-3_1    ------  Find!


const artWork: string[] = ["     Die Sternennacht - Vincent van Gogh",
    "Guernica - Pablo Picasso",
    "Die Geburt der Venus - Sandro Botticelli",
    "Die Nachtwache - Rembrandt",
    "Die Mona Lisa - Leonardo da Vinci",
    "Die Kartoffelesser - Vincent van Gogh",
    "Die Schrei - Edvard Munch",
    "Das letzte Abendmahl - Leonardo da Vinci",
    "Die freudige Botschaft - James Tissot",
    "Der Garten der Lüste - Hieronymus Bosch"]


const suche: string | undefined = artWork.find((searching) => searching === "Die Geburt der Venus - Sandro Botticelli")
console.log(suche);

if (suche === undefined) {
    
    console.log('Artwork [artworkName] not found');
} else {
   
    console.log("'    Die Sternennacht' wurde von Vincent van Gogh im Jahre 1889 gemalt'");
    
}


const artworkDates: string[] = [
    "Die Sternennacht - 1889",
    "Guernica - 1937",
    "Die Geburt der Venus - 1486",
    "Die Nachtwache - 1642",
    "Die Mona Lisa - 1503",
    "Die Kartoffelesser - 1885",
    "Der Schrei - 1893",
    "Das letzte Abendmahl - 1495",
    "Die freudige Botschaft - 1885",
    "Der Garten der Lüste - 1505"
];

if (suche) {
    const artistAndTitle = suche.split(" - ")
    // console.log(artistAndTitle);
    console.log(artistAndTitle[0]);
    console.log(artistAndTitle[1]);
    const title = artistAndTitle[0];
    const artist = artistAndTitle[1];

const zusammen = title + artist;
    console.log(zusammen);

}









// Array-TS-Sort-Level-2_1 umkehren


// const umkehren: string[] = ["Ella", "mag", "alle", "Bohnen"]
// umkehren.reverse()
// console.log(umkehren);





