const firstName: string = "Roland ";
const lastName: string = "Fisch";

const firstNameLength: number = firstName.length;
console.log(firstNameLength);

const lastNameLength: number = lastName.length;
console.log(lastNameLength);

const fullName: string = firstName.concat(lastName);
console.log(fullName);

// String-Methods-TS-Level-1_2

const earthQuote =
  "How inappropriate to call this planet Earth, when clearly it is Ocean.";

const searchingH: number = earthQuote.search("h");
console.log(searchingH);

const searchingEarth: number = earthQuote.search("Earth");
console.log(searchingEarth);

const searchingMoon: number = earthQuote.search("Moon");
console.log(searchingMoon);

// String-Methods-TS-Level-1_3

const oceanQuote: string =
  "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.";

const searchingSemi: number = oceanQuote.search(";");
console.log(searchingSemi);

const searchingGreen: number = oceanQuote.search("green");
console.log(searchingGreen);

// String-Methods-TS-Level-1_4

// const susisStatus: string = 'Susi is going to codingschool'
// const susi: string = susisStatus.slice(0, 4)
// console.log(susi);

// const is: string = susisStatus.slice(4, 7)
// console.log(is);

// const going: string = susisStatus.slice(7, 13)
// console.log(going);

// const to: string = susisStatus.slice(13, 16)
// console.log(to);

// const codingSchool = susisStatus.slice(17, 29)
// console.log(codingSchool);

// const divHTML = document.querySelector('.coding')
// if (divHTML) {
//     divHTML.innerHTML = `${susi} ${is} ${going} ${to} ${codingSchool}`;
// }

console.clear()

// String-Methods-TS-Level-1_5

const whereIsSusi: string = 'Susi is back from codingschool'
const  susi: string = whereIsSusi.substring(8, 24)
console.log(susi);

document.open()

document.write(susi+ "  " ) 
document.close()

// ?????????????????????

// String-Methods-TS-Level-1_6

// const susisJob: string = "Sam is working at codingschool"
// const sam: string = susisJob.substr(0, 3)
// console.log(sam);

// const is: string = susisJob.substr(4,7)
// console.log(is);
// ?????????????????????







// // String-Methods-TS-Level-1_7

// const samsStatus: string = "Sam is good at codingschool";

// const sam: string = samsStatus.replace("good", "bad");
// console.log(sam);

// document.write(sam + "  ");

// const samIsGoingToSchoolMixed1: string = "SAM is going to SCHOOL";
// console.log(samIsGoingToSchoolMixed1);









// // Number-Methods-TS-Level-1_2

// const numberIncome: number = 15.16698;
// const numberFixed: number = numberIncome.toFixed(2);
// console.log(numberFixed);



// const cutWord: string = "supercode";
// const stringNumber: string = Number(cutWord)
// console.log(stringNumber);


// // const cutSuper: string = cutWord.toFixed(2);





