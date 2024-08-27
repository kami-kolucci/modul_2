
document.getElementById('submit-button')?.addEventListener('click', () => {
    const inputSum = Number((document.getElementById('input-sum') as HTMLInputElement).value)
    const inputPax = Number((document.getElementById('input-pax') as HTMLInputElement).value)
    const ranking: string = (document.getElementById('input-ranking') as HTMLInputElement).value.toLowerCase()
    let divided: number = inputSum / inputPax
    if (ranking === "schlecht") {
        divided = (divided * 0.2) + divided
    }   else if (ranking === "mittel") {
        divided = (divided * 0.1) + divided
    }   else if (ranking === "gut") {
        divided = (divided * 0.2) + divided
    }   
        else "eingabe pruefen"
        console.log(divided);
})



