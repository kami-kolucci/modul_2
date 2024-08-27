const meinStringSatz: string = "Hallo Leute, heute ist ein schoener Tag";

// 01 ---- length

const meinSatzLength: number = meinStringSatz.length;
console.log({ meinSatzLength });

// 02 ---- indexOf ---- ziegt uns an wo ein bestimmtes Zeichen beginnt

const indexOfZeichen_o: number = meinStringSatz.indexOf("o");
console.log({ indexOfZeichen_o });

const indexofZeichen_zweites_l: number = meinStringSatz.indexOf("l", 2);
console.log(indexofZeichen_zweites_l);

//  03 ---- substring --- schneidet Abschnitt des Textes ab, basienend auf Startposition und Enposition

const HalloVariable: string = meinStringSatz.substring(0, 5);

console.log({ HalloVariable });

const schoenerTagVariable: string = meinStringSatz.substring(24);

console.log({ schoenerTagVariable });

//  04 --- slice --- schneidet Abschnitt des Textes ab, basierend auf Startposition und Endposition

const TagVariable: string = meinStringSatz.slice(36, 42);
console.log({ TagVariable });

//  05 --- trim --- entfernt alle Leerzeichen am Anfang und Ende

const userEmailFromInput: string = "      joe@gmail.de";
console.log(userEmailFromInput);
const userEmailFromInputOhneLeerzeichen: string = userEmailFromInput.trim();
console.log(userEmailFromInputOhneLeerzeichen);

// 06 --- charAt --- Liefert uns das jeweilige Zeichen zurueck, das sich in einer Zeichenkette befindet

const gibZeichen_L_zurueck: string = meinStringSatz.charAt(6);
console.log({ gibZeichen_L_zurueck });

const einSong: string = "Paint it black";

const gibZeichen_b: string = einSong.charAt(9);
console.log({ gibZeichen_b });

// 07 --- include --- sag uns Bescheid mit true und falsa, ob ein Zeichen in einer Zeichenkette enthaelt

const obHalloexistiert: boolean = meinStringSatz.includes("Hallo");
console.log({ obHalloexistiert });

// 08 --- search --- Sucht nach einem Muster im Text und zeigt den Startpunkt des Wortes

const tag: number = meinStringSatz.search("Tag");
console.log({ tag });

// 09 --- replace --- Ersetzt einen Teil des Textes

const abendAnstattHeute: string = meinStringSatz.replace(
  "heute",
  "Heute abend"
);

console.log({ abendAnstattHeute });

//  10 --- toLowerCase - aendert alle Zeichen im Text zu Kleinbuchstaben

const meinStringSatzZuLowerCase: string = meinStringSatz.toLowerCase();

console.log(meinStringSatzZuLowerCase);

//  11 --- toUpperCase - aendert alle Zeichen im Text zu Grossbuchstaben

const meinStringSatzZuUpperCase: string = meinStringSatz.toUpperCase();

console.log(meinStringSatzZuUpperCase);

// 12 --- concat --- Verbindet zwei Texte

const hauptSatz: string = "ich freue mich, ";
const concatSatz: string = hauptSatz.concat(meinStringSatz);
console.log({ concatSatz });

console.clear();

const age: number = 20;
const einkommen: number = 105.6423737;

// 01 --- toString() --- wandelt eine Zahl in einen String um

const ageToString: string = age.toString();
console.log({ ageToString });

const einkommenInString: string = einkommen.toString();
console.log({ einkommenInString });

//  02 --- toFixed() --- wandelt eine Zahl in einem String um mit Anzahl der Nachkommenstelle

const einkommenInFixed: string = einkommen.toFixed(3);
console.log({ einkommenInFixed });

//  03 --- toPrecision --- wandet eine Zahl in einem String um aber nicht wie toFixed sondern faengt direkt mit 0 Positionen

const einkommenToPrecision = einkommen.toPrecision(3);
console.log({ einkommenToPrecision });

//  04 parseInt --- wandelt einen String in eine Ganze Zahl um

const birthday: string = "1990";
const tax: string = "17.55";
console.log({ birthday });
const birthdayAsNumber: number = parseInt(birthday);
console.log([birthdayAsNumber]);
const taxToNumber: number = parseInt(tax);
console.log(taxToNumber);

//  05 Number --- wir koennen sowohl Ganzzahl als auch Kommazahlen konventieren

const highNumberAsString = "434435435464665656.434993";
const highNumber: number = Number(highNumberAsString);
console.log({ highNumber });

console.clear;
class Subordinate {}
