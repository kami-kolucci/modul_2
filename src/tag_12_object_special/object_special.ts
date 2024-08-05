type Employee = [number, string, string, number]

const nameFile: Employee[] = [
    [076, "Hans XY", "verkauf", 65780],
    [146, "frauke XY", "verkauf", 23753],
    [040, 'otto xy', "fahrer", 45780],
    [011, "mareike XY", "it", 85780],
    [298, "cosmo XY", "hr", 90007]
]

nameFile.forEach(employee => {
    console.log(`Nummer: ${employee[0]}, Name: ${employee[1]}, Abteilung: ${employee[2]}, Jahresgehalt: ${employee[3]}`);
});




// Enum-TS-Level-1_1

enum Weekday {
    Monday  = "Monday", 
    Tuesday, 
    Wednesday, 
    Thursday, 
    Friday, 
    Saturday, 
    Sunday 

}

console.log(Weekday[1]);
console.log(Weekday.Monday);

console.clear();

// Enum-TS-Level-1_2

enum Size {
    Small,
    Medium,
    Big,
    Supersize
}

enum PizzaIngredients {
    Salami,
    Cheese,
    Olives,
    Onions,
    Jalapenos
}

type Pizza = {
    size: Size;
    ingredients: PizzaIngredients[];
}


const menu1: Pizza = {
    size: Size.Supersize,
    ingredients: [PizzaIngredients.Onions, PizzaIngredients.Cheese, PizzaIngredients.Olives]
}

console.log(menu1);

console.clear();

// Enum-TS-Level-2_1



enum HtmlError {
    OK = 200,
    Redirect = 300,
    BadRequest = 400,
    InternalServerError = 500
}

function showHtmlError() {
    const randomNumber = Math.floor(Math.random() * 5) + 1
    
    let giveError: HtmlError

    switch (randomNumber) {
    case 1:
    case 2:
        giveError = HtmlError.OK
        break
    case 3:
        giveError = HtmlError.Redirect
        break
    case 4:
        giveError = HtmlError.BadRequest
        break
    case 5:
        giveError = HtmlError.InternalServerError

        default:
            
            
}
console.log(giveError);
console.log(randomNumber);
}

showHtmlError();



