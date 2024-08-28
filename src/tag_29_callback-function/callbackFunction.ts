// function addNumbers(a: number, b: number, einCallBackFunc?: (sum: number) => number): void {
//      const result = a + b 
    
// if (einCallBackFunc) {
//     einCallBackFunc(result)
// }



// }
// // addNumbers(8,9, (sum) => {
// //     console.log(sum)})

// function showAlert(sum: number): void {
//     alert(sum)
// }

// addNumbers(8, 9, showAlert);











// callback-TS-Level-1_4
// const numbers: number[] = [8,77,5,900,65]

// function showMaximum(numbers: number[], callbackFunction?: (max: number) => number): void {
//     const maxNum = Math.max(...numbers)
    

//     if (callbackFunction) {
//         console.log(callbackFunction(maxNum));
//     }
    
// }
// const callback = (max: number) => max * 10;
// showMaximum(numbers, callback); 









// callback-TS-Level-2_1

// function calculateSumAndMore(a: number, b: number, callback1?: (result1: number) => number, callback2?: (result2: number) => number) {
//     const result = a+b
//     if (callback1) {
//         const result1 = callback1(sum)
//     }
// }

// calculateSumAndMore()









// callback-TS-Level-3_2

function randomNum(): string {
    return (Math.floor(Math.random() * 100) + 1).toString()
}
console.log(randomNum());


function randomString(): string {
    const stringCollection: string[] = ['welt','ball','gast','😊','👺','💩']
    const findingString = Math.floor(Math.random() * stringCollection.length)
    return stringCollection[findingString]
}
console.log(randomString());

function randomBoolean(): string {
    return Math.random() < 0.5 
}

console.log(randomBoolean());


function htmlOutput(output: () => string): void {
    const titel = document.getElementById('headline')
    if (titel) {
        titel.textContent = output()
    }
}

document.getElementById('button')?.addEventListener('click', () => {
    const random = [randomNum, randomString, randomBoolean]
    const randomElement = random[Math.floor(Math.random() * random.length)]

    htmlOutput(randomElement)
})