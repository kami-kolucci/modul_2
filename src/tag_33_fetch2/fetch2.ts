const url = 'https://jsonplaceholder.typicode.com/todos';

const showContent = document.getElementById("content") as HTMLDivElement;

function fetchAndDisplay(url: string) {
    fetch(url)
        .then((response: Response) => {
            if (!response.ok) {
                throw new Error('error with then');
            }
            return response.json();
        })
        .then((data: Itodo[]) => {
            const sortedData = data.sort((a, b) => a.title.localeCompare(b.title));
            showContent.innerHTML = createList(sortedData);
            searching(sortedData);
        })
        .catch((error: Error) => {
            console.error(error);
        });
}

fetchAndDisplay(url);

interface Itodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

function createList(data: Itodo[]): string {
    const resultAsString = data.map((data: Itodo) => {
        return `
          <p>userId: ${data.userId} </p>
          <p>id: ${data.id}</p>
          <p>title: ${data.title}</p>
          <p>completed: ${data.completed}</p>
        <br>
        <br>
        `;
    });
    return resultAsString.join("");
}


function searching(data: Itodo[]) {
    const searchInput = document.getElementById('search') as HTMLInputElement;

    searchInput.addEventListener('input', () => {
        const searchWord = searchInput.value.toLowerCase();
        
        const filtered = data.filter(item => item.title.toLowerCase().includes(searchWord));
        
        showContent.innerHTML = createList(filtered);
    });
}






















// function fetchAndDisplay(url: string) {
//     fetch(url)
//         .then((response: Response) => {
//             if (!response.ok) {
//                 throw new Error('error with then');
//             }
//             return response.json();
//         })
//         .then((data: Itodo[]) => {
            
//             showContent.innerHTML = createList(data);
//             searching(data);
//         })
//         .catch((error: Error) => {
//             console.error(error);
//         });
// }