import IceCreamFlavor from "./classes/IcecreamFlavor";

//HTML Elemente
const flavorInput = document.querySelector("#flavor") as HTMLInputElement;
const priceInput = document.querySelector("#price") as HTMLInputElement;
const descriptionInput = document.querySelector(
  "#description"
) as HTMLInputElement;
const isPopularInput = document.querySelector(
  "#is-popular"
) as HTMLInputElement;
const addBtn = document.querySelector("#add-btn") as HTMLButtonElement;

const iceCreamOutput = document.querySelector(
  ".ice-cream-output"
) as HTMLDivElement;

const allIceCreamFlavors: IceCreamFlavor[] = [];

const addNewFlavor = (event: MouseEvent) => {
  event.preventDefault();
  const flavor = flavorInput.value;
  const price = Number(priceInput.value);
  const isPopular = isPopularInput.checked;
  const description = descriptionInput.value;
  const newFlavor = new IceCreamFlavor(flavor, price, isPopular, description);

  //push to allFlavors array
  allIceCreamFlavors.push(newFlavor);

  //reset icreamOutput
  iceCreamOutput.innerHTML = "";

  //update HTML with all flavors
  updateHTML();

  //reset form
  flavorInput.value = "";
  priceInput.value = "";
  descriptionInput.value = "";
  isPopularInput.checked = false;
};

addBtn.addEventListener("click", addNewFlavor);

const updateHTML = () => {
  allIceCreamFlavors.forEach((item) => {
    //create HTML Elements
    const card = document.createElement("div");
    const titleElt = document.createElement("h3");
    const priceElt = document.createElement("h4");
    const popularityElt = document.createElement("p");
    const descriptionElt = document.createElement("p");

    //fill Elements
    titleElt.innerText = item._name;
    priceElt.innerText = `${item._price} Euro`;
    item._isPopular
      ? (popularityElt.innerText = "⭐⭐⭐")
      : (popularityElt.innerText = "⭐");
    item._description
      ? (descriptionElt.innerText = item._description)
      : (descriptionElt.innerText = "no description available");
    titleElt.appendChild(popularityElt);

    //add to card Element
    card.appendChild(titleElt);
    card.appendChild(priceElt);
    card.appendChild(descriptionElt);

    const scoopElt = document.createElement("p");
    scoopElt.innerText = `🍨 Scoops: ${item._scoops}`;
    card.appendChild(scoopElt);

    const totalPriceElt = document.createElement("p");
    totalPriceElt.innerText = `Total Price: ${item.totalPrice()} Euro`;
    card.appendChild(totalPriceElt);

    const plusButton = document.createElement("button");
    plusButton.innerText = "+1";
    card.appendChild(plusButton);

    plusButton.addEventListener("click", () => {
      item.increaseScoops();
      scoopElt.innerText = `🍨 Scoops: ${item._scoops}`;
      totalPriceElt.innerHTML = `Total Price: ${item
        .totalPrice()
        .toFixed(2)} Euro`;
    });

    //! ----- append to output ------
    card.className = "flav-card";
    iceCreamOutput.appendChild(card);
  });
};
