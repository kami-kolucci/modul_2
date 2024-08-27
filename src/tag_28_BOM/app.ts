// const timeCount = window.setTimeout(() => {
//     console.log("time's up");
// }, 2500)

// clearInterval(timeCount)




let counter = 0;

const divCounter = document.getElementById("countdown") as HTMLDivElement

const timeCount = setInterval(() => {
  counter++;
  if (counter <= 5) {
    console.log("counting");
    divCounter.innerText = counter.toString();
  } else {
    clearInterval(timeCount);
    divCounter.innerText = 'boom'
    console.log("finish");
  }
}, 700);


















// Bom-TS-Level-1_2

// const button = document.getElementById('btn')
// button?.addEventListener('click', () => {
//     // console.log('wurde geklickt');

// let counter = 100
// const countingDown = setInterval(() => {
//     counter--
//     document.querySelector('.zeit').textContent = `${counter}`
//     if (counter === 0) {
//         clearInterval(countingDown)
//     }
// }, 100)
// })






// Bom-TS-Level-1_3

// const button = document.getElementById('btn')
// button?.addEventListener('click', () =>{
//     const userLanguage = window.navigator.language;
//     const userAgent = window.navigator.userAgent;
//     const platform = window.navigator.platform;
//     const screenWidth = window.screen.width;
    
    


// const createDiv = document.createElement('div')

// const p1 = document.createElement('p')
// p1.innerText = `user Language: ${userLanguage}`;
// createDiv.appendChild(p1)

// const p2 = document.createElement('p')
// p2.innerText = `user agent: ${userAgent}`;
// createDiv.appendChild(p2)

// const p3 = document.createElement('p')
// p3.innerText = `platform: ${platform}`;
// createDiv.appendChild(p3)

// const p4 = document.createElement('p')
// p4.innerText = `screen width: ${screenWidth}`;
// createDiv.appendChild(p4)

// document.body.appendChild(createDiv)

// })









// Bom-TS-Level-2_1

// const coundtDownElt = document.getElementById("count");

// if (coundtDownElt) {
  
//   let counter = 10;

//   const interval = setInterval(() => {
//     counter--;
//     coundtDownElt.innerText = counter.toString();

//     if (counter === 0) {
//         document.body.style.display = "none";
//       clearInterval(interval);
//     }
//   }, 500);
// }