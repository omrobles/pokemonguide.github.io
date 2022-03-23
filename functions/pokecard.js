import { getData } from "./fetcher.js";
import { createName, getImg } from "./createli.js";

const pokemonWindow = document.getElementById("pokemonWindow");
const pokeCard = document.getElementById("pokeCard");
const close = document.getElementById("close");
const divCard = document.createElement("div");
const ulAbilities = document.createElement("ul");
const titleAbil = document.createElement("h4");

titleAbil.innerText = "Abilities";

export function pokemonCard(element, index) {
  cleanCard();
  heightWindow();

  getData(element.url).then((result) => {
    abilitiesDeploy(result);
    console.log(result);
    console.log(result.stats);
  });

  divCard.appendChild(createName(element));
  divCard.appendChild(getImg(index));
  divCard.appendChild(titleAbil);
  divCard.appendChild(ulAbilities);
  pokeCard.appendChild(divCard);
}

close.addEventListener("click", () =>
  pokemonWindow.setAttribute("style", "display:none;")
);

const heightWindow = () => {
  pokemonWindow.setAttribute(
    "style",
    `display:block; top:${
      window.pageYOffset + window.visualViewport.height * 0.15
    }px;`
  );
};

const cleanCard = () => {
  divCard.innerHTML = "<div></div>";
  ulAbilities.innerHTML = "<ul></ul>";
};

const abilitiesDeploy = (result) => {
  result.abilities.forEach((element, index) => {
    const liAbil = document.createElement("li");
    liAbil.innerText = result.abilities[index].ability.name;
    ulAbilities.appendChild(liAbil);
  });
};
