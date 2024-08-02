// Objekte-TS-Level-1_3

type Apple = {
  color: string;
  size: string;
};

let redApple: Apple = {
  color: "red",
  size: "big",
};

let greenApple: Apple = {
  color: "green",
  size: "small",
};

let yellowApple: Apple = {
  color: "yellow",
  size: "big",
};

let apples: Apple[] = [redApple, greenApple, yellowApple];

const sizeOrder = {
  small: 1,
  medium: 2,
  big: 3,
};

apples.sort((appleA, appleB) => {
  return sizeOrder[appleA.size] - sizeOrder[appleB.size];
});

console.log(apples);

apples.forEach((apple) => {
  console.log(apple.color);
});

console.log(apples.length);


let pinkApple: Apple = {
  color: "pink",
  size: "medium",
};

apples.push(pinkApple);

console.log(apples);

apples.push()



// Objekte-TS-Level-1_4
console.clear();


type Pet = {
    tiertyp: string;
    namen: string[];
  };
  
  let unsereHaustiere: Pet[] = [
    {
      tiertyp: 'Katze',
      namen: ['Gipsy', 'Nala', 'Dinky']
    },
    {
      tiertyp: 'Hunde',
      namen: ['Knöpfchen', 'Pinselchen', 'Droopy']
    }
  ];


  console.log(unsereHaustiere[0].namen[1]);
  console.log(unsereHaustiere[1].namen[2]);

  unsereHaustiere[0].namen[2] = "Pinky";

  console.log(unsereHaustiere);







//   Objekte-TS-Level-1_5

  type Lager = {
    schreibtisch: {
        schublade: string;
    };
    schrank: {
        "Obere Schublade": {
            Ordner1: string;
            Ordner2: string;
        };
        "Untere Schublade": string;
    };
};

let unserLager: Lager = {
    schreibtisch: {
        schublade: "Hefter"
    },
    schrank: {
        "Obere Schublade": {
            Ordner1: "Dokumente",
            Ordner2: "Geheimnisse"
        },
        "Untere Schublade": "Cola"
    }
};


console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schrank["Untere Schublade"]);
console.log(unserLager.schreibtisch.schublade);






// Objekte-TS-Level-1_6


type Musik = {
    kunstler: string;
    title: string;
    release_jahr: number;
    formate: string[];
    gold: boolean;
  };
  
  let meineTopVier: Musik[] = [
    {
      kunstler: 'The Beatles',
      title: 'Abbey Road',
      release_jahr: 1969,
      formate: ['LP', 'CD', 'MC', 'Download'],
      gold: true
    },
    {
      kunstler: 'Pink Floyd',
      title: 'Dark Side of the Moon',
      release_jahr: 1978,
      formate: ['CS', 'CD', 'LP', 'Download'],
      gold: true
    },
    {
      kunstler: 'Led Zeppelin',
      title: 'Led Zeppelin IV',
      release_jahr: 1971,
      formate: ['CS', 'LP', 'Download'],
      gold: true
    },
    {
      kunstler: 'Metallica',
      title: 'Kill ’Em All und Ride the Lightning',
      release_jahr: 1983,
      formate: ['LP', 'CD', 'MC', 'Download'],
      gold: true
    }
  ];


  console.log(meineTopVier[0].kunstler);
  console.log(meineTopVier[1].formate[3]);
  console.log(meineTopVier[1].gold);
  console.log(meineTopVier[2].release_jahr);
  console.log(meineTopVier[3].formate[2]);

let xy: Musik = {

  kunstler: 'xy',
      title: 'xxxxxx',
      release_jahr: 1983,
      formate: ['LP', 'CD', 'MC', 'Download'],
      gold: true

    }

    meineTopVier.push(xy)
    console.log(meineTopVier);



    meineTopVier.forEach(words => {
        if (words.kunstler === 'Metallica') {
            let finding = words.title.split(' ')
            finding.forEach(cut => {
                if (cut === 'Ride') {
                    console.log(cut);
                }
            });
          }
        });

        console.log(meineTopVier);
 

     






    // Objekte-TS-Level-2_2

    type PeriodActive = {
        start: number;
        end: number | string;
        extra?: number;
    };
    
    type Singer = {
        name: string;
        country: string;
        period_active: PeriodActive;
        genre: string;
    };
    
    const singers: Singer[] = [
        { name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
        { name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
        { name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B" },
        { name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock" },
        { name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica" },
        { name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock" },
        { name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop" },
        { name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock" },
    ];






  singers.sort((a, b) => {
    return a.name.localeCompare(b.name);
});


    console.log(singers);




    


