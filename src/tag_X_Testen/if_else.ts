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







// function checkAge(age: number): void {
    

//     if (age >=0 && age <= 12) {
//         console.log("kind");
//     } else if (age >=13 && age <=17) {
//         console.log("jungendlicher");
//     } else if (age >= 18 && age <= 64) {
//         console.log("erwachsener")
//     } else if (age > 65) {
//         console.log("senior")
//     } else {
//         console.log("Ungültiges Alter");
//     }
// }

// checkAge(4)




// function checkEligibility(age: number, hasTicket: boolean): void {
//     if (age <= 18) {
//         console.log("zu jung");
//     } else if (hasTicket === false) {
//         console.log("kein ticket vorhanden")
//     } else if (age >= 18 && hasTicket === true) {
//         console.log("willkommen auf dem event");
//     }
// }

// checkEligibility(19, false)





// function checkEligibility(age: number, hasTicket: boolean): void {
//     if (age <= 18) {
//         console.log("zu jung");
//     } else if (!hasTicket) {
//         console.log("kein ticket vorhanden")
//     } else if (age >= 18 && hasTicket) {
//         console.log("willkommen auf dem event");
//     }
// }

// checkEligibility(19, false)





// function checkVIPAccess(age: number, hasTicket: boolean, dresscode: string, vipStatus: boolean): void {
//     if ( vipStatus === true && age >= 21) {
//         console.log("willkommen vip");
//     } else if  (age <= 20) {
//         console.log("du musst 21 jahre alt sein")
//     } else if ( hasTicket === false) {
//         console.log("du brauchst ein gueltiges ticket")
//     }  else if (dresscode === "sport") {
//         console.log("kleiderordnung nicht eingehalten")
//     }
//     else if (dresscode === "casual" || dresscode || "elegant") {
//         console.log("kleiderordnung in ordnung. willkommen")
//     }

   
// }
// checkVIPAccess(22,true,"sport", true)




// function checkTem(tem: number): void {
//     if (tem >= 31) {
//         console.log("too hot");
//     } else if (tem >= 20 && tem <= 30) {
//         console.log("cozy");
//     } else {
//         console.log("too cold"); 
//     }
// }
// checkTem(38383)






// function giveDiscount(sum: number): void {
//     if (sum > 500) {
//         // console.log(sum * 0.8);
//         const discount = sum * 0.2
//         const newPrice = sum - discount
//         console.log(`preis mit discount ${newPrice}`);
//     } else if (sum >= 200) {
//         // console.log(sum * 0.9);
//         const discount = sum * 0.1
//         const newPrice = sum - discount
//         console.log(`preis mit discount ${newPrice}`)
//     } else {
//         console.log(sum);
//     }
// }

// giveDiscount(499)









// function giveDiscount(price: number, discountCode: string): void {
//   let endprice = price;   
//   if (discountCode === "summer" ) {
//          endprice = endprice * 0.9
//          console.log(endprice);   

       
//     } else if (discountCode === "winter") {
//        endprice = endprice * 0.8
//        console.log(endprice); 
  

//     } else if (discountCode === "fall") {
//        endprice = endprice * 0.85
//        console.log(endprice);   

//      }
//      if (price > 100) {
//        endprice = endprice * 0.95; 
//      }
//      console.log(endprice);   

// }


// giveDiscount(110, "winter")













// function bonusCal(salary: number, yearBon: number, performanceBon: string, sectionBon: string) {
// let endSalary = salary

//   if (yearBon < 2) {
//    endSalary *= 1.05;
//   } else if (yearBon <= 5) {
//     endSalary *= 1.08;
//   } else if (yearBon > 5) {
//     endSalary *=  1.15;
//   }

//   if (performanceBon === "ex") {
//     endSalary *= 1.05;
//   } else if (performanceBon === "gut") {
//     endSalary *= 1.07; 
//   }


//   if (sectionBon === "verkauf") {
//     endSalary *= 1.02; 
//   } else if (sectionBon === "ent") {
//     endSalary *= 1.01; 
//   }



// let bonus =  endSalary - salary
// console.log(bonus);
// }

// bonusCal(2500,2, "ex","ent");




// Aufgabe 4: Rabattsystem für den Online-Shop

// Erstelle eine Funktion, die den Einkaufswert und den Mitgliedsstatus eines Kunden als Eingabe erhält. Berechne abhängig davon den finalen Preis nach Rabatt:

// 	•	Einkaufswert über 100 Euro:
// 	•	Mitglied: 20% Rabatt
// 	•	Nicht-Mitglied: 10% Rabatt
// 	•	Einkaufswert zwischen 50 und 100 Euro:
// 	•	Mitglied: 10% Rabatt
// 	•	Nicht-Mitglied: 5% Rabatt
// 	•	Einkaufswert unter 50 Euro:
// 	•	Mitglied: 5% Rabatt
// 	•	Nicht-Mitglied: Kein Rabatt




// function priceCheck(price: number, member: boolean): void {
//   let priceDiscount = price
//   if (price >= 100 && member) {
//     priceDiscount = price * 0.8
//   } else if (price >= 100) {
//     priceDiscount = price * 0.9
//   } else if (price >= 50 && price < 100 && member) {
//     priceDiscount = price * 0.9
//   } else if (price >= 50 && price < 100) {
//     priceDiscount = price * 0.95
//   } else if (price < 50 && member) {
//     priceDiscount = price * 0.95
//   }
//   console.log(`rabatt preis:${priceDiscount}`);
// }

// priceCheck(200, true)






// Aufgabe 2: Passwortkomplexität prüfen

// Schreibe eine Funktion, die die Komplexität eines Passworts bewertet. Die Funktion erhält einen String und überprüft:

// 	•	Wenn das Passwort länger als 12 Zeichen ist und mindestens 2 Sonderzeichen, 2 Zahl und 2 Großbuchstaben enthält: “Sehr stark”
// 	•	Wenn das Passwort länger als 8 Zeichen ist, aber weniger als 12, und mindestens 1 Sonderzeichen und 1 Zahl enthält: “Stark”
// 	•	Wenn das Passwort zwischen 6 und 8 Zeichen ist und nur Buchstaben und Zahlen enthält: “Schwach”
// 	•	Ansonsten: “Ungültig”





function passwordCheck(): void {
    const password: string = "Kfddss4!@dsd"

    const specialSign2 = /([!@#$%^&*(),.?":{}|<>].*[!@#$%^&*(),.?":{}|<>])/
    const uppercaseSearch2 = /[A-Z].*[A-Z]/
    const numberSearch2 =  /[0-9].*[0-9]/
    const specialSign1 = /[!@#$%^&*(),.?":{}|<>]/
    const uppercaseSearch1 = /[A-Z]/
    const numberSearch1 = /[0-9]/
    const noSpecialSign = /^[A-Za-z0-9]*$/



    if (password.length >= 12 && specialSign2.test(password) && uppercaseSearch2.test(password) && numberSearch2.test(password)) {
        console.log("sehr sicher");
    } else if (password.length >= 8 && password.length <= 12 && specialSign1.test(password) && uppercaseSearch1.test(password) && numberSearch1.test(password)) {
        console.log("sicher");  
    } else if (password.length >= 6 && password.length <= 8 && noSpecialSign.test(password)) {
        console.log("schwach")
    } else {
        console.log("passwort ungueltig");
    }
}
passwordCheck()