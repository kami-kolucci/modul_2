// import Alien from "./alien";

// const alien1 = new Alien('tum', 'planet x', 'galaxy x', 'blue')

// console.log(alien1);







// OOP-Class-TS-Level-1_5

// import Song from "./song";

// const song1 = new Song('love me', 'elton john', 253)
// const song2 = new Song('hate', 'nerd', 129)

// export class SongWithUnknownArtist extends Song {
//     constructor(title: string) {
       
//         super(title, "Unknown", 0)
//     }

   
//     setArtist(name: string): void {
//         this.artist = name;
//     }
// }









// OOP-Class-TS-Level-1_10
import Vocabulary from "./vocabulary";

const vocabulary1 = new Vocabulary(['hut', 'car', "finger"])

vocabulary1.addWord('wort1')
vocabulary1.addWord('wort2')
vocabulary1.displayAll()