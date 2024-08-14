
// DOM-TS-Level-1_2

// const info = document.getElementById("info") as HTMLDivElement
// info.innerHTML = '<h1>Hello World</h1>  <h2>How are you?</h2>'

// const container = document.getElementById('container') as HTMLDivElement

// const p = document.createElement('p')
// p.innerText = 'This is a paragraph'
// container.appendChild(p)

// const input = document.createElement('input')
// input.type = "text"
// container.appendChild(input)



// DOM-TS-Level-1_3

// const img1 = document.createElement('img') as HTMLImageElement
// img1.setAttribute("src", "https://picsum.photos/id/237/200/300")
// gallery.appendChild(img1)

// const img2 = document.createElement('img') as HTMLImageElement
// img2.setAttribute("src", "https://picsum.photos/id/237/200/300")
// gallery.appendChild(img2)

// const img3 = document.createElement('img') as HTMLImageElement
// img3.setAttribute("src", "https://picsum.photos/id/237/200/300")
// gallery.appendChild(img3)








// Dom-Elements-TS-Level-1_2

 
// const button = document.querySelector('button.example')

// button?.addEventListener('click', () => {
//     const elements = document.querySelectorAll('.example')
//     elements.forEach(element => {
//         element.style.backgroundColor = "red"
//     })
// })
















// Dom-Elements-TS-Level-1_1

const input = document.getElementById('inputText') as HTMLInputElement
const button = document.querySelector('button') as HTMLButtonElement
const list = document.querySelector('#myList') as HTMLUListElement

button.addEventListener('click', () =>{
    const addWord = input.value.trim() 

    if (addWord) {
        const newList = document.createElement('li')
        newList.textContent = addWord
        list.appendChild(newList)
        input.value = ''
    }


})







