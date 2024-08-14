
const travelerList: string [] = ["shoe", 'towel', 'sunsreen', 'guide']

travelerList.push('ball')


const copiedTravelList: string [] = [...travelerList]
console.log(copiedTravelList);


function showArray() {
    console.log(copiedTravelList);
}


function newList() {
    const listIt = document.getElementById('input')
    const writeItDown = listIt.value
    if (writeItDown) {
        copiedTravelList.push(writeItDown)
        listIt.value = ''; 
        showArray(); 
    }
   
}

const addButton = document.getElementById('addButton') as HTMLButtonElement;
addButton.addEventListener('click', newList);
















