import { getData } from "./functions/fetcher.js";

let listDeploy = document.getElementById("listDeploy");

// function getData(url) {
//   return fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       return data;
//     });
// }

function pokeList() {
  console.log("Hola desde pokelist");
}

pokeList();

getData("https://pokeapi.co/api/v2/pokemon?limit=10").then((result) => {
  result.results.forEach((element, index) => {
    let li = document.createElement("li");
    li.appendChild(getImg(index));
    li.appendChild(createName(element));
    li.addEventListener("click", function () {
      console.log("Has seleccionado a pokemon " + element.name);
    });
    listDeploy.append(li);
  });
});

function getImg(index) {
  let id;
  index++;
  let num = index;
  if (num.toString().length === 1) {
    id = "00" + index;
  } else if (num.toString().length === 2) {
    id = "0" + index;
  } else {
    id = num;
  }
  let image = document.createElement("img");
  image.setAttribute(
    "src",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + id + ".png"
  );
  return image;
}

function createName(element) {
  let title = document.createElement("h4");
  title.innerText = element.name[0].toUpperCase() + element.name.slice(1);
  return title;
}
