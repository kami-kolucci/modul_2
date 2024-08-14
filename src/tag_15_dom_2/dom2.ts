const hacker = document.getElementById("hacker") as HTMLInputElement

console.log(hacker);

const showPassword = document.getElementById("show-password") as HTMLParagraphElement

hacker?.addEventListener("keyup", (event) => {
    // console.log(event.key);
    console.log(event.code);
    if (event.code) {
        // ! v1.
        // const result = event.code.replace("Key", "")
        // console.log(result);
        // ! v2.
        const result = event.code.slice(event.code.indexOf("k"))
        console.log(result);
        showPassword.innerText += result.toLowerCase()
    }
})
