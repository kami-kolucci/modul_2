// function checkAge(): void {
//     const age: number = 65

//     if (age >= 18) {
//         console.log("volljaehrig");
//     } else {
//         console.log("minderjaehrig");
//     }
// }
// checkAge()



// function checkAge(age: number): void {


//     if (age >= 18) {
//         console.log("volljaehrig");
//     } else {
//         console.log("minderjaehrig");
//     }
// }
// checkAge(87)


// // function checkMark(grade: number): void {
    
// //     if (grade > 80) {
// //         console.log("sehr gut");
// //     } else if (grade > 60){
// //         console.log("ok");
// //     } else {
// //         console.log("befriedigend");
// //     }
// // }

// // checkMark(90)












// // const input = document.getElementById('input') as HTMLInputElement
// // const button = document.getElementById('button') as HTMLButtonElement
// // const result = document.getElementById('result')

// // function checkWeather(): void {
// //     const weatherCondition = input.value

// //     if (weatherCondition === 'sun') {
// //         document.getElementById('result').innerText = "Sonnig, schön rausgehen!";
// //     } else if (weatherCondition === 'rainy') {
// //         document.getElementById('result').innerText = "Regnerisch, vielleicht besser drinnen bleiben.";
// //     } else if (weatherCondition === "cloudy") {
// //             document.getElementById('result').innerText = "Bewölkt, vielleicht ein Regenschirm mitnehmen.";
// //         } else {
// //             document.getElementById('result').innerText = "Unbekannte Wetterbedingung.";        
// //     }
// // }

// // button?.addEventListener('click', (event: MouseEvent) => {
// //     event.preventDefault()
// //     checkWeather()
// // })








// const input = document.getElementById('input') as HTMLInputElement;
// const button = document.getElementById('button') as HTMLButtonElement;
// const result = document.getElementById('result');

// function checkWeather(): void {
//     const weatherCondition = input.value;

//     let message: string

//     if (weatherCondition === 'sun') {
//         message = "Sonnig, schön rausgehen!";
//     } else if (weatherCondition === 'rainy') {
//         message = "Regnerisch, vielleicht besser drinnen bleiben.";
//     } else if (weatherCondition === "cloudy") {
//         message = "Bewölkt, vielleicht ein Regenschirm mitnehmen.";
//     } else {
//         message = "Unbekannte Wetterbedingung.";
//     }

    
//     const paragraph = document.createElement('p');
//     paragraph.textContent = message;

    
//     result?.replaceChildren(paragraph);
// }

// button?.addEventListener('click', (event: MouseEvent) => {
//     event.preventDefault();
//     checkWeather();
// });


















// const input = document.getElementById('input') as HTMLInputElement
// const button = document.getElementById('button') as HTMLButtonElement
// const result = document.getElementById('result')


// function showConditions(): void {
//     // const weather = input.value
//     const weather = (input as HTMLInputElement).value
//     let text: string
//     if (weather === "sun") {
//         text = "super sonnenschein"
//     } else if (weather === "cloudy") {
//         text = 'woow so cloudy today'
//     }   else if (weather === 'rainy') {
//         text = 'its raining'
//     }   else {
//         text = "unbekannt"
//     }

//     const printText = document.createElement('p')
//     printText.innerText = text

//     result?.replaceChildren(printText)

// }


// button?.addEventListener('click', (event: MouseEvent) => {
//     event.preventDefault()
//     showConditions()
// })












// function checkAge(age: number): void {
    
//     if (age > 65) {
//         console.log('rentner');
//     } else if (age >= 18) {
//         console.log('volljaherig');
//     } else if (age > 1) {
//         console.log('kind');
//     }
    
// }
// checkAge(40)






