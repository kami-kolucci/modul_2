// Array-TS-Level-1_1


// const bucketList: string[] = ['berlin', 'bern', 'basel', 'bruessel', 'bologna']
// console.log(bucketList[3]);

// const numberList: number[] = [9, 8, 4, 8]
// console.log(numberList);


// console.log(bucketList.length);


// bucketList.push('bonn', 'breslau')
// console.log(bucketList);

// bucketList.pop()
// console.log(bucketList);

// bucketList.shift()
// console.log(bucketList);


// bucketList.unshift('hamburg', 'essen')
// console.log(bucketList);
// console.log({bucketList});
// const favoriteCities = bucketList.slice(2, 5)
// // console.log({bucketList});
// console.log({favoriteCities});









// Array-TS-Level-1_10 (split)

// const futuramaQuote: string = "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards."

// const splitFuture = futuramaQuote.split("")
// console.log(splitFuture);






// bonus

const toDoItems: string[] = []

function addOn(atTheBack: boolean, doIt: string) {
    if (atTheBack) {
    doIt.push(doIt)
} else {
    doIt.unshift(doIt)
}
}


// function removeItem(delateIt: number) {

// }


function addItemAt(toDoItem: string, index: number)


