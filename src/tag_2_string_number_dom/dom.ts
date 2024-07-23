const contentElement = document.getElementById('content')
console.log(contentElement);
if(contentElement) {
    contentElement.innerHTML = 'Steve sieht immer gut aus'
    contentElement.style.color = "red"
    contentElement.style.backgroundColor = 'pink'
} else {
    console.log('irgendwas laeuft falsch');
}


// querySelector

const boxElement = document.querySelector('.box')

