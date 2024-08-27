// import IStudent from "./student";

// function processStudent(student: IStudent): void {
//     console.log(`processing ${student.name} is ${student.age} old and in the ${student.grade} grade`);
// }

// const student1: IStudent = {
//     name: "xy",
//     age: 43,
//     grade: 2
// }

// processStudent(student1);






// OOP-UnionType-Level-1_1

// type Result = "success" | "error" | "pending";

// const result1 = "pending"

// function handleResult(result: Result): void {
//     switch (result) {
//         case "success":
//         console.log('you were sucessful');
//         break
//         case "error":
//         console.log("you have an error");
//         break
//         case "pending":
//         console.log('its pending');
//         break
//         default:
//             console.log("unknown");
//     }
// }

// handleResult(result1)



// OOP-IntersectionType-Level-1_1

// import mix1 from "./alcohol";

// console.log(mix1);








// TS-ErrorHandling-Level-2_1

function generatNumber(): number {
    const randomNumber = Math.floor(Math.random() * 100) + 1

    if (randomNumber > 49) {
        throw new Error(`${randomNumber} Number is too big`)
    }

    console.log(randomNumber);
    return randomNumber
}

try {
    generatNumber();
} catch (error) {
    console.error((error as Error).message)
}


// const allNumbers: number[] = []





// for (let i = 0; i < 10; i++) { 
//     allNumbers.push(generatNumber());
// }

// console.log(allNumbers);

