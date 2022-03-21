function getData(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);
      console.log(data.results[0]);
      const results = [];
      results.push(data.results);
      console.log("results" + results);
      return results;
    });
}

let pokeList = getData("http://pokeapi.co/api/v2/pokemon?limit=150");
