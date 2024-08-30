function sayHello(name: string, callback: (message: string) => void): Promise <void> {
    return new Promise((resolve, reject) =>{
        const sayIt = `hello ${name}`
        callback(sayIt)
        
    })
}
    function greetingCallback(sayIt: string): void {
        console.log(sayIt);
    }

 const person1 = sayHello("peter", greetingCallback)
 const person2 = sayHello("lina", greetingCallback)
 const person3 = sayHello("juan", greetingCallback)

    
Promise.all([person1, person2, person3])
.then((resp) => {
    const result = document.createElement('p')
    result.innerText = "homework finished"
    document.body.appendChild(result)
}
)
.catch((error) => {
    console.error("failed",error);
})





