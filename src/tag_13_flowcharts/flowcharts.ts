
document.getElementById('submit-button')?.addEventListener('click', () => {
    const inputSum = Number((document.getElementById('input-sum') as HTMLInputElement).value)
    const inputPax = Number((document.getElementById('input-pax') as HTMLInputElement).value)
    const ranking: string = (document.getElementById('input-ranking') as HTMLInputElement).value
    let divided: number = inputSum / inputPax
    if (ranking === "Schlecht") {
        divided = (divided * 0.2) + divided
    }   else if (ranking === "Mittel") {
        divided = (divided * 0.1) + divided
    }   else if (ranking === "Gut") {
        divided = (divided * 0.2) + divided
    }   
        else "eingabe pruefen"
        console.log(divided);
})



