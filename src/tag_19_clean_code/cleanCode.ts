
function howMuch(sumWord: string) {
    let letter = 0
    let space = 0
    let vocal = 0

    for (let index = 0; index < sumWord.length; index++) {
        if (sumWord[index] >= 'A' && sumWord[index] <= "Z") letter++
        else if (sumWord[index] === " ") space++
        else if ('a,e,i,o,u,A,E,I,O,U'.includes(sumWord[index])) vocal++;
    }
    return { letter, space, vocal }
}
console.log(howMuch("hLih gOUuih"));





















// function counting(word: string) {
//     let letter = 0,
//         space = 0,
//         vocal = 0;
    
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] >= 'A' && word[i] <= 'Z') letter++;
//         else if (word[i] === ' ') space++;
//         else if ('aeiouAEIOU'.includes(word[i])) vocal++;
//     }

    
//     return { letter, space, vocal }; 
// }



// document.getElementById('letter')?.addEventListener('click', () => {
//     const inputText = (document.getElementById('input') as HTMLInputElement).value;
//     const result = counting(inputText);
//     (document.getElementById('output') as HTMLDivElement).innerText = `Großbuchstaben: ${result.letter}`;
// });

// document.getElementById('space')?.addEventListener('click', () => {
//     const inputText = (document.getElementById('input') as HTMLInputElement).value;
//     const result = counting(inputText);
//     (document.getElementById('output') as HTMLDivElement).innerText = `Leerzeichen: ${result.space}`;
// });

// document.getElementById('vocal')?.addEventListener('click', () => {
//     const inputText = (document.getElementById('input') as HTMLInputElement).value;
//     const result = counting(inputText);
//     (document.getElementById('output') as HTMLDivElement).innerText = `Vokale: ${result.vocal}`;
// });
