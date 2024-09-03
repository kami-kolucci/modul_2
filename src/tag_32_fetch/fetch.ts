// const galleryOutput = document.getElementById('gallery') as HTMLDivElement




// fetch('https://picsum.photos/v2/list')
//     .then((resp: Response) => {
//         if (!resp.ok) {
//             console.error('then error')
            
//         }
//         return resp.json()
//     })
//     .then((data) => { 
//         const gallery = document.getElementById('gallery');
//         gallery.style.display = 'flex';
//         gallery.style.flexWrap = 'wrap';
       
//         data.forEach(item => {
//             const figure = document.createElement('figure');
//             figure.innerHTML = `<img src="${item.download_url}" " style="width: 300px; height: 200px">
//                                <p style="text-align: center;">${item.author}</p>`
//             gallery.appendChild(figure);
            
//         })

//     })
//     .catch((error: Error) => {
//         console.error(error);
//     })








// fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
// .then((resp: Response) => {
//     if (!resp.ok) {
//         console.error("error");
        
//     }
//     return resp.json()
// })
// .then((comments) => {
//     comments.forEach((comment: { email: string }) => {
//         console.log(comment.email);
//     })
// })
// .catch((error: Error) => {
//            console.error(error);
// })











fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
.then((resp: Response) => {
    if (!resp.ok) {
        console.error("error");
        
    }
    return resp.json()
})

.then((all) => {
    console.log("alle eintraege", all);

    const id = Math.max(...all.map((item: { id: number }) => item.id));
    console.log(id);

    let longestBody = "";
    all.forEach((item: { body: string }) => {
        if (item.body.length > longestBody.length) {
            longestBody = item.body;
        }
    });

    console.log("Längster Body:", longestBody);
})
.catch((error: Error) => {
    console.error(error);
});