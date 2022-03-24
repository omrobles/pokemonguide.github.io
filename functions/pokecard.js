import { getData } from "./fetcher.js";
import { createName, getImg } from "./createli.js";

const pokemonWindow = document.getElementById("pokemonWindow");
const pokeCard = document.getElementById("pokeCard");
const close = document.getElementById("close");

const divCard = document.createElement("div");
const ulAbilities = document.createElement("ul");
const titleAbil = document.createElement("h4");
const chartDiv = document.createElement("div");

let stats = [];

titleAbil.innerText = "Abilities";

export function pokemonCard(element, index) {
  cleanCard();
  heightWindow();

  getData(element.url).then((result) => {
    abilitiesDeploy(result.abilities);
    createChart(result.stats);
  });

  divCard.appendChild(createName(element));
  divCard.appendChild(getImg(index));
  divCard.appendChild(titleAbil);
  divCard.appendChild(ulAbilities);

  pokeCard.appendChild(divCard);
  pokeCard.appendChild(chartDiv);
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
  chartDiv.innerHTML = "<div></div>";
  stats = [];
};

const abilitiesDeploy = (arr) => {
  arr.forEach((element) => {
    const liAbil = document.createElement("li");
    liAbil.innerText =
      element.ability.name[0].toUpperCase() + element.ability.name.slice(1);
    ulAbilities.appendChild(liAbil);
  });
};

const createChart = (arr) => {
  let stats = [];
  arr.forEach((element) => {
    stats.push(element.base_stat);
  });

  const canvas = document.createElement("canvas");
  canvas.setAttribute("id", "myChart");
  chartDiv.appendChild(canvas);
  const myChart = new Chart(canvas, {
    type: "radar",
    data: {
      labels: [
        "HP",
        "Attack",
        "Defense",
        "Special-attack",
        "Special-defense",
        "Speed",
      ],
      datasets: [
        {
          label: "Statistics",
          data: stats,
          backgroundColor: ["rgba(54, 162, 235, 0.2)"],
          borderColor: ["rgba(54, 162, 235, 1)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        r: {
          angleLines: {
            display: true,
          },
          suggestedMin: 0,
        },
      },
    },
  });

  return chartDiv;
};
