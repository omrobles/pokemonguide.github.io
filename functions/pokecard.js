import { getData } from "./fetcher.js";
import { createName, getImg } from "./createli.js";

let pokemonWindow = document.getElementById("pokemonWindow");
let pokeCard = document.getElementById("pokeCard");
let close = document.getElementById("close");
let divCard = document.createElement("div");
let prevScrollpos = window.pageYOffset;

export function pokemonCard(element, index) {
  console.log(window.pageYOffset);
  //   pokemonWindow.setAttribute("style", "top:1800px;");
  divCard.innerHTML = "<div></div>";
  divCard.appendChild(createName(element));
  divCard.appendChild(getImg(index));
  getData(element.url).then((result) => {
    pokemonWindow.setAttribute(
      "style",
      `display:block; top:${window.pageYOffset + 150}px;`
    );
    // console.log(result);
  });
  pokeCard.appendChild(divCard);
}

close.addEventListener("click", () =>
  pokemonWindow.setAttribute("style", "display:none;")
);

window.addEventListener("scroll", function () {
  let currentScrollPos = window.pageYOffset;
  prevScrollpos = currentScrollPos;
  console.log(currentScrollPos);
  return currentScrollPos;
});
// pokemonWindow.setAttribute("style", `top:${currentScrollPos}px;`);
