import {
  IRickandMorty,
  IInfo,
  IResult,
  IGender,
  ILocation,
  Species,
  Status,
} from "./interfaceRick";

const url = "https://rickandmortyapi.com/api/character";

const showContent = document.getElementById("content") as HTMLDivElement;

fetch(url)
  .then((resp: Response) => {
    if (resp.ok) {
      return resp.json();
    } else {
      throw Error();
    }
  })
  .then((results: IRickandMorty) => {
    return results.results;
  })
  .then((result: IResult[]) => {
    console.log(result);
    displayResult(result);
  })
  .catch((error) => {
    showContent.innerHTML = `Could not get data, Error: ${error}`;
  });

function displayResult(result: IResult[]) {
  if (showContent) {
    showContent.innerHTML = "";
    result.forEach((result: IResult) => {
      const displayName = document.createElement("h2") as HTMLHeadElement;
      displayName.textContent = `Names: ${result.name}`;
      displayName.style.color = "blue";
      displayName.style.textAlign = "center";
      displayName.style.textDecoration = "underline";
      showContent.appendChild(displayName);

      const displaySpecies = document.createElement("h4") as HTMLHeadElement;
      displaySpecies.textContent = `Species: ${result.species}`;
      displaySpecies.style.textAlign = "center";
      showContent.appendChild(displaySpecies);
    });
  }
}
