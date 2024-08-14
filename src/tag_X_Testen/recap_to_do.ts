const toDoListItems: string[] = [];

function addItem(todoElement: string, atTheBack: boolean): void {
  if (atTheBack) {
    toDoListItems.push(todoElement);
  } else {
    toDoListItems.unshift(todoElement);
  }
}

// todos hinzufuegen
addItem("Gassi gehen", false);
//console.log(toDoListItems);

addItem("Hunde streicheln", false);
//console.log(toDoListItems);

addItem("Hunde fuettern", false);
//console.log(toDoListItems);

addItem("kochen", true);
console.log(toDoListItems);

function removeItem(atTheBack: boolean): void {
  if (atTheBack) {
    toDoListItems.pop();
  } else {
    toDoListItems.shift();
  }
}

// removeItem(false);
// console.log(toDoListItems);

function addItemAt(toDoItem: string, index: number): void {
  toDoListItems.splice(index, 0, toDoItem);
}

addItemAt("Musik hoeren", 2);
console.log(toDoListItems);

function removeItemAt(indexToRemove: number): void {
  toDoListItems.splice(indexToRemove, 1);
}

removeItemAt(2);
console.log(toDoListItems);

function askForUserInput(): void {
//   let userInput = window.prompt("Bitte 5 todos, getrennt durch komma");
//   console.log(userInput);

  if (userInput) {
    const itemsArray: string[] = userInput.split(",");
    console.log(itemsArray);

    if (itemsArray.length === 5) {
      toDoListItems.push(itemsArray[0].trim());
      toDoListItems.push(itemsArray[1].trim());
      toDoListItems.push(itemsArray[2].trim());
      toDoListItems.push(itemsArray[3].trim());
      toDoListItems.push(itemsArray[4].trim());
      console.log(toDoListItems);
    } else {
      console.error("Bitte GENAU 5 Todos eingeben!!!");
    }
  } else {
    console.error("Eingabe war leer. Bitte 5 todos eingeben");
  }
}

askForUserInput();
