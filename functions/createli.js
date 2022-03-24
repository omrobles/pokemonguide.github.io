// MÓDULO PARA GENERAR LOS ELEMENTOS DE LA LISTA DE POKEMONES
import { pokemonCard } from "./pokecard.js";

// FUNCIÓN PARA CREAR LI DE CADA POKEMON
export function createLI(element, index) {
  const li = document.createElement("li");
  li.appendChild(getImg(index));
  li.appendChild(createName(element));
  li.addEventListener("click", () => pokemonCard(element, index));
  listDeploy.append(li);
}

// FUNCIÓN PARA GENERAR LA IMAGEN DEL POKEMON
export function getImg(index) {
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
  const image = document.createElement("img");
  image.setAttribute(
    "src",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + id + ".png"
  );
  return image;
}

// FUNCIÓN PRAR GENERAR EL NOMBRE DEL POKEMON
export function createName(element) {
  const title = document.createElement("h4");
  title.innerText = element.name[0].toUpperCase() + element.name.slice(1);
  return title;
}
