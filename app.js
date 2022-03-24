import { getData } from "./functions/fetcher.js";
import { createLI } from "./functions/createli.js";

const listDeploy = document.getElementById("listDeploy");

pokelist();

function pokelist() {
  getData("https://pokeapi.co/api/v2/pokemon?limit=150").then((result) => {
    result.results.forEach((element, index) => {
      createLI(element, index);
    });
  });
}
