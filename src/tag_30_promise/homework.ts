function homeOne(): Promise<string> {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            let homewordDone: boolean = true
            if (homewordDone) {
                resolve("homework 1 done")
            } else {
                reject('homework 1 not done')
            }
        }, 4000)
    })
}
console.log(homeOne());



function homeTwo(): Promise<string> {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            let homewordDone: boolean = true
            if (homewordDone) {
                resolve("homework 2 done")
            } else {
                reject('homework 2 not done')
            }
        }, 7000)
    })
}
console.log(homeTwo());




