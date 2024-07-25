// // ! Bonus


// console.clear()


// let counterHome: number = 0
// let counterAway: number = 0


// const homeElement = document.getElementById("home") ?? new HTMLElement()

// const plus_eins_home = document.getElementById("plus_eins_home")!

// const plus_zwei_home = document.getElementById("plus_zwei_home")!

// const plus_drei_home = document.getElementById("plus_drei_home")


// plus_eins_home.addEventListener("click", function (event: MouseEvent) {
//     event.preventDefault()
//     // counterHome = counterHome + 1
//     counterHome++
//     homeElement.textContent = counterHome.toString()
// })


// plus_zwei_home.addEventListener("click", function (event: MouseEvent) {
//     event.preventDefault()
//     counterHome += 2
//     homeElement.textContent = counterHome.toString()
// })


// plus_drei_home?.addEventListener("click", function (event: MouseEvent) {
//     event.preventDefault()
//     // counterHome = counterHome + 3
//     counterHome += 3
//     homeElement.textContent = counterHome.toString()
// })



// const resetElement = document.getElementById("reset") ?? new HTMLElement()


// resetElement.addEventListener("click", function (event: MouseEvent) {
//     event.preventDefault()
//     counterHome = 0
//     homeElement.textContent = counterHome.toString()
//     // location.reload()
// })





let numberHome: number = 0
let numberAway: number = 0

const homeScore = document.getElementById('home-score')!

const homePlus1 = document.getElementById('home-plus1')!
const homePlus2 = document.getElementById('home-plus2')!
const homePlus3 = document.getElementById('home-plus3')!

homePlus1.addEventListener('click', function (event: MouseEvent){
    event.preventDefault()
    numberHome += 1
    homeScore.textContent = numberHome.toString()
})








